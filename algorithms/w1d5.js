// Week 1 Day 5 - Work hard to get Arrays

// square brackets at the bookends of the array
// array literal notation
var colors = ["red", "yellow", "green", "blue"];

// You are not limited to one datatype. You can mix and match.
var me = ["Narciso Lobo", 51, true, [1, 2, 3]];

// push and pop methods
colors.push("purple");
console.log(colors);

// pop not only removes, but returns the last element as well.
var lastElement = colors.pop();
console.log(lastElement);

// length property
console.log(colors.length);

// How to swap variables
var fruit1 = "apples";
var fruit2 = "oranges";

fruit2 = fruit1;

console.log(fruit2 + " and " + fruit1); // --> "apples and apples"

var fruit1 = "apples";
var fruit2 = "oranges";

var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;

console.log(fruit2 + " and " + fruit1);

// When we are swapping the values of two variables, we always need a temp variable.

// While loops
// We have previously worked with for loops, how are while loops different?

// 1. Sentry
// 2. Where it starts
// 3. Where it ends
// 4. How it changes
var start = 0;
var end = 12;

while (start < end) {
  console.log("start: " + start + ", end: " + end);
  start += 2;
  end -= 2;
}

// Prediction
// start: 0, end: 12
// start: 2, end: 10
// start: 4, end: 8

// Reversing an array
// Write a function reverse(arr) to reverse an array, if we were given...
// The array will be mutated IN PLACE
// Modifying the same array - you are not creating a new array

function reverse(arr) {
  // your code here
  // gameplan!
  // pseudocode
  // know what to do before you figure out how to do it
  // take bits and pieces from yesterday's algo if you like
}

reverse(["a", "b", "c", "d", "e"]);
// expected output: ["e", "d", "c", "b", "a"]