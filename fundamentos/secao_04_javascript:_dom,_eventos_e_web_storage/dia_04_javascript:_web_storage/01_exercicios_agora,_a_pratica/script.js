window.onload = () => {
  //Changing background color;
  let backgroundColor = document.getElementById("corpse");

  let arrayColorButtons = document.querySelectorAll("#backgroundColor>button");
  
  function changeBackgroundColor(colorButton) {
    let color = colorButton.target.innerText;
    backgroundColor.style.backgroundColor = color;
  }
  
  
  for (let index = 0; index < arrayColorButtons.length; index += 1) {
    arrayColorButtons[index].addEventListener("click", changeBackgroundColor);
  }

  //Changing font color;
  let text = document.getElementById("text");
  let arrayFontColorButtons = document.querySelectorAll("#fontColor>button");

  function changeFontColor (colorButton) {
    let color = colorButton.target.innerText;
    text.style.color = color;
  }

  for (index = 0; index < arrayFontColorButtons.length; index += 1) {
    arrayFontColorButtons[index].addEventListener("click", changeFontColor);
  }

  //Changing font size;
  let arrayFontSizeButtons = document.querySelectorAll("#fontWeight>button");

  function changeFontSize (sizeButton) {
    let size = sizeButton.target.innerText;
    text.style.fontSize = size;
  }

  for (index = 0; index < arrayFontSizeButtons.length; index += 1) {
    arrayFontSizeButtons[index].addEventListener("click", changeFontSize);
  }

  //Changing spacing inter lines;
  let arraySpacingButtons = document.querySelectorAll("#fontSpacing>button");

  function changeFontSpacing (spacingButton) {
    let spacing = spacingButton.target.innerText;
    text.style.lineHeight = spacing;
  }

  for (index = 0; index < arraySpacingButtons.length; index += 1) {
    arraySpacingButtons[index].addEventListener("click", changeFontSpacing);
  }

  //Changing font type;
  let arrayFontType = document.querySelectorAll("#fontType");

  function changeFontType (typeButton) {
    let type = typeButton.target.innerText;
    text.style.fontFamily = type;
  }

  for (index = 0; index < arrayFontType.length; index += 1) {
    arrayFontType[index].addEventListener("click", changeFontType);
  }
}