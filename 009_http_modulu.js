const http = require('http');


// aşağıdaki kod bir listener olduğundan sürekli çalışır bunu terminal 
// cursor'unun yanıp sönmemesinden anlayabiliriz
// listenerri kapatmak için terminalde CTRL + C deriz


const server = http.createServer((req, res)=>{
            //tarayıcı penceresinde 
            //localhost:3000 girersen terminalde talepler yazdırılır
            // req metodu tüm değerleri yazar
      //--console.log(req); 


            //http://localhost:3000/index ; 
             // req.url = şuan bağlanılan urlyi verir 
             // req.method bağlantı memetodunu verir
      //--console.log(req.url, req.method); 

            //sunucuda yanıt oluşturma
      if(req.url === '/'){ 
            res.write('Hello World'); //ana sayfaya giderse hello world yazdır
            res.end(); //yanıtı sonlandır ekrana yazdırlsın
      }
      if (req.url === '/about') {
            res.write('This is about page'); // hakkında sayfasına gidilirse
           res.end();
      }
});



server.listen(3000);
console.log('Listening port on 3000...');