import tiles from '../assets/maps/tilesets/Overworld.png';
import tiles_overworld from '../assets/maps/tilesets/Overworld-extruded.png';
import inner from '../assets/maps/tilesets/Inner-extruded.png';
import collision_tile from '../assets/maps/tilesets/collision.png';
import player_image from '../assets/sprites/player.png';
import dialog from '../assets/sprites/dialog_paper.png';
import space from '../assets/sprites/space_key.png';
import buttonA from '../assets/sprites/buttonA.png';
import question_mark from '../assets/sprites/question_mark.png';
import spread from '../assets/sprites/spread.png';
import maximize from '../assets/sprites/maximize.png';
import close from '../assets/sprites/close.png';
import logo_phaser from '../assets/sprites/logo.png';
import luminus_candle from '../assets/sprites/candle.png';
import cog_settings from '../assets/sprites/cog.png';
import settings_background from '../assets/sprites/settings_background.png';

// Particles / Clouds
import rain from '../assets/sprites/rain.png';
import particle_warp from '../assets/sprites/particle_warp.png';
import cloud from '../assets/sprites/clouds/cloud.png';

// Atlas
import atlas_character_image from '../assets/sprites/character.png';
import atlas_character_image_json from '../assets/sprites/character.json';
import atlas_flares_image from '../assets/sprites/flares.png';
import atlas_flares_image_json from '../assets/sprites/flares.json';
import atlas_chat_bubble_animation_image from '../assets/sprites/chat_bubble_animation.png';
import atlas_chat_bubble_animation_image_json from '../assets/sprites/chat_bubble_animation.json';

// JSON
import tile_map_json from '../assets/maps/larus/larus.json';

// Sound
import space_sound_key from '../assets/sound/typing/space_sound.mp3';
import typing_key_01 from '../assets/sound/typing/typing_key_01.mp3';
import typing_key_02 from '../assets/sound/typing/typing_key_02.mp3';
import typing_key_03 from '../assets/sound/typing/typing_key_03.mp3';
import typing_key_04 from '../assets/sound/typing/typing_key_04.mp3';
import typing_key_05 from '../assets/sound/typing/typing_key_05.mp3';
import path_to_lake_land from '../assets/sound/path_to_lake_land.ogg';

export const Images = [
    {
        name: 'tiles',
        image: tiles,
    },
    {
        name: 'tiles_overworld',
        image: tiles_overworld,
    },
    {
        name: 'inner',
        image: inner,
    },
    {
        name: 'collision_tiles',
        image: collision_tile,
    },
    {
        name: 'player',
        image: player_image,
    },
    {
        name: 'dialog',
        image: dialog,
    },
    {
        name: 'space',
        image: space,
    },
    {
        name: 'buttonA',
        image: buttonA,
    },
    {
        name: 'question_mark',
        image: question_mark,
    },
    {
        name: 'spread',
        image: spread,
    },
    {
        name: 'maximize',
        image: maximize,
    },
    {
        name: 'close_button',
        image: close,
    },
    {
        name: 'logo_phaser',
        image: logo_phaser,
    },
    {
        name: 'luminus_candle',
        image: luminus_candle,
    },
    {
        name: 'rain',
        image: rain,
    },
    {
        name: 'particle_warp',
        image: particle_warp,
    },
    {
        name: 'cog_settings',
        image: cog_settings,
    },
    {
        name: 'settings_background',
        image: settings_background,
    },

    //Clouds
    {
        name: 'cloud',
        image: cloud,
    },
];

export const AtlasConfig = [
    {
        name: 'character',
        image: atlas_character_image,
        json: atlas_character_image_json,
    },
    {
        name: 'flares',
        image: atlas_flares_image,
        json: atlas_flares_image_json,
    },
    {
        name: 'chat_bubble_animation',
        image: atlas_chat_bubble_animation_image,
        json: atlas_chat_bubble_animation_image_json,
    },
];

export const TilemapConfig = [
    {
        name: 'larus',
        json: tile_map_json,
    },
];
export const LuminusAudios = [
    {
        name: 'space_sound',
        audio: space_sound_key,
    },
    {
        name: 'typing_key_01',
        audio: typing_key_01,
    },
    {
        name: 'typing_key_02',
        audio: typing_key_02,
    },
    {
        name: 'typing_key_03',
        audio: typing_key_03,
    },
    {
        name: 'typing_key_04',
        audio: typing_key_04,
    },
    {
        name: 'typing_key_05',
        audio: typing_key_05,
    },
    {
        name: 'path_to_lake_land',
        audio: path_to_lake_land,
    },
];