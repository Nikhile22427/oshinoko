---
toc: False
layout: post
title: Index to Topics
description: Build guide to the Adventure plus Platformer game.  Topics and help system to foster learning, discussion, and exploration of the game.
categories: ['Adventure plus Platformer Help (AdPlat)']
permalink: /adplat/intro
type: ccc
courses: {'csse': {'week': 13}}
author: John Mortensen
---

## [Link to Gamify](https://nighthawkcoders.github.io/portfolio_2025/gamify)
In the Adventure plus Plaformer game help system and notebooks, we will guide future developers through a step-by-step process of creating all of the key components of this game. The help system is broken down into various categories (using front matter), each category focusses on a specific aspect of the game, implementation, and suggests hacks for deeper learning. By the end of reviewing the help topics, you will have better understanding of the platformer game components and be encouraged to extend the game.

### Basic of the Adventure plus Platfomer Game 

#### Concepts

**Game Objects:  Overview a GameObject**
- Learn about defining the game objects properties.
- Define and object literal for game object properties.
- Create a game object using Player class.
- Look at the draw() method


#### Adventure Game

**Background: Creating a Background**
- Learn how to set up the game canvas using HTML and JavaScript.
- Craft a visually appealing background that complements the game's theme.
- Incorporate background elements that contribute to the game's atmosphere and aesthetics with parallax scrolling for a realistic effect.

**Player: Setting Up the Player**
- Create the player character class with attributes like position, velocity, and dimensions.
- Implement basic player movement and physics, including gravity and jumping.

**NPC: Friendly**
- NPCs interaction leads to mini quizzes
- Points system, Emerald

**NPC: Enemies (Hope, Namira, Yuna)**
Render enemy characters (creepers) that move independently, consequence when there is a collision (Namira)
Enemy animations (ex. explosion) (Namira)
- Collision Handling
- Animations

Collision mapping with Tiled, creating detailed collisions maps for both RPG and Plat game maps (Hope)
- Tiled Map

Post collision handling and dialogue between user and NPCs (system) (Yuna)
- Dialog

**Game-In-Game: Callbacks - Tanisha, Nico, Paul, Shayan**
Platformer world does callback. if the player successfully answers the Golden Pig question, they will get a special amount of emeralds which will update the "chest" in the RPG hub. Players earn emerald points as they correctly answer the questions. These emeralds are then stored in a virtual chest located in the RPG hub. (Shayan and Tanisha)
- Define interactive characters and/or blocks.

Enemy interactions cause certain dialogs. The game could call back to earlier NPC dialogues that referenced the importance of avoiding creepers. For example, if the player fails to avoid the creeper in the platformer, the NPC might now say, “I warned you about those creepers. Your emeralds are at risk now.” (Nico and Tanisha)
- Create player interactions after collisions with creepers.

**Finish: Ending Levels**
- Render finish line obstactle that allow the player to transition between different levels.
- Consider alternate endings and animations.


#### Platformer Game Parts

**Platform: Designing Platforms and Collision Detection**
- Design and draw platforms on the canvas.
- Implement collision detection between the player character and platforms.
- Enable the player to walk and jump on platforms while accounting for gravity.

**Enemies: Implementing Enemies**
- Introduce enemy characters (ie Goombas) that move independently across platforms.
- Define enemy behavior, including collision interactions with the player character.
- Create a system to defeat enemies through collision, jumping, shooting, etc.







