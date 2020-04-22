module.exports = function(angka1, angka2) {
    // deklarasi operasi
    const penjumlahan = angka1 + angka2;
    const pengurangan = angka1 - angka2;
    const perkalian = angka1 * angka2;
    const pembagian = angka1 / angka2;

    return 'angka pertama adalah = ' + angka1 + 
            '\nangka kedua adalah = ' + angka2 +
            '\nhasil penjumlahan dari angka diatas = ' + penjumlahan +
            '\nhasil pengurangan dari angka diatas = ' + pengurangan +
            '\nhasil perkalian dari angka diatas = ' + perkalian +
            '\nhasil pembagian dari angka diatas = ' + pembagian;
}