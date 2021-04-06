import { EnemiesSeedConfig } from '../consts/enemies/EnemiesSeedConfig';
import { Item } from '../entities/Item';

/**
 * This class is responsible for dropping items from a given entity.
 * @class
 */
export class LuminusDropSystem {
    constructor(scene, entity) {
        /**
         * The game scene that the player is playing.
         * @type { Phaser.Scene }
         */
        this.scene = scene;

        /**
         * The id of the entity that will drop something.
         * @type { number }
         */
        this.entityId = entity.id;

        /**
         * The Entity that will drop the items.
         * @type { Phaser.GameObjects.Sprite }
         */
        this.entity = entity;

        /**
         * The items that the entity will drop.
         * @type { Array }
         */
        this.drops = entity.drops;

        /**
         * Drops the items from an entity.
         */
        this.dropItems = () => {
            let zone = this.scene.add.zone(
                this.entity.container.x,
                this.entity.container.y,
                10,
                10
            );
            var spriteBounds = Phaser.Geom.Rectangle.Inflate(
                Phaser.Geom.Rectangle.Clone(zone),
                0,
                0
            );
            const pos = Phaser.Geom.Rectangle.Random(spriteBounds);

            this.drops.forEach((drop) => {
                const chance = Math.random() * 100;
                if (chance - drop.chance >= 0 || drop.chance === 100) {
                    let item = new Item(this.scene, pos.x, pos.y - 20, drop.id);
                    this.scene.tweens.add({
                        targets: item,
                        props: {
                            y: {
                                value: pos.y - 10,
                            },
                        },
                        duration: 200,
                    });
                }
            });
        };
    }
}