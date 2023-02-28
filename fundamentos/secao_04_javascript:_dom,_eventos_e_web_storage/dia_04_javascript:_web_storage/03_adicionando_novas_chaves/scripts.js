let student = {};

function addProperty (object, newKey, newValue) {
  object[newKey] = newValue;
};

newKey = "nome";
newValue = "Pedro Alexandria";
addProperty(student, newKey, newValue);

newKey = "email";
newValue = "emailficticio@gmail.com";
addProperty(student, newKey, newValue);

newKey = "telefone";
newValue = "21 98144-3218 (also fic)";
addProperty(student, newKey, newValue);

newKey = "github";
newValue = "AlexandriaPedro";
addProperty(student, newKey, newValue);

newKey = "linkedln";
newValue = "Pedro Alexandria";
addProperty(student, newKey, newValue);

console.log(student);