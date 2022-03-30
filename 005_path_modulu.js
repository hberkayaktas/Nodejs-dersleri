//modülü çağıralım
const path = require('path');

//çalıştığımız dosyanın konumunu bulma
let result = path.resolve('005_path_modulu.js');

//çalıştığımız dosyanın uzantısını bulma
let result2 = path.extname('005_path_modulu.js');

//çalıştığımız dosyanın bilinen özelliklerini bulma
let result3 = path.parse(__filename);


console.log(result);
console.log(result2);
console.log(result3);
console.log("----------------");


//veya parça parça hepsi
console.log(result3.root);
console.log(result3.dir);
console.log(result3.base);
console.log(result3.ext);
console.log(result3.name);
