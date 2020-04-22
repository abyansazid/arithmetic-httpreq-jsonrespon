let myLogModule = require("./log.js");
myLogModule.info("Node.js started");

// import literal
const calculatorLiteral = require("./calculator/literal");
console.log("----- Module Literal -----");
console.log(calculatorLiteral);

// import object
const calculatorObject = require("./calculator/object");
console.log("----- Module Object -----");
console.log(calculatorObject.deklarasi());
console.log(calculatorObject.penjumlahan());
console.log(calculatorObject.pengurangan());
console.log(calculatorObject.perkalian());
console.log(calculatorObject.pembagian());

// import function
const calculatorFunction = require("./calculator/function");
console.log("----- Module Function -----");
console.log(calculatorFunction(9, 6));

// import class
const calculatorClass = require("./calculator/class");
const { angka1, angka2 } = require("./calculator/object");
const calculatorClass1 = new calculatorClass(9, 6);
console.log("----- Module Class -----");
console.log(
  "hasil dari " +
    angka1 +
    " ditambah angka " +
    angka2 +
    " = " +
    calculatorClass1.penjumlahan()
);
console.log(
  "hasil dari " +
    angka1 +
    " dikurang angka " +
    angka2 +
    " = " +
    calculatorClass1.pengurangan()
);
console.log(
  "hasil dari " +
    angka1 +
    " dikali angka " +
    angka2 +
    " = " +
    calculatorClass1.perkalian()
);
console.log(
  "hasil dari " +
    angka1 +
    " dibagi angka " +
    angka2 +
    " = " +
    calculatorClass1.pembagian()
);
