let bruto = 3000;
let semInss;
let valIr;
let final;

if (bruto <= 1556.94 && bruto > 0) {
  semInss = bruto - (0.08 * bruto);
} else if (bruto >= 1556.95 && bruto <= 2594.92) {
  semInss = bruto - (0.09 * bruto);
} else if (bruto >= 2594.93 && bruto <= 5189.82) {
  semInss = bruto - (0.11 * bruto);
} else if (bruto > 5189.82 ) {
  semInss = bruto - 570.88;
} else {
  console.log("Valor inválido!");
}
 
if (semInss <= 1903.98 && semInss > 0) {

} else if (semInss >= 1903.99 && semInss <= 2826.65) {
  valIr = (semInss * 0.075) - 142.80;
} else if (semInss >= 2826.66 && semInss <= 3751.05) {
  valIr = (semInss * 0.15) - 354.80;
} else if (semInss >= 3751.06 && semInss <= 4664.68) {
  valIr = (semInss * 0.225) - 636.13;
} else if (semInss > 4664.68) {
  valIr = (semInss * 0.275) - 869.36;
}

if (bruto > 0) {
  final = semInss - valIr;
  console.log(final);
}