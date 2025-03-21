---
toc: True
layout: post
title: Hack Blog
description: Hacks I completed/helped on
permalink: /AdPlat/HackBlog/
---

<h1>Hacks</h1>

<h2>Hack 4</h2>

- Started the process of turning the absolute movement value into a sprite data value
- Made V1 using editing reset value 


```python
updateVelocityAndDirection() {
    this.velocity.x = 3; // here it should automatically reset to 3, giving the illusion of auto movement
    this.velocity.y = 0;
}
```


```python
/**
 * @property {number} xVelocity - The velocity of the object along the x-axis.
 * @property {number} yVelocity - The velocity of the object along the y-axis.
 * @property {number} sVELOCITYY - The starting velocity of the object along the y-axis. //this one
 * @property {number} sVELOCITYX - The starting velocity of the object along the x-axis. //this one
 */
```

- for V2 made another class file for snowspeeder so that movement changes only affected it
- noticed that velocity is set to 0 on key up so i removed the function that resets velocity to 0 to simulate auto movement


```python
handleKeyUp({ keyCode }) {
    // remove the lifted key from the active keys array
    if (keyCode in this.pressedKeys) {
        delete this.pressedKeys[keyCode];
    }
    // adjust the velocity and direction based on the remaining keys
   // this.updateVelocityAndDirection(); would normally be here
}
```

<h2>Hack 2</h2>

- helped debug hack
- issues in matching src names, needed to be chillguy2 not chillguy


```python
const sprite_src_chillguy2 = path + "/images/gamify/chillguyv2.png"; //chill guy playere data
    const CHILLGUY2_SCALE_FACTOR = 5;
    const sprite_data_chillguy2 = {
        id: 'Chill Guy',
        greeting: "Hi, I am Chill Guy, the desert wanderer. I am looking for wisdom and adventure!",
        src: sprite_src_chillguy2, // was originally chillguy
        SCALE_FACTOR: CHILLGUY2_SCALE_FACTOR, //was originally chillguy
        STEP_FACTOR: 1000,
        ANIMATION_RATE: 50,
        INIT_POSITION: { x: 0, y: height - (height / CHILLGUY2_SCALE_FACTOR) },
    }
    // fixed all mismatching names
```
