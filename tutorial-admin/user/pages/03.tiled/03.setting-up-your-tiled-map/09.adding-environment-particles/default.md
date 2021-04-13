---
title: 'Adding Environment Particles'
menu: 'Step 9 - Adding Environment Particles'
---

<h1 class="text-center">Step 9 - Adding Environment Particles</h1>

One of the things that make a game feel alive are particles. I have implemented a symple and easy to use particles system.

First, select the `objects layer` and then select the `particles` object layer.

[![](https://i.ibb.co/HF2PsWL/Screen-Shot-2021-04-12-at-09-59-25.png?classes=center)](https://i.ibb.co/HF2PsWL/Screen-Shot-2021-04-12-at-09-59-25.png?target=_blank)

Then you have to create a rectangle, where the particles will Spawn. Name the rectangle area `dust` and create a property called `particles` (string typed) anc set it to `leaves`. Save and Export.

[![](https://i.ibb.co/nmGHPwG/Screen-Shot-2021-04-12-at-10-26-23.png?classes=center)](https://i.ibb.co/nmGHPwG/Screen-Shot-2021-04-12-at-10-26-23.png?target=_blank)

Now all you have to do, is to add the `LuminusEnvironmentParticles` to the `create` function of your Scene.

```
		// Created Particles
        this.particles = new LuminusEnvironmentParticles(
            this,
            map.map
        );
        this.particles.create();
```

That's all, check your Scene and you should have working particles.

[![](https://i.ibb.co/4K8qjKj/Screen-Recording-2021-04-12-at-10-39-57.gif?classes=center)](https://i.ibb.co/4K8qjKj/Screen-Recording-2021-04-12-at-10-39-57.gif?target=_blank)

You can also create clouds. Do the exact same process, Create a new rectangle and create set the property of the new rectangle to the value of `cloud` and you should have clouds. Beware that the clouds will spawn every 15 seconds. You can change all the setting in the `LuminusEnvironmentParticles`, check the `JSDocs` to learn more about it.

[![](https://i.ibb.co/n0RcMnP/Screen-Recording-2021-04-12-at-10-49-41.gif?classes=center)](https://i.ibb.co/n0RcMnP/Screen-Recording-2021-04-12-at-10-49-41.gif?target=_blank)

Something that you should have in mind is that the particles will be destroyed once they touch the limits of the spawn zones. So the `cloud` zone should be considerably bigger than the normal particles.

#### [Previous Step - How to Effectivelly Draw a Tile Map](../how-to-effectively-draw-a-tile-map) | [Next Step - How to Add Information Zones](../how-to-add-information-zones)