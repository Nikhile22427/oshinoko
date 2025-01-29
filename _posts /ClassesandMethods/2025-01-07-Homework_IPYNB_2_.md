---
layout: post
title: Homework
description: Homework for classes and methods lessons.
type: issues
comments: True
permalink: /csse/candm/hw
---

## Homework 

# JavaScript Classes and Methods - Interactive Homework
In this notebook, you will learn about classes and methods in JavaScript. After the lesson, complete the tasks by editing the code cells.

### What are Classes and Methods?
- **Class**: A blueprint for creating objects with properties and methods.
- **Method**: A function inside a class that defines an object's behavior.



## Example: Class for food

Below is an example of a JavaScript class for creating different foods. The class has:
1. A **constructor** to initialize properties (brand and model).
2. Two **methods** (`displayInfo` and `start`) to define behaviors.



```python
%%js
// Example: A Class for Cars
class Car {
  constructor(brand, model) {
    this.brand = brand; // Property
    this.model = model; // Property
  }

  displayInfo() {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  }

  start() {
    console.log(`${this.brand} ${this.model} is starting...`);
  }
}

// Create an instance of the class
const myCar = new Car("Tesla", "Model S");
myCar.displayInfo();
myCar.start();

```


    <IPython.core.display.Javascript object>


<h2>actual hw</h2>


```python
%%js
class FridgeGame {
    constructor() {
      // Array of items in the fridge with their scores
      this.fridgeItems = [
        { name: "week-old pizza with mysterious fuzzy spots", score: 2 },
        { name: "fresh avocado that's perfectly ripe", score: 10 },
        { name: "suspicious milk carton from last month", score: 1 },
        { name: "leftover spaghetti that might be moving", score: 3 },
        { name: "chocolate cake hidden behind the vegetables", score: 9 },
        { name: "container of grandma's homemade cookies", score: 10 },
        { name: "takeout box with unknown contents", score: 4 },
        { name: "half-eaten sandwich wrapped in foil", score: 5 },
        { name: "yogurt that expired yesterday", score: 3 },
        { name: "slice of cheese that's more blue than yellow", score: 1 }
      ];
    }
  
    // Method to pick a random item from the fridge
    grabItem() {
      const randomIndex = Math.floor(Math.random() * this.fridgeItems.length);
      return this.fridgeItems[randomIndex];
    }
  
    // Method to classify the find based on its score
    classifyFind(score) {
      if (score >= 8) {
        return "a fantastic find! Jackpot!";
      } else if (score >= 5) {
        return "meh, it'll do";
      } else {
        return "probably better to order takeout...";
      }
    }
  
    // Method to start the game
    play() {
      console.log("Opening the fridge... what will you find?");
      const item = this.grabItem();
      console.log(`You found: ${item.name}!`);
      const feedback = this.classifyFind(item.score);
      console.log(`It is ${feedback} Score: ${item.score}/10`);
    }
  }
  
  // Create an instance of the game
  const fridgeGame = new FridgeGame();
  
  // Start the game
  fridgeGame.play();
```
