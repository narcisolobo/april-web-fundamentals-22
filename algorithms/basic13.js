// Print 1-255
// Print1To255()
// Print all the integers from 1 to 255.

function print1To255() {
  for (var i = 1; i <= 255; i++) {
    console.log(i);
  }
}

console.log("BASIC 13 #1:");
print1To255();

// 2. Print Odds 1-255
// PrintOdds1To255()
// Print all odd integers from 1 to 255.

function printOdds1To255() {
  for (var i = 1; i <= 255; i+=2) {
    console.log(i);
  }
}

console.log("BASIC 13 #2:");
printOdds1To255();

function printOdds1To255Modulo() {
  for (var i = 0; i <= 255; i++) {
    if (i % 2 == 1) {
      console.log(i);
    }
  }
}

console.log("BASIC 13 #2 but with a MODULO:");
printOdds1To255Modulo();

// 3. Print Ints and Sum 0-255
// PrintIntsAndSum0To255()
// Print integers from 0 to 255, and with each integer print the sum so far. 

function printIntsAndSum0To255() {
  var sum = 0;
  for (var i = 0; i <= 255; i++) {
    console.log(i);
    // update sum to hold running total of 
    // all integers so far
    sum = sum + i;
    console.log(sum);
  }
}

console.log("BASIC 13 #3:");
printIntsAndSum0To255();
// i s
// 0 0
// 1 1
// 2 3
// 3 6
// 4 10
// 5 15
// ...
// 255 32640

// 4. Iterate and Print Array
// Iterate through a given array, printing each value. 
// PrintArrayVals(arr)

// ABSTRACTION - IGNORE THE FAT
// ALGORITHMIC - CREATING A STEP BY STEP SOLUTION
// DECOMPOSITION - BREAKING A PROBLEM INTO SMALLER ONES
// PATTERN RECOGNITION - WHAT PATTERNS ARE IN THIS PROBLEM?

// PSEUDOCODE:
// Create a function named printArrayVals that takes in an array as input.
// Inside the function create a loop that starts i at 0 (because arrays are indexed beginning at 0), the loop will end at arr.length, and i will increment by 1.
// Inside the loop, console.log(arr[i])

function printArrayVals(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

console.log("BASIC 13 #4:");
printArrayVals(["blue", 2, 60, -3, true]);

// 5. Find and Print Max
// PrintMaxOfArray(arr)
// Given an array, find and print its largest element. 

// Create a function named printMaxOfArray that takes in an array as input.
// Create a variable called max = arr[0]
// Inside the function create a loop that starts i at 0 (because arrays are indexed beginning at 0), the loop will end at arr.length, and i will increment by 1.
// Write an if statement that checks whether the current value in the array is greater than max
// If it is, then make it the new max
// After the loop, print max

// 3, 8, 4, 9, 1
function printMaxOfArray(arr) {
  var max = arr[0];
  for (var i = 0; i < arr.length; i++){
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);
}

console.log("BASIC 13 #5:");
printMaxOfArray([-3, -8, -4, -9, -1]);

// 6. Get and Print Average
// printAverageOfArray(arr)
// Analyze an array’s values and print the average. 

// Let's make a var sum
// Update sum inside the loop by adding the current value in the array to it
// We'll have to take final value of sum and divide by arr.length and print it out

function printAverageOfArray(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  console.log(sum / arr.length);
}

console.log("BASIC 13 #6:");
printAverageOfArray([1, 2, 3, 4, 5]);

// 9. Greater than Y
// returnArrayCountGreaterThanY(arr, y)
// Given an array and a value y, count and return the number of array values greater than Y. 



// Create a function named returnArrayCountGreaterThanY that takes in an array and a value called y
// Inside the function:
// Create a var called tally and set it to 0
// Create a standard floop for an array
// Inside the floop:
// Create a conditional that compares if the current value in the array (arr[i]) is greater than y.
// If it is, then we increment tally by one
// Outside the loop, return tally

var myArr = [43, 6, 10, 5, 398];
var val = 40;

function returnArrayCountGreaterThanY(arr, y) {
  var tally = 0;
  for (var i = 0; i < arr.length; i++){
    if (arr[i] > y) {
      tally++;
    }
  }
  return tally;
}

console.log("BASIC 13 #9:");
console.log(returnArrayCountGreaterThanY([4, 2, 6, 7, 8, 3, 5, 4, 1, 2, 6, 7], 5));

function hello() {
  console.log("hello");
}

console.log(hello());