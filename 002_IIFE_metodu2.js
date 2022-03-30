// browser
// IIFE
var controllerB = (function() {
      // scope B
               
      var lastName = 'Aktaş'; 


      return {
         lastName
      }
})();

//script 002_IIFE_metodu2  içinde 002_IIFE_metodu içindeki değerleri çekme
const IIFE_metodu = require('./002_IIFE_metodu');

//kendimiz yazdırma fonksiyonuna isim atıp yazdırırsak
IIFE_metodu.logs('Hakan');

//veya tanımlı ismi alma
IIFE_metodu.logs(IIFE_metodu.name);
