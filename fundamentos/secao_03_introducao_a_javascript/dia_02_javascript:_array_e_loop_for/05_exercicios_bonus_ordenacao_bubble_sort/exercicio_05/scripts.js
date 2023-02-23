let number = 5;

for (let aux = 1; aux <= number; aux += 1) {
  let linha = '';
  for (let aux2 = 1; aux2 <= aux; aux2 += 1) {
    linha += '*';
  }
  console.log(linha);
}