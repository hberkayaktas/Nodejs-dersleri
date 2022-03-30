// browser
// IIFE
var controllerA = (function() {
      // scope A
      //private değerler
      var ages = 25;
      var firstName = 'Berkay'; 

      var log =function(){ 
            console.log(this.firstName);
      }

      //public  değerler
      return {
         firstName
      }
})();

//modüller arası çalışma
var f_name = "cüneyt";
      //private değer atama
      var ages = 25;

// yazdırma fonksiyonu tanımlıyoruz
var logs = function (name){
      console.log(name);

}

//dışa aktarma tanımlamaları

//module.exports.name = f_name;
//module.exports.logs = logs;

// aktarma tanımlaması 2
module.exports = {
      name: f_name,
      logs: logs
}

// aktarma tanımlaması 3
module.exports = {
      f_name,logs
}