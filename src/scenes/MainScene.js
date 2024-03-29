import Phaser from 'phaser';
import { LuminusWarp } from '../plugins/LuminusWarp';
import { LuminusObjectMarker } from '../plugins/LuminusObjectMarker';
import AnimatedTiles from '../plugins/AnimatedTiles';
import { LuminusEnvironmentParticles } from '../plugins/LuminusEnvironmentParticles';
import { LuminusEnemyZones } from '../plugins/LuminusEnemyZones';
import { LuminusMapCreator } from '../plugins/LuminusMapCreator';
import { getNftItems } from '../consts/NFT';

export class MainScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'MainScene',
        });
        this.player = null;
    }

    preload() {
        this.load.scenePlugin('animatedTiles', AnimatedTiles, 'animatedTiles', 'animatedTiles');
    }

    create() {
        this.cameras.main.setZoom(2.5);

        this.mapCreator = new LuminusMapCreator(this);
        this.mapCreator.create();

        const camera = this.cameras.main;
        camera.startFollow(this.player.container);

        const luminusWarp = new LuminusWarp(this, this.player, this.mapCreator.map);
        luminusWarp.createWarps();
        const interactiveMarkers = new LuminusObjectMarker(this, this.mapCreator.map);
        interactiveMarkers.create();

        this.scene.launch('DialogScene', {
            player: this.player,
            map: this.mapCreator.map,
            scene: this,
        });

        this.joystickScene = this.scene.get('JoystickScene');

        this.scene.launch('HUDScene', { player: this.player });

        this.sys.animatedTiles.init(this.mapCreator.map);
        this.particles = new LuminusEnvironmentParticles(this, this.mapCreator.map);
        this.particles.create();

        this.sound.volume = 0.35;
        this.themeSound = this.sound.add('path_to_lake_land', {
            loop: true,
        });
        this.themeSound.play();

        this.enemies = [];

        this.luminusEnemyZones = new LuminusEnemyZones(this, this.mapCreator.map);
        this.luminusEnemyZones.create();
        this.player.nftItems = [];
        getNftItems(window.accountId, (count) => {
          this.player.nftItems = [{ id: 3, count: count }]
        })
    }

    /**
     * Stops all scene music.
     */
    stopSceneMusic() {
        this.themeSound.stop();
    }

    update(time, delta) {
    }
}
