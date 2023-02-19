let ang1 = 45;
let ang2 = 45;
let ang3 = 90;
let veri = true;

if (ang1 <= 0 || ang2 <= 0 || ang3 <= 0) {
  veri = false;
} else if ((ang1 + ang2 + ang3) == 180) {
  veri = true;
} else {
  veri = false;
}

console.log(veri);
