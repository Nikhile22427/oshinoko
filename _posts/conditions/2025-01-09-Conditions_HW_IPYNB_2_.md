---
layout: post
title: Homework
description: Homework after condition lesson
categories: ['CSSE JavaScript Fundamentals']
courses: {'csse': {'week': 0}, 'csp': {'week': 0}, 'csa': {'week': 0}}
type: collab
permalink: /csse/javascript/conditions/hw
author: Yasna Ahmadi, Katherine Law, Yuna Lee, Namira Sharif
toc: True
---

## Homeworks  


### Part 1:
 Choose one from the three options to make a conditonal statement and if help is needed, use the Format at the bottom of the page.

#### Option 1: Grade Checker 
Example for the grade checker:

"F" if the grade is below 60.
"D" if the grade is between 60 and 69.
"C" if the grade is between 70 and 79.
"B" if the grade is between 80 and 89.
"A" if the grade is 90 or above.

#### Option 2: Weather app
Example for a weather app:

If the weather is sunny, print: "It's a great day to go outside!"
If the weather is rainy, print: "Don't forget your umbrella!"
If the weather is snowy, print: "Stay warm and safe!"

#### Option 3: Character Health Status
Example for a character health status:

If the health is 0, print: "Your character is dead."
If the health is between 1 and 25, print: "Critical condition! Find a health pack!"
If the health is between 26 and 75, print: "Your character is wounded. Be cautious."
If the health is above 75, print: "Your character is healthy and ready for action!"

### Part 2:
 Make another conditional statement with your idea.

 Make any If-Then, If, or Then-If statements with different ideas.


##### Format: 


```python
let yourVariable = ""; // Change this to your input or value

if (/* your first condition */) {
    console.log(/* your first output */);
} else if (/* your second condition */) {
    console.log(/* your second output */);
} else {
    console.log(/* your default output */);
}
```

<h2>Option 2</h2>


```python
%%js
let weather = "sunny"

if (weather === "sunny") {
    console.log("please for the love of god do not go outside in 3 layers of clothing and a massive puffer jacket or else you will melt")
} else if (weather === "rainy") {
    console.log("exercise caution when going outside without an umbrella or rain jacket.")
} else if (weather === "snowy") {
    console.log("this isn't possible in San Diego. Do whatever")
} else {
    console.log("this is out of our pay grade")
}
```

##### After testing any of the options, revise it and make another one from the options.


<h2>Option 3</h2>


```python
%%js
let health = 100

if (health === 0) {
    console.log("You died")
} else if ( 1<health<25) {
    console.log("Critical condition. Find heals")
} else if (26<health<75) {
    console.log("You are wounded. Be cautious")
} else if (76<health<100) {
    console.log("You are completely fine")
}
```
