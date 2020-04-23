var mineflayer = require('mineflayer');
var pass = "12345"; //Authme şifresini girin
var ayar = {
    host: "play.creativeorsurvival.net", //Ip
    port: 25565, //Değiştirmeyin
    username: "BotName", //Botun ismi
   version: false //Değiştirmeyin
};

var bot = mineflayer.createBot(ayar);


bot.on('chat', function(username, message) {
  if (username === bot.username) return;
  function intervalFunc() {
    bot.setControlState('forward', true)
     }
    setInterval(intervalFunc,7000);
  console.log('Sunucuya giriş yapıldı!');
  bot.chat('/login '+ pass);
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