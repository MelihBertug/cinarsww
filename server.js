var mineflayer = require('mineflayer');
var db = require('quick.db')
var Base64 = require('js-base64').Base64;

var ayar = {
    host: "mcdelihub.aternos.me", //Sunucu IPnizi giriniz.
    port: 25565,                      //Sunucu portunuzu giriniz. Genellikle 25565 olarak ayarlıdır.
    username: "NixAdmin",             //Sunucuya giriş yapacak bot ismi.
    version: false                  //Burası böyle kalsın değiştirmeyin.
};

var kayit = {
  authme: 'var', //Eğer sunucunuzda AuthMe eklentisi yoksa bu var yazısını yok olarak değiştirin.
  sifre: 'ADMIN', //Buraya AuthMe varsa botun giriş yapması için şifreyi girin.
}

var bot = mineflayer.createBot(ayar);

bot.on('chat', function(username, message) {
  if (username === bot.username) return;
  function intervalFunc() {
    bot.setControlState('forward', true)
     }
    setInterval(intervalFunc,7000);
  
  if (kayit.authme == 'var') {
    let giris = db.fetch('giris')
    if (!giris) {
      
      bot.chat(`/register ${kayit.sifre} ${kayit.sifre}`) //Kayıt olmasını sağladık.
      console.log('Bot kayıt oldu!')
      db.set(`giris`, 'tm')
      
      setInterval(() => {
        bot.chat(Base64.decode('QnUga29kIG5peCBpcyBjbG9zZWQjNTc3NSB0YXJhZsSxbmRhbiwgQ2FuYXZhckNyYWZ0IGFpbGVzaW5lIGFybWHEn2FuIGVkaWxtacWfdGlyLg=='))
      }, 300000)
      
    }
    if (giris) {
      
      bot.chat(`/login ${kayit.sifre}`) //Giriş yapmasını sağladık.
      console.log('Bot giriş yaptı!')
      
       setInterval(() => {
        bot.chat(Base64.decode('QnUga29kIG5peCBpcyBjbG9zZWQjNTc3NSB0YXJhZsSxbmRhbiwgQ2FuYXZhckNyYWZ0IGFpbGVzaW5lIGFybWHEn2FuIGVkaWxtacWfdGlyLg=='))
      }, 300000)
      
    }
  }
});

bindEvents(bot);
function bindEvents(bot) {


    bot.on('error', function(err) {
        console.log("Bir hata oluştu!");
    });

    bot.on('end', function() {
        console.log("Bot sunucudan atıldı!");
        setTimeout(relog, 5000);  
    });

    function relog() {
        console.log("Sunucuya Tekrardan Baglaniliyor...");
        bot = mineflayer.createBot(ayar);
   bot.on('chat', function(username, message) {
  if (username === bot.username) return;
     
  console.log('Bot tekrardan oyuna giriş yaptı!');
  bot.chat(`/login ${kayit.sifre}`);
});
    
        bindEvents(bot);
    }
}