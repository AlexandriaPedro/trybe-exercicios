let backgroundColor = document.getElementById("corpse");

function changeBackgroundColor(colorButton) {
  let color = colorButton.innerText;
  backgroundColor.style.backgroundColor = color;
  if (backgroundColor.style.backgroundColor == color) {
    console.log("deu bom");
  }
}
console.log(backgroundColor);

let arrayColorButtons = document.querySelectorAll("#backgroundColor>button");

for (let index = 0; index < arrayColorButtons.length; index += 1) {
  arrayColorButtons[index].addEventListener("click", changeBackgroundColor);
}

let ola = arrayColorButtons[0];

console.log(ola);
console.log(ola.innerText);

let olacolor = ola.innerText;

console.log(olacolor);