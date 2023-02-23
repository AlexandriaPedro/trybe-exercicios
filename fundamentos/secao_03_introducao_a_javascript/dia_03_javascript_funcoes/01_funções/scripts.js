let realSaldo = 1000;

function adicionaSaldo(valor) {
  let saldo = realSaldo;
  saldo += valor;
  return saldo;
}

function retiraSaldo(valor) {
  let saldo = realSaldo;
  saldo -= valor;
  return saldo;
}

function taxaSaldo(valor) {
  let saldo = realSaldo;
  saldo *= valor;
  return saldo;
}

function dividirSaldo(valor) {
  let saldo =  realSaldo;
  saldo = (saldo / valor);
  return saldo
}

console.log(adicionaSaldo(100));
console.log(retiraSaldo(50));
console.log(taxaSaldo(10));
console.log(dividirSaldo(2));