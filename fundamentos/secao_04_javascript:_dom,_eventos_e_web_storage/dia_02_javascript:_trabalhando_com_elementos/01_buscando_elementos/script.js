const ondeVoceEsta = document.getElementById("elementoOndeVoceEsta");
console.log(ondeVoceEsta);

const paiOndeVoceEsta = ondeVoceEsta.parentElement;
console.log(paiOndeVoceEsta);
paiOndeVoceEsta.style.color = 'red';

const primeiroFilho = ondeVoceEsta.firstElementChild;
console.log(primeiroFilho);
primeiroFilho.innerHTML = 'The Rolling Stones';

console.log(paiOndeVoceEsta.firstElementChild);

console.log(ondeVoceEsta.previousElementSibling);

console.log(ondeVoceEsta.innerText);

console.log(ondeVoceEsta.nextElementSibling);

console.log(paiOndeVoceEsta.firstElementChild.nextElementSibling.nextElementSibling);