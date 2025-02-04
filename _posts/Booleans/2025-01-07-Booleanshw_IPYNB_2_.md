---
layout: post
title: Boolean Homework
description: Practicing Booleans
categories: ['Collaboration']
courses: {'csse': {'week': 1}, 'csp': {'week': 1}, 'csa': {'week': 1}}
menu: nav/pair_programming.html
type: collab
comments: True
sticky_rank: 1
permalink: /csse/javascript/booleans/hw
---

# Objective: Create a code that can determine whether someone is a student or a guest. And make another code that can determine if you are allowed to ride a roller coaster or not, based from you're height and from you're health. 

# Instructions

1.Open a New Cell set its type to Code

2.Declare a Boolean Variable:

Make a variable named isStudent. Assign it a boolean value of true or false, like this: var isStudent = true;

3.Use an if Statement:

Create a conditional statement to check the value of isStudent.

4.Log a Message if isStudent is true:

Inside the if block, make the message be "Welcome, student!" to the console if isStudent is true.

5.Log a Message if isStudent is false :

Inside the else block, make the message be "Welcome, guest!" to the console if isStudent is false.

6.Run the Code.



```python
%%js 

let isStudent = true;
let age = 18;

if (isStudent && age < 18) {
    console.log("You are a student! welcome!");
} else if (isStudent && age >= 18) {
    console.log("Stop lying! you aren't a student! maybe enter as a guest")
} else if (!isStudent || age >= 18) {
    console.log("Welcome! you are a guest")   
}
```


    <IPython.core.display.Javascript object>


# ⬇︎ Answer key ⬇︎


```python
%%js

let isStudent = true; 

if (isStudent) {
    console.log("Welcome, student!");
} else {
    console.log("Welcome, guest!");
}

```


    <IPython.core.display.Javascript object>


# More instructions:
1. Open a New Cell set its type to Code

2. Declare Variables:

Create a variable for Height and set it to a any reasonable number like 5"3. Create a variable for inGoodHealth and set it to a boolean value like this: var inGoodHealth = true;.

3. Use Boolean Operators:

Create a variable named isEligibleForRidingRollerCoaster and use a combination of boolean operators to evaluate eligibility: Make sure that Height is greater or equal to 5"3 AND if inGoodHealth is true.

4. Log the Result:

Use an if statement to log a message to show whether the student or guest can ride the roller coaster based on the value of isEligibleForRidingRollerCoaster.

5. Run the Code.





```python
%%js 
let name = "Johnyboy"
let Height = 5.4;
let isInGoodHealth = true;

const isEligibleForRidingRollerCoaster = Height >= 5.3 && isInGoodHealth;

if (isEligibleForRidingRollerCoaster) {
    console.log("welcome! you can ride the roller coaster")
} else {
    console.log("Sorry! you can't ride the roller coaster")
}
```


    <IPython.core.display.Javascript object>


# ⬇︎ Answer key ⬇︎


```python
%%js

const userName = "Mario"; 
let height = 5"3; 
let inGoodHealth = true; 


const isEligibleForRidingRollerCoaster = (height >= 5"3) && inGoodHealth;


if (isEligibleForRidingRollerCoaster) {
    console.log("Congratulations, " + userName + "! You can ride this roller coaster.");
} else {
    console.log("Sorry, " + userName + "you can't ride this roller coaster.");
}

```
