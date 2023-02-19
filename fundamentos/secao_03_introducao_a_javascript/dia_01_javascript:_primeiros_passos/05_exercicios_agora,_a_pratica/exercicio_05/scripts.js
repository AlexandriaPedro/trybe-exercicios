let peca = "rei";
peca = peca.toLowerCase();

switch (peca) {
  case "bispo":
    console.log("Diagonais.")
    break;
  case "torre":
    console.log("Linhas retas.")
    break;
  case "cavalo":
    console.log("Movimento em L.")
    break;
  case "peão":
    console.log("Uma direção.")
    break;
  case "rei":
    console.log("todas direções.")
    break;
  case "rainha":
    console.log("Linhas retas ou diagonais.")
    break;
  default:
    console.log("Peça inválida!")
}
