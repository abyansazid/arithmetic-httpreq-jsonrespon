let angka1 = 7;
let angka2 = 9;

// Rules

const deklarasi =
  "angka pertama adalah = " + angka1 + "\nangka kedua adalah = " + angka2;
const jumlah = "\nhasil jumlah dari angka diatas = " + (angka1 + angka2);
const kurang = "\nhasil kurang dari angka diatas = " + (angka1 - angka2);
const kali = "\nhasil kali dari angka diatas = " + angka1 * angka2;
const bagi = "\nhasil bagi dari angka diatas = " + angka1 / angka2;

module.exports = deklarasi + jumlah + kurang + kali + bagi;
