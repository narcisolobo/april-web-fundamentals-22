function removeElement(element) {
  element.remove();
}

function changeBlue(element) {
  element.style.backgroundColor = "blue";
}

function bump(element) {
  element.innerText++;
}

/* 
1. user fills textbox with a color
2. user clicks button
3. div changes color
*/

function changeColor(element) {
  console.log(colorTextBox.value);
  element.style.backgroundColor = colorTextBox.value;
}

function selectColor(element) {
  element.style.backgroundColor = colorSelect.value;
}

function alertMessage(element) {
  alert("you entered: " + element.value)
}