<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledMarkdownFile',
    'filename' => '/Users/jonatan/Downloads/grav-admin/user/pages/03.tiled/01.creating-enemy-zones/default.md',
    'modified' => 1617825849,
    'data' => [
        'header' => [
            'title' => 'Creating Enemy Zones',
            'media_order' => 'Screen Shot 2021-04-07 at 15.40.15.png'
        ],
        'frontmatter' => 'title: \'Creating Enemy Zones\'
media_order: \'Screen Shot 2021-04-07 at 15.40.15.png\'',
        'markdown' => '# <h1 class="text-center">Creating Enemy Zones</h1> 
![Screen%20Shot%202021-04-07%20at%2015.40.15](Screen%20Shot%202021-04-07%20at%2015.40.15.png "Screen%20Shot%202021-04-07%20at%2015.40.15?classes=center")

## Object Layer

In order to create enemies in your game you must have an [Object Layer](https://doc.mapeditor.org/en/stable/manual/objects/) called `enemies`, just like in the image below.

![](https://i.imgur.com/HhYbmxG.png?classes=center)

As the Image shows, you should have the enemies object layer selected in order to create the enemies in the correct layer. Once you have it selected, click on the `Insert Rectangle` icon or Press the `R` Key, in order to create a rectagle on your tiled map.

![](https://i.ibb.co/6PV6xhj/Rectangle.png?classes=center)

Your cursor now should look like a square, it means that the next time you press the left mouse button and drag your mouse it will create a rectangle shaped zone.

![](https://i.ibb.co/q17h9L1/Screen-Shot-2021-04-07-at-14-57-33.png?classes=center)

Now lets create a Spawn Zone for your enemies. Click the left mouse button and Drag your mouse until you reach the desired Enemy Zone size, then release the left mouse button.

![](https://i.ibb.co/LpWLxnS/Screen-Shot-2021-04-07-at-15-04-28.png?classes=center)

Now you must pay attention to a couple of things. Once you release the left mouse button you should have the Enemy Zone selectected, you may name it whatever you want, but it\'s not necessary, you can leave it without a name. What really matters here is the properties Section on the left side of the Screen. Lets click on the `Plus` icon and add two new properties, name the first one `id` that should be a `string` and the second property should be called `number` and should be of type `int`. The `id` property represents the ID of the Enemy, and the `number` property  is the number of that specific enemy that will spawn on that area. The `id` property should be defined on your `EnemiesSeedConfig.js` accordingly, and should represent a real monster on your game, otherwhise the game will break.

![](https://i.ibb.co/xDsx6yN/Screen-Shot-2021-04-07-at-15-23-29.png?classes=center)![](https://i.ibb.co/R2XBKCW/Screen-Shot-2021-04-07-at-15-22-53.png?classes=center)

When You are done with that your properties panel should look like this.

![](https://i.ibb.co/QvYzMF3/Screen-Shot-2021-04-07-at-15-26-09.png?classes=center)

Last but not least, you must create the `LuminusEnemyZones` configuration, inside the `create` method of your Scene.

```
	this.luminusEnemyZones = new LuminusEnemyZones(this, map);
	this.luminusEnemyZones.create();
```


You can read more about the `LuminusEnemyZones` on the JSDocs provided by the Template. Just run `npm run jsdoc` on the root of the template project.



'
    ]
];