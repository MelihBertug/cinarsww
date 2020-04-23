var mineflayer = require('mineflayer');
var db = require('quick.db')

var bot = mineflayer.createBot({
  host: "IP.aternos.me", // optional
  port: 25565,       // optional
  username: "ADMIN", // email and password are required only for
  password: "ADMIN",          // online-mode=true servers
  version: false                 // false corresponds to auto version detection (that's the default), put for example "1.8.8" if you need a specific version
});

var eklenti = {
  authme: 'var', //Eğer sunucunuzda AuthMe eklentisi yoksa bu var yazısını yok olarak değiştirin.
  authme_sifre: 'ADMIN', //Buraya AuthMe varsa botun giriş yapması için şifreyi girin.
}

bot.on('chat', function async(username, message) {
  if (username === bot.username) return;
  
  let giris = db.fetch(``)
  
  if (eklenti.authme == 'var') {
   function intervalFunc() {
    bot.setControlState('forward', true)
     }
    setInterval(intervalFunc,7000);
    
    
  console.log(`Bot sunucuya başarıyla giriş yaptı.`);
    
    
  bot.chat(`/login ${eklenti.authme_sifre}`);
  }
});


bot.on('error', err => console.log(err))


bindEvents(bot);
function bindEvents(bot) {


    bot.on('error', function(err) {
        console.log(`Bir hata oluştu.`);
    });

    bot.on('end', function() {
        console.log(`Bot sunucudan atıldı, tekrar giriş yapmak için çabalıyor.`);
        setTimeout(relog, 5000);  
    });
  
  
   function relog() {
     
        console.log(`Sunucuya tekrar bağlanmak için çalışılıyor.`);
     
        bot = mineflayer.createBot(bot);
   bot.on('chat', function(username, message) {
  if (username === bot.username) return;
     
  console.log(`Bot sunucuya tekrar giriş yaptı.`);
       
  bot.chat(`/login ${eklenti.authme_sifre}`);
});
        bindEvents(bot);
    }
}