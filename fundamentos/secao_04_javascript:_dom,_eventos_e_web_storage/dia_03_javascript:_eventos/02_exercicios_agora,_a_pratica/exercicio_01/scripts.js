let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;
let maior = numbers[0];
let menor = numbers[0];
let impares = 0;
let arrayNum = [];
let arrayDiv2 = [];

for (numero of numbers) {
  console.log(numero);
  soma += numero;
  if (numero > maior) {
    maior = numero;
  }
  if (numero < menor) {
    menor = numero;
  }
  if (numero % 2 != 0) {
    impares += 1;
  }
}

media = (soma / numbers.length);

for (let index = 1; index <= 25; index += 1) {
  arrayNum.push(index);
}

for (numero of arrayNum) {
  arrayDiv2.push(numero / 2);
}

console.log("soma: ", soma);
console.log("média: ", media);
console.log("maior número: ", maior);
console.log("menor número: ", menor);

if (numbers[numbers.length - 1] > 20) {
  console.log("Número final é maior que 20");
} else {
  ("Número final é menor ou igual a 20");
}

if (impares > 0) {
  console.log("Quantidade de números ímpares: ", impares);
} else {
  console.log("Não há números ímpares!")
}

console.log("Array de 1 a 25: ", arrayNum);
console.log("Elementos do array de 1 a 25 sendo dividos por 2: ", arrayDiv2);