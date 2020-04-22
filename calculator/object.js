module.exports = {
    angka1: 9,
    angka2: 6,

    deklarasi : function() {
        return 'angka pertama adalah = ' + this.angka1 +
                '\nangka kedua adalah = ' + this.angka2; 
    },

    penjumlahan : function() {
        return 'hasil penjumlahan dari angka diatas = ' + (this.angka1 + this.angka2);
    },

    pengurangan : function(){
        return 'hasil pengurangan dari angka diatas = ' + (this.angka1 - this.angka2);
    },

    perkalian : function(){
        return 'hasil perkalian dari angka diatas = ' + (this.angka1 * this.angka2);
    },

    pembagian : function(){
        return 'hasil pembagian dari angka diatas = ' + (this.angka1 / this.angka2);
    }
};