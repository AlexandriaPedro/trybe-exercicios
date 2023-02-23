let numero = 10;
let fatorial = 1;

for (let fatorando = numero; fatorando >= 1; fatorando -= 1) {
  fatorial *= fatorando;
}

console.log("O fatorial de", numero, "é:", fatorial);