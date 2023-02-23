let number = 5;

for (let aux = 1; aux <= number; aux += 1) {
  let linha = '';
  let newLinha = '';
  for (let aux2 = 1; aux2 <= aux; aux2 += 1) {
    linha += '*';
  }
  for (let aux4 = number - linha.length; aux4 > 0; aux4 -= 1) {
      linha += ' '
    }
  for (let aux3 = linha.length - 1; aux3 >= 0; aux3 -= 1) {
    newLinha += linha[aux3];
  }

  console.log(newLinha);
}