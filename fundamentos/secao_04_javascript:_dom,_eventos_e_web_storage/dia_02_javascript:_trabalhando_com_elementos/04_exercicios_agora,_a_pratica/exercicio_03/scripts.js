let word = 'tryber';
let aocontrario = '';

for (let index = word.length - 1; index >= 0; index -= 1) {
  aocontrario += word[index];
}

console.log(word, 'ao contrário é:', aocontrario);