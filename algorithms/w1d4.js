// Week 1 Day 4 - Go With the Code Flow

// Today we're going to get deeper down in thinking about code and working out what order the computer sees it in.

// Code Flow - Functions

// What is a function?
// A function is a set of instructions that accomplishes a task.
// This function may or may not need ingredients to accomplish the task.
// If it needs ingredients, these are passed to the function as parameters/arguments.

// FUNCTION DECLARATION
// after the name of the function, don't forget your parentheses!!
// Parameters in the function declaration
function greet(name) {
  // console.log("Hello " + name + "!");
  console.log(`Hello ${name}!`);
}

// The function does not execute until it is called (invoked) by name.
// Arguments in the function call
greet("Ciso");

// The return statement
// console.log is like a hot dog vendor telling you they have hot dogs
// the return statement is like a hot dog vendor giving you a hot dog
function sum(num1, num2) {
  console.log(num1 + num2);
  return num1 + num2;
}

// The value of a function is whatever that function returns.
// var result = sum(2, 2);
// console.log(result);

// When we console.log a function call, we console.log whatver that function returns.
console.log(sum(5, 5));

// global scoped variable
var x = 5;

function setX(newValue) {
  // we are setting a new value to the global variable
  // creating a variable inside a function gives it local scope
  x = newValue;
}

console.log(x); // --> 5
setX(15);
console.log(x); // --> 15

// The return of return
var x = 5;

// When a function encounters a return statement, the function is complete.
function addToX(amount) {
  return x + amount;
  console.log("hello there");
}

console.log(x); // --> 5
var result = addToX(-10); // --> nothing
console.log(result); // --> -5
console.log(x); // --> 5

/* 
Code Flow - Is the Array a Palindrome
A palindrome is a word that is spelled the same if read forwards or backwards. Some excellent palindrome examples are:

- racecar
- tacocat

But in our case we'll be looking at some arrays, can the values in the array be read the same forwards as backwards
*/

function isPal(arr) {
  for (var left = 0; left < arr.length / 2; left++) {
    var right = arr.length - 1 - left;
    if (arr[left] != arr[right]) {
      return "Not a pal-indrome!";
    }
  }
  return "Pal-indrome!";
}

var result1 = isPal([1, 1, 2, 2, 1]);
console.log(result1);

var result2 = isPal([3, 2, 1, 1, 2, 3]);
console.log(result2);
