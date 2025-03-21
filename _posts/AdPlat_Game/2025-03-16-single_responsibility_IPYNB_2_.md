---
toc: True
comments: True
layout: post
title: Single Responsibility Principle (SRP)
description: This post will introduce you to Single Responsibility Principle and how to apply it in your code.
categories: ['Adventure plus Platformer Help (AdPlat)']
permalink: /adplat/srp
courses: {'csse': {'week': 14}}
type: ccc
---

## Designing with Single Responsibility Principle (SRP)

The Single Responsibility Principle is a programming concept that states that a class or method should have only one reason to change. This means that a class or method should only have one job or responsibility. This principle is part of the SOLID principles of Object-Oriented Programming (OOP).

- **Class Design**: SRP helps to keep the code more maintainable and understandable. When classes have more than one responsibility, they can become complex and harder to understand, maintain, and change. By ensuring that each class has only one responsibility, we can keep our code clean, organized, and easier to work with.

- **Method Design**: In game development, it's crucial to keep code as simple and clear as possible using SRP. Games often involve complex systems interacting with each other, and having clear, single-purpose methods can make it easier to understand how these systems work together. It also makes it easier to isolate and fix bugs, as each method is responsible for one thing.

### The Importance of Single Purpose Classes and Methods in Game Development

- **Easier Debugging and Testing**: When each class and method has a single responsibility, it's easier to write tests for them and to debug them when things go wrong. You can focus on testing one specific functionality at a time, and if a test fails, you know exactly where to look for the problem.

- **More Readable and Maintainable Code**: Code that follows the SRP is generally more readable and easier to maintain. Each class and method does one thing, so it's easier to understand what each part of the code is supposed to do. This makes it easier for other developers to understand your code, and it makes it easier for you to understand and update your code in the future.

## The Role of SRP in Game Design

Code complexity without the Single Responsibility Principle (SRP) can quickly become unreadable, and changes can become daunting. Code with SRP more clearly illustrates code flow and order of operations.

### GameLoop 

Here is an example of the SRP design pattern showing the `gameLoop()` method. The responsibility of this method is to keep the level running unless it is ended or paused. It calls external methods, like `this.currentLevel.update()`, to handle the logic of updating the level.

```js
/**
 * The main game loop 
 */
gameLoop() {
    // If the level is not set to continue, handle the level end condition 
    if (!this.currentLevel.continue) {
        this.handleLevelEnd();
        return;
    }
    // If the game level is paused, stop the game loop
    if (this.isPaused) {
        return;
    }
    // Level updates
    this.currentLevel.update();
    this.handleInLevelLogic();
    // Recurse at frame rate speed
    requestAnimationFrame(this.gameLoop.bind(this));
}
```

### Character Update

Here is the `update` method defined in the `Character` class, which is a direct descendant of the `GameObject` class. The `Player` class is a direct descendant of the `Character` class. This follows the SRP design, where the `Character` class handles moving logic for `draw`, `collisionChecks`, and `move` in SRP methods.

```js
/**
 * Manages the object's look, state, and movement. 
 */
update() {
    this.draw();             // Draw the character on the canvas
    this.collisionChecks();  // Check for collisions with other objects
    this.move();             // Update the character's position
}
```

### GameObject Collision Checks 

Here is an example of managing collision checks using SRP. A key consideration in this SRP design is the use of the `GameObject` class to check for collisions in one place. `GameObject` is the parent class of `Character` and other non-character objects like `Blocks`.

This method does not handle all the hitbox logic but focuses on detecting collisions and redirecting control. The `isCollision` method compares the canvas in a `GameObject` method, while the `handleCollisionEvent` method is redirected to the child class. This technique of SRP allows consideration for OOP hierarchies and engine logic to be shared or separated according to need.

```javascript
/** 
 * Collision checks
 * Uses Player's isCollision to detect hits
 * Calls handleCollisionEvent on hit
 */
collisionChecks() {
    let collisionDetected = false;

    for (var gameObj of this.gameEnv.gameObjects) {
        if (gameObj.canvas && this != gameObj) {
            this.isCollision(gameObj); // Check for collision with another game object
            if (this.collisionData.hit) {
                collisionDetected = true;
                this.handleCollisionEvent(); // Handle the collision event
            }
        }
    }

    if (!collisionDetected) {
        this.state.collisionEvents = []; // Reset collision events if no collision is detected
    }
}
```

## Hacks

The `draw()` method in the `Character` class has become complex, as it now includes transformation and explosion elements. To make it SRP compliant, we can redesign the `draw()` method by creating other methods that handle the `ctx` changes.

Here is the refactored `draw()` method proposal: 

```js
draw() {
    if (this.spriteSheet) {
        this.setupCanvas();
        this.transformCTX();
        this.filterCTX();
        this.clearCanvas();
        this.drawSprite();
        this.updateFrameIndex();
    } else {
        this.drawDefaultSquare();
    }
}
```

## College and Game Terms

### Method Refactoring
- **Definition**: The process of restructuring existing code without changing its external behavior to improve readability, maintainability, and extensibility.
- **Example**: Refactoring the `draw()` method to adhere to the Single Responsibility Principle.

### Game Loop
- **Definition**: A fundamental part of game programming that continuously updates the game state and renders the game.
- **Example**: The `gameLoop()` method managing the game's main loop.

### Collision Detection
- **Definition**: The computational problem of detecting when two or more physical objects in a game environment intersect.
- **Example**: The `collisionChecks()` method in the `GameObject` class.

### Canvas API
- **Definition**: A part of HTML5 that allows for drawing graphics via JavaScript and the HTML `<canvas>` element.
- **Example**: Using the `ctx` (context) to draw the character on the canvas.
