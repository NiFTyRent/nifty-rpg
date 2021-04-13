<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledMarkdownFile',
    'filename' => '/Users/jonatan/Documents/Projects/games/collision/tutorial-admin/user/pages/03.tiled/03.setting-up-your-tiled-map/12.how-to-add-warps/default.md',
    'modified' => 1618254881,
    'data' => [
        'header' => [
            'title' => 'How to add Warps',
            'menu' => 'Step 12 - How to Add Warps'
        ],
        'frontmatter' => 'title: \'How to add Warps\'
menu: \'Step 12 - How to Add Warps\'',
        'markdown' => '<h1 class="text-center">Step 12 - How to Add Warps</h1>

Every game has some kind of warp to teleport the player to another destination. The Luminus RPG has one either. Pay attention, because this one is going to be really usefull for you.

Before we create the actual Warp, we need somewhere to go. I will create the House\'s inner somewhere far from the house, so the player can\'t see it on a big screen. I\'m going to use a Pre-Loaded asset called `inner`.

[![](https://i.ibb.co/BZ39gfw/Screen-Shot-2021-04-12-at-15-23-31.png?classes=center)](https://i.ibb.co/BZ39gfw/Screen-Shot-2021-04-12-at-15-23-31.png?target=_blank)

We are going to have to add this asset to the `map.tilesetImages` configuration of the `LuminusMapCreator`. The config will be something like this.

```
        map.tilesetImages = [
            new TilesetImageConfig(
                \'tutorial_tileset_extruded\',
                \'tutorial_tileset\'
            ),
            new TilesetImageConfig(\'collision\', \'collision_tile\'), // Add these lines to use the Collision tiles.
            new TilesetImageConfig(\'overworld\', \'tiles_overworld\'), // Add these lines to use the Overworld Tileset.
            new TilesetImageConfig(\'inner\', \'inner\'), // Add this for inner
        ];
```

Now we can start creating the house.

[![](https://i.ibb.co/dkqvVwD/Screen-Shot-2021-04-12-at-15-41-36.png?classes=center)](https://i.ibb.co/dkqvVwD/Screen-Shot-2021-04-12-at-15-41-36.png?target=_blank)

It doesn\'t have to be fancy, just has to has a door... Now... Let\'s select the `warps` Object Layer and create a rectangle on both doors, just enought so the player\'s container can touch it.

[![](https://i.ibb.co/pLy7g7f/Screen-Shot-2021-04-12-at-15-47-01.png?classes=center)](https://i.ibb.co/pLy7g7f/Screen-Shot-2021-04-12-at-15-47-01.png?target=_blank)

[![](https://i.ibb.co/bKyswLs/Screen-Shot-2021-04-12-at-15-49-17.png?classes=center)](https://i.ibb.co/bKyswLs/Screen-Shot-2021-04-12-at-15-49-17.png?target=_blank)

We will also need a drop point, where the player will spawn once he warps to that location. Just add two points near the warps.

[![](https://i.ibb.co/JFwbSGq/Screen-Shot-2021-04-12-at-16-01-07.png?classes=center)](https://i.ibb.co/JFwbSGq/Screen-Shot-2021-04-12-at-16-01-07.png?target=_blank)

Now we have to connect the warps and the drop points. It\'s really simple. Click the `outter_house` rectangle and create a property called `goto` and it should be of type `object`. The Object Property will let you select an object as reference. You can select your object by searching for it, or by selecting it.

Select the `drop_point_innerhouse` or whatever you called your drop point.
[![](https://i.ibb.co/7Rpv8r6/Screen-Shot-2021-04-12-at-16-03-33.png?classes=center)](https://i.ibb.co/7Rpv8r6/Screen-Shot-2021-04-12-at-16-03-33.png?target=_blank)

Now you can select the `inner_house` and do the same, or use the object selection to link them both.
[![](https://i.ibb.co/gPwJhvw/Screen-Shot-2021-04-12-at-16-06-32.png?classes=center)](https://i.ibb.co/gPwJhvw/Screen-Shot-2021-04-12-at-16-06-32.png?target=_blank)

If you set the Drop points to be the `inner_house` or `outter_house` you will be in an infinite loop. the player will keep warpping forever.

Last but not least, the code. Add it to the end of the `create` method of your Scene. And as always, don\'t forget to save and export your tiled map.

[![](https://i.ibb.co/rvqhm69/Screen-Shot-2021-04-12-at-16-10-01.png?classes=center)](https://i.ibb.co/rvqhm69/Screen-Shot-2021-04-12-at-16-10-01.png?target=_blank)

#### [Previous Step - Adding Help Markers](../adding-help-markers) | [Next Step - Creating Enemy Zones](../creating-enemy-zones)'
    ]
];