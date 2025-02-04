---
layout: post
title: Nested Conditionals, Homework
description: Homework for nested conditionals
type: issues
comments: True
---

### Homework Objectives

You and your friend want to do different things at the amusement park. To decide, you do a coin flip. Heads means that you get to choose where to go and tails means that your friend gets to choose. If you go on a ride, be sure to check if you are the right height and have enough tickets, and if you go to a food stand, make sure that you have enough money and that the food is in stock. Be creative, and make sure to use nested conditionals!

### Instructions

1) Create a JavaScript file (Ex. insertName.js)

2) Plan out what you will be doing and make variables for the necessary things. There will be a coin flip, so make a variable for that. If there are rides, make a value for the amount of tickets the person has and what height they are. If they go to a food stand, you can make a variable for the amount of money that you have and if the food is in stock.

3) Use Math.random() for the coin flip. This generates a number between 0 and 1, so then you multiply this value by 2 and put it inside Math.floor() to round down and get either 0 or 1. Make this the coin flip variable.

4) Use an if statement to check what the result of the coin flip was and use console.log to print out a statement to see who won or lost the coin flip. Along with that, print out where they are going next.

5) Use more if statements inside of if statements to check if the person can do what they want to do. (Are they tall enough, do they have enough money, etc.)

6) After all the checks, print out a result of what happened. If you get stuck, you can look at the examples in the popcorn hacks. Please don't copy and paste, though! 



```python
%%js
let coinflip = Math.floor(Math.random()* 2)
console.log(coinflip)
let churroStock = false
let popcornStock = true
let Person
let person1money 
let person2money 
if (coinflip === 1) {
    Person = "dumbahh 1"
} else if (coinflip === 0) {
    Person = "dumbahh 2"
}
console.log(Person)


function Foodinstock(food) {
    if (food = "churro") {
        if (churroStock === true) {
            console.log("wow! you have a churro now")
        } else if (churroStock === false) {
            console.log("nah u cant have it for unkown reasons")
        }
    } else if (food === "popcorn") {
        if (popcornStock === true) {
            console.log("wow! you have a popcorn")
        } else {
            console.log("nah no popcorn for u ")
        }
    } 
}

function Enoughmoney(money) {
    if (Person = "dumbahh 1") {
        if (51<money<81) {
            console.log("wow! you can go on the roller coaster")
        } else if (1<money<50 ) {
            console.log("you can only go on that 1 ride thats all the way in the back of the park and is 500 years old")
        } else  if (money === 0) {
            console.log("get more money")
        }
    } else if (Person === "dumbahh 2") {
        if (40<money<70) {
            console.log("wow! you can go on the ferris wheel")
        } else if (1<money<40 ) {
            console.log("you can only go on that 1 ride thats all the way in the back of the park and is 500 years old")
        } else  if (money === 0) {
            console.log("get more money")
        }
    }
}

if (Person === "dumbahh 1") {
    Foodinstock("churro")
    Enoughmoney(0)
} else if (Person === "dumbahh 2") {
    Foodinstock("popcorn")
    Enoughmoney(40)
}


```


    <IPython.core.display.Javascript object>

