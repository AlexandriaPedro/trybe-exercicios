const filhosDoPai = document.getElementById("pai");
const irmaoDoElemento = document.createElement("section");
irmaoDoElemento.id = "irmaoDoElemento";
filhosDoPai.appendChild(irmaoDoElemento);

const filhosDoOnde = document.getElementById("elementoOndeVoceEsta");
const filhoDoOnde1 = document.createElement("section");
filhoDoOnde1.id = "filhoDoOnde1";
filhosDoOnde.appendChild(filhoDoOnde1);

const filhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
const filhoDoFilhoDoFilho1 = document.createElement("section");
filhoDoFilhoDoFilho1.id = "filhoDoFilhoDoFilho1";
filhoDoFilho.appendChild(filhoDoFilhoDoFilho1);

console.log(filhoDoFilhoDoFilho1.parentElement.parentElement.nextElementSibling);