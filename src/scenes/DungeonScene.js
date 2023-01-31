import Phaser from 'phaser';
import { Player } from '../entities/Player';
import { LuminusDungeonGenerator } from '../plugins/LuminusDungeonGenerator';
import { LuminusFogWarManager } from '../plugins/LuminusFogWarManager';
import { Enemy } from '../entities/Enemy';
import { PlayerConfig } from '../consts/player/Player';
import { NiftyRent } from "@niftyrent/sdk"

export class DungeonScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'DungeonScene',
        });

        // Cnnfig NiftyRent SDK
        this.niftyrent = new NiftyRent({
            defaultContractAddr: "niftyrpg.mintspace2.testnet",
            allowedRentalProxies: ["nft-rental.testnet"],
        });
    }

    /**
     * Creates the Dungeon Scene
     */
    create() {
        this.dungeon = new LuminusDungeonGenerator(this);
        this.dungeon.create();
        this.player = new Player(
            this,
            this.dungeon.map.widthInPixels / 2,
            this.dungeon.map.heightInPixels / 2,
            PlayerConfig.texture,
            this.dungeon.map
        );
        this.cameras.main.startFollow(this.player.container);
        this.cameras.main.setZoom(2.5);
        this.cameras.main.setAlpha(0);

        this.niftyrent.init().then(() => {
            Promise.all(["0", "1", "2", "3", "4"].map(id =>
                this.niftyrent.is_current_user(window.accountId, id)
            )).then(results => {
                const count = results.filter(x => x).length
                if (count > 0) {
                    // Add the candle item to the player's inventory.
                    this.player.items.push({ id: 3, count: count })
                    this._prepareDungoen();
                }
            })
        })
    }

    _prepareDungoen() {
        this.physics.add.collider(
            this.player.container,
            this.dungeon.groundLayer
        );
        this.scene.launch('DialogScene', {
            player: this.player,
            map: this.dungeon.map,
            scene: this,
        });

        this.scene.launch('HUDScene', { player: this.player });
        this.enemies = [];
        this.dungeon.dungeon.rooms.forEach((room) => {
            var spriteBounds = Phaser.Geom.Rectangle.Inflate(
                Phaser.Geom.Rectangle.Clone(
                    this.add.rectangle(
                        (room.x + 1) * this.dungeon.tileWidth,
                        (room.y + 1) * this.dungeon.tileWidth,
                        (room.width - 3) * this.dungeon.tileWidth,
                        (room.height - 3) * this.dungeon.tileWidth
                    )
                ),
                0,
                0
            );
            for (let i = 0; i < 5; i++) {
                const pos = Phaser.Geom.Rectangle.Random(spriteBounds);
                const enemy = new Enemy(this, pos.x, pos.y, 'bat', 2);
                this.enemies.push(enemy);
            }
        });

        this.physics.add.collider(this.player.container, this.enemies);

        this.sound.volume = 0.4;

        this.themeSong = this.sound.add('dark_theme', {
            loop: true,
        });
        this.themeSong.play();

        this.ambientSound = this.sound.add('dungeon_ambient', {
            volume: 1,
            loop: true,
        });
        this.ambientSound.play();
        this.fog = new LuminusFogWarManager(
            this,
            this.dungeon.map,
            this.player
        );
        this.fog.createFog();
        this.cameras.main.setAlpha(1);
    }

    update() {
        if (this.fog) {
            this.fog.updateFog();
        }
    }
}
