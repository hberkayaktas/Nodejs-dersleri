/*
NPM
NPM bir paket yönetim sistemidir buradan jquery ,angular gibi birçok JavaScript
kütüphanesini projemize dahil edebilir veya kendi kütüphanemizi NPM havuzuna aktarabiliriz
kurmak için ilk önce package.json dosyamızı oluşturmamız lazım bunu oluşturmak
için de npm init fonksiyonu ile bulunduğumuz konuma package.json dosyamızı
inşa etmemiz gerekiyor 
npm init 
dedikten sonra yukarıdan aşağı tüm sorularını Evet diyerek de geçebiliriz
veya hepsine bir tanımlama yaparak da  geçebiliriz


// node -v
// cd *klasör konumu*

// npm init

//veya 
//npm init --yes

//diyerek kurabilirz soru (sormaz)

---Kütüphaneleri Kurma
npm i underscore
@ işareti ile versiyon numarasını yazabilirsiniz. -> npm i underscore@1.9.1

npm install diyerek kurulumlar yapılır

npm i jquery

- > devamı ve  kütüphane kullanımı 015 dosyasında


**bir uygulama için farklı kütüphanelerle çalışırken hepsini derleyip tek bir 
kütüphane özelinde birleştirmek için 
npm i webpack --save-dev

**webPack Developer Kütüphanesi
kodunu kullanarak tek bir kütüphanede birleştirilir Daha sonrasında üzerinde
çalışmak Hızlı ve kolay olur Fakat uygulama çalışma esnasında sonra bu
pakete ihtiyacımız kalmaz bu yerel bir paket halinde tutulur
Global paketler hala saf haliyle bulunabilir


**yerel bir paketin Global bir paket haline
getirmek için aşağıdaki kodu kullanırız 
npm i live-server --global

**bilgisayarımızda var olan Global paketleri görüntülemek
için aşağıdaki kodu kullanırız
npm list -g

**bilgisayarınızda var olan Global paketlerin
ana versiyonlarını görmek için aşağıdaki kodu kullanırız
npm list -g --depth 0

**projeden Bir kütüphaneye silme
npm uninstall jquery

*/