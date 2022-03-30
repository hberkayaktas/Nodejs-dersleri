// modülü dahil edelim
const fs = require('fs');

//---------tüm dizini okuma
/*
const files = fs.readdir('./', function (error, data) {
    if (error) {
        console.log(error); //hata olursa hatayı yazdır
     } else {
        console.log(data); //hata yoksa dizindeki içerikleri yazdır
    }
});*/

// ------ belirli bir dosyayı okuma
/*
const data = fs.readFile('000_ilk.html', 'utf8', function (error, data) {
          if (error) {
              console.log(error);
           } else {
              console.log(data);
          }
});
*/

//-------yeni dosya oluşturma
      //son içeriği siler ve yenisini yazar
/*
fs.writeFile('deneme.txt','hello world....',
      function (error){
            if(error){
                  console.log(error);
            }else{
                  console.log('dosya oluşturuldu');
            }
      }
)
*/

//dosya güncelleme
/*
fs.appendFile('deneme1.txt','hello world....',
      function (error){
            if(error){
                  console.log(error);
            }else{
                  console.log('dosya oluşturuldu');
            }
      }
)*/

//dosya silme
/*
fs.unlink('deneme1.txt', function (error) {
      console.log('dosya silindi.')
});
*/

//dosya ismi değiştirme
fs.rename('deneme.txt', 'deneme1.txt', function
(error) {
    console.log('dosya ismi değiştirildi.');
})