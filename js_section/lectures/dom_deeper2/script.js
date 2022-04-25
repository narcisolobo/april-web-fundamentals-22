function removeElement(element) {
  element.remove();
}

// 1. Get all the paragraphs into an array.
// The querySelector method uses CSS style selectors
// querySelector is only good for ONE element
function changeBgOfP() {
  var paragraphArray = document.querySelectorAll('p');
  console.log(paragraphArray);
  
  // 2. loop over array
  for (var i = 0; i < paragraphArray.length; i++) {
    // change background color of each element
    console.log(paragraphArray[i]);
    paragraphArray[i].style.backgroundColor = "blue";
  }
}

// Selectors that return an array:
document.getElementsByClassName('myTitle');
document.getElementsByName('');
document.getElementsByTagName('');
document.querySelectorAll('')

// Selectors that return one element:
document.getElementById('');

// The CSS style selector should be supplied
document.querySelector('');

function changeRed(element) {
  element.style.backgroundColor = 'red';
}

function changeBlue(element) {
  element.style.backgroundColor = 'blue';
}

function peanut() {
  var rhyme = document.querySelector('#rhyme');
  rhyme.innerText = 'ANYBODY WANT A PEANUT';
}

function like(element) {
  element.innerText++;
}

function spidey(element) {
  element.src = "./images/spider_man.jpeg";
}

function swapper(element) {
  var temp = element.src;
  element.src = element.getAttribute('alt-src')
  element.setAttribute('alt-src', temp);
}