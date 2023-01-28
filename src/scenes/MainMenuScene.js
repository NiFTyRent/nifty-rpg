import Phaser from 'phaser';
import { LuminusInterfaceController } from '../plugins/LuminusInterfaceController';
import intro_video from '../assets/video/intro_video_converted_FULLHD.mp4';
import { NineSlice } from 'phaser3-nineslice';
import { PanelComponent } from '../components/PanelComponent';
import * as nearAPI from "near-api-js";

const { keyStores, connect, WalletConnection } = nearAPI;




export class MainMenuScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'MainMenuScene',
        });

        /**
         * @type { LuminusInterfaceController }
         */
        this.luminusInterfaceControler = null;

        /**
         * The Start Game Button text.
         * @type { Phaser.GameObjects.Text }
         */
        this.gameStartText = null;

        /**
         * The Offset of the Nine Slice background. It's used to protect the background from streching.
         * It will make it responsive in any scale size without losing resolution.
         * @type { number }
         * @default
         */
        this.nineSliceOffset = 10;

        /**
         * Max width of the text inside the dialog.
         * @type { number }
         * @default
         */
        this.textWidth = 452; // Defines the text Width.

        /**
         * The Font Family of the scene.
         * @type { string }
         * @default
         */
        this.fontFamily = '"Press Start 2P"';

        /**
         * The last InteractionControler Current Action.
         *  @type { any }
         */
        this.lastMenuAction = null;

        /**
         * NEAR wallet connection
         */
        this.wallet = null;
    }

    preload() {
        this.load.video('intro_video', intro_video, 'loadeddata', false, true);
    }

    create() {
        const myKeyStore = new keyStores.BrowserLocalStorageKeyStore();

        const connectionConfig = {
            networkId: "testnet",
            keyStore: myKeyStore, // first create a key store
            nodeUrl: "https://rpc.testnet.near.org",
            walletUrl: "https://wallet.testnet.near.org",
            helperUrl: "https://helper.testnet.near.org",
            explorerUrl: "https://explorer.testnet.near.org",
        };

        connect(connectionConfig).then((nearConnection) => {
            this.wallet = new WalletConnection(nearConnection);
            // Make sure the account is loaded.
            setTimeout(() => {
                const signedIn = this.wallet.isSignedIn();
                this._render(signedIn);
            }, 10)
        })

    }

    _render(signedIn) {
        this.video = this.add.video(this.cameras.main.x, this.cameras.main.y, 'intro_video');

        if (this.scale.orientation === 'portrait-primary') {
            this.video.setScale(2);
            this.video.setOrigin(0.4, 0);
        } else {
            // if Landscape, just fits the video on the canvas.
            this.video.scaleX = this.cameras.main.width / this.video.width;
            this.video.scaleY = this.cameras.main.height / this.video.height;
            this.video.setOrigin(0, 0);
        }

        this.video.setLoop(true);
        this.video.play();

        // Prevents video freeze when game is out of focus (i.e. user changes tab on the browser)
        this.video.setPaused(false);

        this.sound.volume = 0.35;
        this.themeSound = this.sound.add('forest', {
            loop: true,
        });
        this.themeSound.play();
        this.luminusInterfaceControler = new LuminusInterfaceController(this);

        this.luminusInterfaceControler.interfaceElements[0] = [];
        this.luminusInterfaceControler.closeAction = null;

        if (!signedIn) {
            this.signInText = this.add
                .text(this.cameras.main.midPoint.x, this.cameras.main.midPoint.y, 'Sign in with NEAR wallet', {
                    fontSize: 34,
                    fontFamily: '"Press Start 2P"',
                })
                .setOrigin(0.5, 0.5)
                .setInteractive();

            this.signInText.on('pointerdown', (pointer) => {
                this._signIn();
            });

            const signInAction = {
                element: this.signInText,
                action: '_signIn',
                context: this,
            };
            this.luminusInterfaceControler.interfaceElements[0][0] = [signInAction];
            this.luminusInterfaceControler.currentElementAction = signInAction;
            this.luminusInterfaceControler.updateHighlightedElement(this.signInText);

        } else {
            this.gameStartText = this.add
                .text(this.cameras.main.midPoint.x, this.cameras.main.midPoint.y, 'Start Game', {
                    fontSize: 34,
                    fontFamily: '"Press Start 2P"',
                })
                .setOrigin(0.5, 0.5)
                .setInteractive()
                .on('pointerdown', (pointer) => {
                    this.startGame()
                });
            const startGameAction = {
                element: this.gameStartText,
                action: 'startGame',
                context: this,
                args: 'MainScene',
            }
            this.luminusInterfaceControler.interfaceElements[0][0] = [startGameAction];

            const signOutText = this.add
                .text(this.cameras.main.midPoint.x, this.cameras.main.midPoint.y + 60, 'Log out', {
                    fontSize: 34,
                    fontFamily: '"Press Start 2P"',
                })
                .setOrigin(0.5, 0.5)
                .setInteractive()
                .on('pointerdown', (pointer) => {
                    this._signOut();
                });

            this.luminusInterfaceControler.interfaceElements[0][1] = [{
                element: signOutText,
                action: '_signOut',
                context: this,
            }];

            this.luminusInterfaceControler.currentElementAction = startGameAction;
            this.luminusInterfaceControler.updateHighlightedElement(this.gameStartText);
        }

        this.scale.on('resize', (resize) => {
            this.resizeAll(resize);
        });

    }

    _signIn() {
        this.wallet.requestSignIn({ contractId: 'niftyrpg.mintspace2.testnet' });
    }
    _signOut() {
        this.wallet.signOut();
        this.scene.start('MainMenuScene');
    }

    /**
     * resizes the game canvas.
     */
    resizeAll(size) {
        if (size && this && this.cameras && this.cameras.main) {
            this.gameStartText.setPosition(size.width / 2, size.height / 2);
            this.creditsText.setPosition(this.gameStartText.x, this.gameStartText.y + 60);
            this.video.setPosition(this.cameras.main.x, this.cameras.main.y);
            if (size.aspectRatio < 1) {
                this.video.setScale(2);
                this.video.setOrigin(0.4, 0);
            } else {
                // if Landscape, just fits the video on the canvas.
                this.video.scaleX = this.cameras.main.width / this.video.width;
                this.video.scaleY = this.cameras.main.height / this.video.height;
                this.video.setOrigin(0, 0);
            }
        }
    }

    startGame() {
        this.themeSound.stop();
        this.cameras.main.fadeOut(1000, 0, 0, 0);
        let startSound = this.sound.add('start_game');
        startSound.play();
        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            window.accountId = this.wallet.getAccountId();
            this.scene.start('MainScene');
            this.scene.stop();
        });
    }
}
