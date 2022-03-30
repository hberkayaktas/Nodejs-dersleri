//modulu dahil et
const EventEmitter = require('events');

//event emitter bir class şeklindedir onu objeye ata
const emitter = new EventEmitter();

// listener kayıt et
emitter.on('connection', function (args) { //burada alınan tepkiler listelenir
    console.log('bağlantı kuruldu.',args.id,args);

});


//örneğin çıkış yapma eventi tanımlandı
emitter.on('logout', function () {
      console.log('çıkış yapıldı.');
      //tüm değişkenler veya belirli değişkenler
});

// event'i tetikle
emitter.emit('connection',{id: 1,message:'hello'}); //connection tetiklenmesi
