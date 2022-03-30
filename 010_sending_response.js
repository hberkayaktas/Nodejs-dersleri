const http = require('http'); 
const fs = require('fs');
//kullanıcıya cevap yollama


const server = http.createServer((req,res)=> {

            //cevap olarak  text yollayacağımızı belirtiyoruz
      //res.setHeader('Content-Type','text/plain');
            // cevap olarak  json veri tipinde veri yollayacağımızı belirtiyoruz
      //res.setHeader('Content-Type','application/json');
            //cevap olarak  html içeriği yollayacağımızı belirtiyoruz
      res.setHeader('Content-Type', 'text/html');

            // işlem kodu belirliyoruz
      res.statusCode = 200; 
            // işlem mesajı belirliyoruz
      res.statusMessage = 'ok'; 
            //düz yazı
      //res.write('Hello World');
            // json veri tipinde bir veri
      //res.write(JSON.stringify({name: 'samsung s8 ',price :3000}));

            //html içeriği
      /*
      res.write('<html>');
      res.write('<head><title>My First Page</title></head>');
      res.write('<body><h1>Hello from Nodejs Server</h1></body>');
      res.write('</html>');
      res.end();
      */

      //bir dosyanın cevap olarak yazdırılması için file system modulu yüklenir
      fs.readFile('999_ornek.html', function (error, file) {
            if (error) { //hata alırsa hata mesajı yazdır
                  res.setHeader('Content-Type', 'text/plain');
                  res.statusCode = 404;
                  res.statusMessage  = 'ok'; 
                  res.end('dosya bulunamadı');
            }else{
                  res.setHeader('Content-Type', 'text/html');
                  res.statusCode = 200; 
                  res.statusMessage = "Ok";
                  res.end(file); //999_ornek.html dosyasını yazdırır
            }
      });
      

      
});

server.listen(3000);

console.log('Listening port on 3000... ');