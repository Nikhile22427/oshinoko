---
comments: True
layout: post
title: Iteration Homework
description: Iterations HW
permalink: /csse/javascript/iteration/hw
categories: ['CSSE JavaScript Fundamentals']
author: Andrew Ge, Ishan Shrivastava, Pratheep Natarajan, and Ruhaan Bansal
---

### Exercise 1: Multiplication Table
##### Write a JavaScript program to print the multiplication table for a given number.

##### Example:
##### Input: 3
##### Output:
##### 3 x 1 = 3
##### 3 x 2 = 6
##### ...
##### 3 x 10 = 30


```python
%%js
function multiplicationTable(number) { //function
    for (let i = 1; i <= 10; i++) { // iterating numbers from 1 to 10
        console.log(`${number} x ${i} = ${number * i}`); //multiplication operation with i and the iterated number above
    }
}
multiplicationTable(3);
```

### Exercise 2: Nested Loops
##### Write a JavaScript program using nested loops to generate the following pattern:

##### Output:
##### 0
##### 00
##### 000
##### 0000
##### 00000


```python
%%js 
for (let i = 1; i <= 5; i++) {
    let zeroes = ""; //defining zeroes
    for (let j = 1; j <= i; j++) { // every time this is run it iterates and addes a 0 to zeroes
        zeroes += "0"; //sets zeroes to new value
    }
    console.log(zeroes);
}
```

### Challenge Exercise: Prime Numbers
##### Write a JavaScript program to print all prime numbers between 1 and 50.


```python
// Function to check if a number is prime
function isPrime(num) {
    // Numbers less than or equal to 1 are not prime by definition
    if (num <= 1) return false;
    
    // Check for divisibility from 2 up to the square root of the number
    // We only need to check up to square root because if a number is divisible by something larger than its square root, it would also be divisible by something smaller than its square root
    for (let i = 2; i <= Math.sqrt(num); i++) {
        // If the number is divisible by any number in this range, then it's not prime
        if (num % i === 0) return false;
    }
    
    // If we haven't found any divisors, the number is prime
    return true;
}

// Loop through numbers from 1 to 50
for (let i = 1; i <= 50; i++) {
    // For each number, check if it's prime using our isPrime function
    if (isPrime(i)) {
        // If the number is prime, print it to the console
        console.log(i);
    }
}
```

# End of Homework
