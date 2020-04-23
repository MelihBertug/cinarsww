var mineflayer = require('mineflayer');

var db = require('quick.db')

var ayar = {
    host: "crayzcrafthubb.aternos.me", //Buraya sunucu IPsini girin.
    port: 25565,                      //Buraya sunucu portunuzu girin. Genellikle 25565 olarak ayarlıdır.
    username: "ADMIN",               //Buraya botunuzun ismini girin.
    version: false                  //Burayı değiştirmenize gerek yok.
};

var authme = {
  authme: 'mevcut', //Buraya mevcut değilse değil yazınız.
  sifre: 'AUTHME_SIFRESI'
}

var bot = mineflayer.createBot(ayar);


bot.on('chat', function(username, message) {
  if (username === bot.username) return;
  
  function intervalFunc() {
    bot.setControlState('forward', true)
     }
  
    setInterval(intervalFunc,7000);
  
  let giris = require('giris') //Burayı kesinlikle değiştirmeyin.
  if (!giris) {
    bot.chat(`/register ${authme.sifre} ${authme.sifre}`)
    console.log('Bot sunucuya başarıyla kayıt oldu!')
    db.set('giris', 'tamamlandi')
  }
  if (giris == 'tamamlnadi') {
    bot.chat(`/login ${authme.sifre}`)
    console.log('Bot sunucuya giriş yaptı!')
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
  bot.chat('/login '+ pass);
});
    
        bindEvents(bot);
    }
}