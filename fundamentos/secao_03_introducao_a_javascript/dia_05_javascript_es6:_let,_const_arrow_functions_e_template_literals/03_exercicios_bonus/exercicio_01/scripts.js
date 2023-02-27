let nome = 'Pedro';

let substituaX = nome => {
  const frase = 'Tryber x aqui!';
  let words = frase.split(' ');
  let newPhrase = '';
  for (let word of words) {
    (word == 'x' || word == 'X') && (word = nome);
    newPhrase += `${word} `;
  };
  return newPhrase;
};

let minhasSkills = substituaXFuction => {
  const skills = ['Python', 'C', 'Web'];
  let newPhrase = `${substituaXFuction}\nMinhas três principais habilidades são:\n* ${skills[0]}\n* ${skills[1]}\n* ${skills[2]}`;
  return newPhrase;
}

console.log(minhasSkills(substituaX(nome)));