let info1 = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

console.log("Bem-vinda,", info1.personagem);

info1['recorrente'] = "Sim";
console.log(info1);

for (let index in info1) {
  console.log(index);
}

for (let index in info1) {
  console.log(info1[index]);
}

console.log(info1.personagem, "e", info2.personagem);
console.log(info1.origem, "2", info2.origem);
console.log(info1.nota, "e", info2.nota);
if (info1.recorrente == 'Sim' && info2.recorrente == 'Sim') {
  console.log("Ambos recorrentes");
}