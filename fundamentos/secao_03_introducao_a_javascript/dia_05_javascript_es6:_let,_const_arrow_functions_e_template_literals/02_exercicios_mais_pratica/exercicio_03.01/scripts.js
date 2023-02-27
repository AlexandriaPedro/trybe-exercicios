let longestWord = frase => {
  let words = frase.split(' ');
  let biggest = '';

  for (let word of words) {
    (word.length > biggest.length) && (biggest = word);
  };

  console.log(biggest);
}

longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu');