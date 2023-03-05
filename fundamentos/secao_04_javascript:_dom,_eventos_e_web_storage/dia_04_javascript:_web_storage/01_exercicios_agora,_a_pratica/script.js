window.onload = () => {
  //Changing background color;
  let text = document.getElementById("text");

  let arrayColorButtons = document.querySelectorAll("#backgroundColor>button");
  
  function changeBackgroundColor(backgroundColorButton) {
    let color = backgroundColorButton.target.innerText;
    text.style.backgroundColor = color;

    //Putting the setting chose in localStorage;
    localStorage.setItem("backgroundColor", color);
  }

  function setBackgroundColor(color) {
    text.style.backgroundColor = color
  }
  
  for (let index = 0; index < arrayColorButtons.length; index += 1) {
    arrayColorButtons[index].addEventListener("click", changeBackgroundColor);
  }

  //Changing font color;
  let arrayFontColorButtons = document.querySelectorAll("#fontColor>button");

  function changeFontColor (fontColorButton) {
    let color = fontColorButton.target.innerText;
    text.style.color = color;

    //Putting the setting chose in localStorage;
    localStorage.setItem("fontColor", color);
  }

  function setFontColor(color) {
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

    //Putting the setting chose in localStorage;
    localStorage.setItem("fontSize", size);
  }

  function setFontSize(size) {
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

    //Putting the setting chose in localStorage;
    localStorage.setItem("fontSpacing", spacing);
  }

  function setFontSpacing(spacing) {
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

    //Putting the setting chose in localStorage;
    localStorage.setItem("fontType", type);
  }

  function setFontType(type) {
    text.style.fontFamily = type
  }

  for (index = 0; index < arrayFontType.length; index += 1) {
    arrayFontType[index].addEventListener("click", changeFontType);
  }

  //Putting settings on localStorage;
  function initialize() {
    let backgroundColor = localStorage.getItem("backgroundColor");
    console.log(backgroundColor);
    if (backgroundColor) {
      setBackgroundColor(backgroundColor);
    }

    let fontColor = localStorage.getItem("fontColor");
    if (fontColor) {
      setFontColor(fontColor);
    }

    let fontSize = localStorage.getItem("fontSize");
    if (fontSize) {
      setFontSize(fontSize);
    }

    let fontSpacing = localStorage.getItem("fontSpacing");
    if (fontSpacing) {
      setFontSpacing(fontSpacing);
    }

    let fontType = localStorage.getItem("fontType");
    if (fontType) {
      setFontType(fontType);
    }
  }

  initialize();
}