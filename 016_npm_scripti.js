/*
Bir projede çalışırken kısayollar atamak istiyorsak 
package.json dosyasına gidip orada kısayolun ismini ve karşılık
değerini yazarak Json dosyasını güncelleyerek 
Öncelikle kısa kodlarla uzun komutları çalıştırabiliriz
örneğin
"scripts": tagının altına aşağıdaki kodu yazarsak
    "start": "node app.js",
teminal ekranında 
npm start //yazmamız halinde app.js dosyası nodejs ile çalışır

**Eğer npm'de tanımlı bir fonksiyon ismini anahtar kelime olarak tanımlarsak
örneğin start-server
hata alırız bunu önlemenin tek yolu  
      npm run start-server
şeklinde kodumuzu çalıştırmaktır

json dosyası değişikliklerini algılayan modülü sadece üzerinde çalışırken 
kullanacak seviyede yüklemek için
npm install nodemon --save-dev


*/