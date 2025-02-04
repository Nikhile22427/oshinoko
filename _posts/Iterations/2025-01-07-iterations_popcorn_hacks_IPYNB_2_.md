---
comments: True
layout: post
title: Iteration Popcorn Hacks
description: Iterations Popcorn Hacks
permalink: /csse/javascript/iteration/Popcorn_Hacks
categories: ['CSSE JavaScript Fundamentals']
author: Andrew Ge, Ishan Shrivastava, Pratheep Natarajan, and Ruhaan Bansal
---

# Popcorn Hacks on Iterations in JavaScript

##### Instructions:
##### Complete the exercises below in JavaScript.
##### You can run and test your code in a JavaScript environment.

### Exercise 1: Counting with a For Loop
##### Write a JavaScript for loop that prints all numbers from 1 to 10.

##### Example:
##### Output:
##### 1
##### 2
##### 3
##### ...
##### 9 
##### 10 


```python
%%js
for ( let count = 1; count < 11; count++) { //making numbers from 1 to 10
    console.log(count) //printing count
}
```


    <IPython.core.display.Javascript object>


### Exercise 2: Sum of Numbers
##### Write a function in JavaScript to calculate the sum of all numbers from 1 to n using a loop.

##### Example:
##### Input: 5
##### Output: 15 (because 1 + 2 + 3 + 4 + 5 = 15)



```python
%%js
let total = 0 //defining total
for (let count = 0; count <= 5; count++ ) { //makes numbers from 1 to 5
    total += count //every time a number is made it is added to the total
}
console.log(total) //print total
```


    <IPython.core.display.Javascript object>


### Exercise 3: Looping through Arrays
##### Write a JavaScript program to iterate through an array of names and print each name.


```python
%%js
const names = ['dumbmist','evan','yomama','me','you'] //making a list of names

for ( let i = 0; i < names.length; i++ ) { // iterates for the lentgh of the names
    console.log(names[i]) //print the names
}

```


    <IPython.core.display.Javascript object>



```python
%%js
const names = ['dumbmist','evan','yomama','me','you'] //makes a list of names

for (let name in names) { //for every 1 name in the list of names
    console.log(name) //prints names
}
```


    <IPython.core.display.Javascript object>

