module.exports = function(angka1, angka2) {
    this.angka1 = angka1;
    this.angka2 = angka2;

    this.penjumlahan = function() {
        return this.angka1 + this.angka2;
    };

    this.pengurangan = function() {
        return this.angka1 - this.angka2;
    };

    this.perkalian = function() {
        return this.angka1 * this.angka2;
    };

    this.pembagian = function() {
        return this.angka1 / this.angka2;
    };
};