let porcentagem = 10;

if (porcentagem < 100 && porcentagem >= 90) {
  console.log("A");
} else if (porcentagem >= 80) {
  console.log("B");
} else if (porcentagem >= 70) {
  console.log("C");
} else if (porcentagem >= 60) {
  console.log("D");
} else if (porcentagem >= 50) {
  console.log("E");
} else if (porcentagem < 50 && porcentagem >= 0) {
  console.log("F");
} else {
  console.log("Nota inválida!")
}
