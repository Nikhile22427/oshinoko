---
layout: post
title: Popcorn Hacks
description: Popcorn hacks for conditions!
categories: ['CSSE JavaScript Fundamentals']
courses: {'csse': {'week': 0}, 'csp': {'week': 0}, 'csa': {'week': 0}}
type: collab
permalink: /csse/javascript/conditions/hax
author: Yasna Ahmadi, Katherine Law, Yuna Lee, Namira Sharif
toc: True
---

# Popcorn Hacks!
You're at the mall with your friends, and head into the Build-A-Bear store. Use conditionals to decide what kind of bear you want with different accessories! The employee comes up to you and explains the steps. She states...

"Choose Me: Pick that special furry friend — from a silly superhero to a sporty mascot and a cheerleading bunny to a snuggly teddy bear.
Hear Me: Add a special sound effect to your furry friend.
Stuff Me: Customize your creation with sounds, scents, stuffing and, of course, our iconic special heart that holds your love and wishes.
Hug Me: Give your furry friend its first hug to make sure it’s stuffed just right.
Dress Me: Turn up the fun with outfits and extras!
Name Me: It’s official once your creation has a birth certificate of its bear-y own!"

### Hack 1: Simple If-Statement
Create a variable based on what kind of stuffed animal you want.


```python
%%js
let bearType = "Teddy"; //Choose what kind of bear you want: Teddy or Unicorn (Example: let bearType = "Teddyy")

if (bearType === "Teddy") { //Put the same bear type from above into this line
    console.log("You picked a snuggly teddy bear!");
}
```


    <IPython.core.display.Javascript object>


### Hack 2: If-Else Statement
Add a sound to the bear based on the type chosen.


```python
%%js
let bearType = "Teddy"; //Put the same bear type as before.

if (bearType ==="Teddy") {
    console.log("Your teddy bear roars");
} else {
    console.log("Your unicorn doesn't make a sound because unicorns do not exist")
}

```


    <IPython.core.display.Javascript object>


### Hack 3: Else-If Statement
Choose the stuffing type using an If-Else-If statement


```python
%%js
let stuffingType = "Firm"; //Choose a stuffing: Fluffy, Firm, or Squishy

if (stuffingType === "Fluffy") {
    console.log("Your bear will be fluffy!");
} else if (stuffingType === "Firm") {
    console.log ("Your bear is like a rock. Do not punch at any costs");
} else {
    console.log("You have a squishy bear");
}
```


    <IPython.core.display.Javascript object>


### Hack 4: Switch Statement
Use a switch statement to pick a bear outfit


```python
%%js
let bearOutfit = "Superhero"; // Choose an outfit: "Superhero", "Cheerleader", "Pirate", "Princess"

switch (bearOutfit) {
    case "Superhero":
        console.log("Its a bird... No, its a plane... Wait! it's superbear!");
        break;
    case "Cheerleader":
        console.log("Your bear will cheer with its Cheerleader outfit!");
        break;
    case "Pirate":
        console.log("Gimme your treasure - pirate bear");
        break;
    default:
        console.log("Your bear is ready for a royal adventure in a Princess outfit!");
}

```


    <IPython.core.display.Javascript object>


### Hack 5: Complete Build-A-Bear Experience
Combine all conditionals to create new types of bears, stuffings, and outfits in a single code cell!


```python
%%js
let bearType = "Bear1"; //Make a type of bear!
let stuffingType = "MiniRocks"; //Choose a type of stuffing!
let bearOutfit = "Box"; //Create your own outfit!

// Step 1: Choose Me
if (bearType === "Bear1") { //Choose a bear type
    console.log("this is a generic bear 1"); //Create a console message for the specified bear type
} else if (bearType === "bear2") {
    console.log("this is a generic bear 2");
} else {
    console.log("this is a generic bear with no number");
}

//Repeat these steps. When finished, you should be able to choose your own type of bear, stuffing, and outfit within a single code cell. Be creative and have fun!!!
// Step 2: Hear Me
if (bearType === "Bear1") {
    console.log("the bear roars, uninterestedly");
} else {
    console.log("no sound exits the bear");
}

// Step 3: Stuff Me
if (stuffingType === "MiniRocks") {
    console.log("You reflect on your decision to choose rocks as stuffing");
} else if (stuffingType === "normal") {
    console.log("you have an average bear");
} else {
    console.log("your bear has no stuffing");
}

// Step 4: Dress Me
switch (bearOutfit) {
    case "Box":
        console.log("Its a bear in a box. nuff' said");
        break;
    case "superhero":
        console.log("be careful, little kids might try and steal this bear");
        break;
    case "pirate":
        console.log("Complete the outfit with a miniature ship! only $999,999,999");
        break;
    default:
        console.log("no outfit...");
}

```


    <IPython.core.display.Javascript object>

