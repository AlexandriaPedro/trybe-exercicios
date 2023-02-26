let number = 4;
let verificador = 0;

if (number != 1) {
  for (let aux = 2; aux <= number; aux += 1) {
    if (number % aux == 0) {
      verificador += 1;
    }
  }
  if (verificador > 1) {
    console.log(number, ", não é um número primo!")
  } else {
    console.log(number, ", é um número primo!")
  }    
} else {
  console.log(number, ", não é um número primo!")
}