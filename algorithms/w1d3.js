// Week 1 Day 3 - Always isSunny 

var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";

// if is the keyword that begins a conditional statement
// following the if keyword, a set of parentheses contains a boolean expression
// if the boolean expression evaluates to true, the code block is executed
// if the boolean is false, the code block is skipped

if (isSunny) {
  whatToBring += "sunglasses, ";
}
if (temperature < 50) {
  whatToBring += "a coat, ";
}
if (isRaining) {
  whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";

console.log(whatToBring); // --> I should bring sunglasses, a coat, and a smile!

// Prepare for downcount
for (var i = 10; i > 0; i--) {
  if (i != 2) {
    console.log(i);
  } else {
    console.log("ignition!");
  }
}

console.log("liftoff!"); // --> 10, 9, 8, 7, 6, 5, 4, 3, ignition, 1, liftoff!

// else keyword
// think of it as "otherwise"

// else if keyword
// the else if takes its own boolean expression
// and is attached to a previous if
var age = 17;
if (age >= 21) {
  console.log("have a beer");
} else if (age >= 18 && age <= 20) {
  console.log("go see that r-rated movie");
} else {
  console.log("stay home and play video games");
}

// Count Positives
var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];

// your code here!
// Pseudocode!
// A mix of english and code
// Break down the problem step by step
// Probably gonna need a for loop

console.log("there are " + countPositives + " positive values");