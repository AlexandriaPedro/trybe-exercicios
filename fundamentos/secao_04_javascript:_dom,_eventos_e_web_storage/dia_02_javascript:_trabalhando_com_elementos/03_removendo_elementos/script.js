let elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");
console.log(elementoOndeVoceEsta);

let oqueQueroRemover = elementoOndeVoceEsta.firstElementChild;
console.log(oqueQueroRemover);

elementoOndeVoceEsta.removeChild(oqueQueroRemover);