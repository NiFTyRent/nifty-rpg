import Phaser from 'phaser';
import OutlinePostFx from 'phaser3-rex-plugins/plugins/outlinepipeline.js';
/**
 * @class
 */
export class LuminusOutlineEffect {
    /**
     * Creates an outline effect to a given object.
     * @param { Phaser.Scene } scene
     */
    constructor(scene) {
        /**
         * The scene in which the outline will be applyed.
         * @type { Phaser.Scene }
         */
        this.scene = scene;

        /**
         * The post processing layer that will present the outline effect.
         * @type { RexOutlineEffectLayer }
         */
        this.effectLayer = null;

        /**
         * the color of the outline.
         * @type { Phaser.Display.Color }
         * @default
         */
        this.outlineColor = 0xff0000;

        /**
         * The outline Thickness. The bigger the number, the bigger the thickness.
         * @type { number }
         */
        this.outlineThickness = 1;

        this.outlinePostFxPlugin = this.scene.plugins.get('rexOutlinePipeline');
        console.log(this.outlinePostFxPlugin);
    }

    /**
     * Applies the effect to a Game Object.
     * @param { Phaser.Physics.Arcade.Sprite } object
     */
    applyEffect(object) {
        object.setPostPipeline(OutlinePostFx);
        var pipelineInstance = this.outlinePostFxPlugin.get(object)[0];
        pipelineInstance.setOutlineColor(this.outlineColor);
        pipelineInstance.thickness = this.outlineThickness;
    }

    /**
     * Removes the effect to a given Game Object.
     * @param { Phaser.Physics.Arcade.Sprite } object
     */
    removeEffect(object) {
        object.removePostPipeline(OutlinePostFx);
    }
}
