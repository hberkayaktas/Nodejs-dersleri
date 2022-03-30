//modülü çağıralım
const url = require('url');

// adress tanımlaması
const address = 'http://sadikturan.com/kurslar?year=2019&month=nisan';


//adresi parçalama
let result = url.parse(address, true);

//tümüne erişme
console.log(result);

//parça parça erişme
console.log(result.search);
console.log(result.href);
console.log(result.query.year);
