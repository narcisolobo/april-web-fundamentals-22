// Object Literal Notation
// Creating an object in JavaScript

var car = {
  "color": "red",
  "numWheels": 4,
  "make": "Jeep",
  "model": "Wrangler",
  "drive": function () {
    console.log("Car is driving...")
  },
  "display": function () {
    console.log(this.color);
  }
}

// getting and setting values in an object
// Two options: bracket notation, and dot notation

// console.log(car.color);
// car.color = "blue";
// console.log(car.color);

// console.log(car["color"]);
// car["color"] = "red";
// console.log(car["color"]);

// car.drive();
// car.display();

console.dir(this);

// Event Listeners
// You can listen for many different "events" on any element in your page.

function changeText(element){
  element.innerText = "WHOA";
}