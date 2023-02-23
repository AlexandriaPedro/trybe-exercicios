let custo = 1000;
let venda = 1500;
let lucro = null;

if (custo < 0 || venda < 0) {
  console.log("Algum valor citado é inválido!");
} else {
  lucro = venda - (custo + (0.2 * custo));
  console.log(lucro);
}
