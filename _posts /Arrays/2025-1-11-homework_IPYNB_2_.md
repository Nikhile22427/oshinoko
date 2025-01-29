---

---

# Lesson 1 Homework


```python
%%js
//We have an array made for you, but something's off...
let desserts = ["lemon","delete1","ice cream","chocolate cake","key lime pie","delete2"];
//We need to get rid of the elements labeled delete1 and delete2!
desserts.pop();//which command gets rid of the last element in the array?
desserts.splice(1,1);//which command will delete the delete 1 element and how do you use it??
desserts.splice(6,1)
//now that that's done... a lemon isn't a dessert unless you're weird... maybe change it to a lemon-themed dessert?
desserts[0]="lemon cake slice";

//hint for the previous 2 fill-in-the-blanks: the indexing starts at 0
console.log(desserts)
//okay okay, you've proven your skills... now all that's left is to print the list!
```


    <IPython.core.display.Javascript object>


# Lesson 2 Homework - Part 1


```python
%%js
//Okay, this will be a little tougher. We can put your knowledge of the second lesson to the test. (ignore that this concept is easy compared to the other lessons lol)

//I want you to create a list of whatever you'd like (integers or strings, it really doesn't matter) and have a repeating element in it. ex: let list = [1,2,3,1,4]; 
let numbes = [1, 2, 3, 4, 5, 6, 2];

//Ok, now I know this is about arrays, but could you make a for loop to iterate through each element and print the index of them?
for ( let i =0; i < numbes.length; i++ ) {
    console.log(numbes.indexOf[i]);
}
//Wait! You remember that repeating element I made you put in your list? Create a separate command outside of the loop to print the index of the last occurring repeated value.
console.log(numbes.lastIndexOf(2))



```


    <IPython.core.display.Javascript object>


# Lesson 2 Homework - Part 2


```python
%%js
//This is the fairly simple final problem of arrays!

//Create a list here that includes whatever you'd like once again.
let list1 = ["No", "Stuff", "In", "This", "List"];

//Now, print the length of your list! Tip: you don't need to create a variable for the list's length! Just console.log the list.length; it saves you a line :D
console.log(list1.length)


//Finally, create a variable to check if a value in your list is included in the list and print that variable you created (it should output true or false)
let isInList = list1.includes("cheeks")
console.log(isInList)



```


    <IPython.core.display.Javascript object>


You're done with your homework!!
