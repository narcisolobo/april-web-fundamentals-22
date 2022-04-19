// Variables and Datatypes

// What is a variable?
// A variable is like a box for information. This box has a label. We use this label to refer to what is in the box.

var myName = "Narciso Lobo";

// Rules of Naming Variables
// 1. Cannot have a space
// 2. Cannot have a dash (hyphen)
// 3. Cannot begin with a number

// Guidelines of Naming Variables
// 1. Give your variable a meaningful name
// 2. JavaScript uses the camel case naming convention for variables

// JavaScript Datatypes
// Two Families - Primitive and Reference
// Primitive Datatypes
// 1. Strings - strings of characters
// 2. Numbers - Integers and floats are both considered numbers
// 3. Booleans - True or false
// 4. undefined
// 5. null

// Lesson 1 - Predict the output
var a = 25;
a = a - 13;
console.log(a / 2); // --> 6

a = "hello";
console.log(a + " hello"); // --> hello hello

// For Loops
// D.R.Y. - Don't Repeat Yourself!!!
// 1. Sentry
// 2. Where it starts
// 3. Where it ends
// 4. How it changes

// A boolean expression evaluates to true or false.
// It's the doorman, or bouncer of the loop
// "As long as..."

// i++
// i = i + 1
// i += 1

for (var i = 1; i <= 100; i++) {
  console.log(i);
}

console.log(i); // --> 101


// Lesson 2 - Predict Loops
for (var i = 0; i < 10; i++) {
  console.log(i);
  i = i + 3;
}

console.log("outside of the loop " + i);

// Prediction:
// 3, 6, 9
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
// "outside of the loop" 0, 3, 6, 9
// 0, 4, 8, outside of the loop 12