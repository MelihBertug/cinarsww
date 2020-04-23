var mineflayer = require('mineflayer');
var db = require('quick.db')

var bot = mineflayer.createBot({
  host: "play.creativeorsurvival.net",         // Buraya Aternos sunucunuzun IPsini giriniz.
  port: 25565,                      // Buraya sunucu portunuzu giriniz.
  username: "ADMIN",           // Buraya oyuncu ismini giriniz.
  password: "ADMIN",          // Buraya şifreyi giriniz.
  version: false             // Burayı ellemeyin böyle kalsın. 
});

var eklenti = {
  authme: 'var', //Eğer sunucunuzda AuthMe eklentisi yoksa bu var yazısını yok olarak değiştirin.
  authme_sifre: 'ADMIN', //Buraya AuthMe varsa botun giriş yapması için şifreyi girin.
}

bot.on('chat', function async(username, message) {
  if (username === bot.username) return;
  
  setInterval(() => {
    bot.chat(`Bu kod nix is closed#5775 tarafından, CanavarCraft ailesine sunulmuştur.`)
  }, 300000)
  
  if (eklenti.authme == 'var') {
    
    let giris = db.fetch(`giris_${eklenti.authme}`)
    if (!giris) {
      bot.chat(`/register ${eklenti.authme_sifre} ${eklenti.authme_sifre}`)
      db.set(`giris_${eklenti.authme}`, 'tamamlandi')
    }
    
   function intervalFunc() {
    bot.setControlState('forward', true)
     }
    setInterval(intervalFunc,7000);
    
    
  console.log(`Bot sunucuya başarıyla giriş yaptı.`);
    
    
  bot.chat(`/login ${eklenti.authme_sifre}`);
  }
});


//bot.on('error', err => console.log(err))


bindEvents(bot);
function bindEvents(bot) {


    bot.on('error', function(err) {
        if (err.code == err.code) {
          console.log('Sunucu malesef kapalı!')
        }
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