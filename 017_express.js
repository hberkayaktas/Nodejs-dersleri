/*
-express js bir web arayüzü yönetim framework'üdür.
bu modülü kurarak sitelerimizi yönete biliriz. expressi kurmak için
geçerli dizine terminalden ulaşırız
      npm install express

-kodunu girerek yükleriz
ardından nodemonu yükleriz eğer istersek global ölçütte yükleye biliriz
      npm install nodemon -g

-package.json dosyasına gidip orada kısayolun ismini ve karşılık
değerini yazarak Json dosyasını güncelleyerek 
Öncelikle kısa kodlarla uzun komutları çalıştırabiliriz
örneğin
"scripts": tagının altına aşağıdaki kodu yazarsak
    "start": "node app.js",
teminal ekranında 
npm start //yazmamız halinde app.js dosyası nodejs ile çalışır

-daha sonra serverimizi npm start diyerek başlatırız
      npm start

-ardından
      const express = require('express');
      const app = express();
diyerek express js yi insa ederiz


-express içindeki gövde parçalama işlemleri
      npm install body-parser
modulünü yükledikten sonra olur



*/