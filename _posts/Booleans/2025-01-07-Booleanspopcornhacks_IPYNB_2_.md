---
layout: post
title: Boolean Popcorn Hacks
description: Popcorn Hacks
categories: ['Foundation']
courses: {'csse': {'week': 1}, 'csp': {'week': 1}, 'csa': {'week': 1}}
comments: True
sticky_rank: 1
permalink: /csse/javascript/booleans/hax
---

# Popcorn Hacks

# Exercise 1

Create a variable that holds a true or false value. Print a message that says "This is true!" if the value is true and "This is false!" if the value is false.


```python
%%js 

let isSunny = true;  // Change this to false to test the other case

if (isSunny) {
    console.log("This is true!")
} else {
    console.log("False.")
}
```

# Exercise 2

Write a program that checks if both conditions are true: the weather is nice (true) and it’s a weekend (true). Print "Go outside!" if both are true, and "Stay inside!" otherwise.


```python
%%js 

let isWeekend = true;  // Change to false to test the other case
let isNiceWeather = true;  // Change to false to test the other case

if (isWeekend && isNiceWeather) {
    console.log("go outside")
} else {
    console.log("stay in")
}

```

# Exercise 3

Write a program that prints "Time to go to the beach!" if it's either sunny or the weekend. Use the OR (||) operator.


```python
%%js 

let isSunny = true;  // Change to false to test the other case
let isWeekend = false;  // Change to true to test the other case

if (isSunny || isWeekend) {
    console.log("time to go to the beach!")
} else {
    console.log("dont leave")
}

```

# Exercise 4

Write a program that prints "Not sunny today" if isSunny is false, and "It's sunny!" if isSunny is true. Use the NOT (!) operator to invert the value of isSunny.


```python
%%js 

let isSunny = false;  // Change to true to test the other case

if (!isSunny) {
    console.log("Not sunny today")
} else {
    console.log("sunny today")
}
```

# Exercise 5

Create a program that checks if a user is both logged in (true) and has admin rights (true). Print "Access granted!" if both are true, and "Access denied!" if either is false.


```python
%%js 

let isLoggedIn = true;  // Change to false to test the other case
let isAdmin = true;     // Change to false to test the other case

if (isLoggedIn && isAdmin) {
    console.log("Access granted!")
} else {
    console.log("Access denied")
}
```

# Exercise 6

Use a ternary operator to decide whether a user is allowed access based on their age. If the age is 18 or above, print "You are allowed access." If below 18, print "Sorry, you are too young."


```python
%%js

let age = 16;  // Change this value to test different cases

let accessMessage = age >= 18 ? "you can see this": "nah get out";

console.log(accessMessage);  // Will print based on age

```

# Exercise 7

Write a program that checks if a user is both a VIP (true) and has a VIP ticket (true). If both conditions are true, print "VIP Access granted!" Otherwise, print "Access denied!"


```python
%%js 

let isVIP = true;          // Change to false to test the other case
let hasVIPticket = false;  // Change to true to test the other case

if (isVIP && hasVIPticket) {
    console.log("GET IN MR PRESIDENT")
} else {
    console.log("out.")
}
```
