let lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

let lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

let lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addTurnoNa2 (objetoMod, chave, valor) {
  objetoMod[chave] = valor;
};

addTurnoNa2 (lesson2, 'turno', 'noite');

function listKeysObject (objeto) {
  let arrayKey = Object.keys(objeto);
  console.log(arrayKey);
};

listKeysObject (lesson1);

function showLengthObject (objeto) {
  let arrayLength = Object.entries(objeto);
  console.log(arrayLength.length);
};

showLengthObject (lesson1);

function listValuesObject (objeto) {
  let arrayValues = Object.values(objeto);
  console.log(arrayValues);
};

listValuesObject (lesson1);

let allLessons = {
  lesson1: {},
  lesson2: {},
  lesson3: {},
};
Object.assign(allLessons.lesson1, lesson1);
Object.assign(allLessons.lesson2, lesson2);
Object.assign(allLessons.lesson3, lesson3);

console.log(allLessons);

function totalStudents (lesson1, lesson2, lesson3) {
  let total = lesson1.numeroEstudantes + lesson2.numeroEstudantes + lesson3.numeroEstudantes;
  console.log(total);
};

totalStudents (lesson1, lesson2, lesson3);

function getValueByNumber (objeto, indice) {
  let arrayValue = Object.values(objeto);
  console.log(arrayValue[indice]);
};

getValueByNumber (lesson1, 0);

function verifyPair (objeto, chave, valor) {
  if (objeto[chave] == valor) {
    console.log(true);
  } else {
    console.log(false);
  }
};

verifyPair (lesson3, 'turno', 'noite');
verifyPair (lesson3, 'materia', 'Maria Clara');
verifyPair (lesson2, 'professor', 'Carlos');
