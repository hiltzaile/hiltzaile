const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => { 
 if(message.author.bot || message.channel.type === "dm") return;
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`** 👎  Bu Komutu Kullanmak İçin __Yönetici__ Yetkisine Sahip Olmalısın.**`)

  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  }  
  let codeming = args.slice(0).join(" ")
  if(codeming.length < 5) return message.channel.send('  👎  İsim Sistemi İçin En Az 5 Karakter Belirtebilirsin.\n Örnek: `.isim-sistemi [-uye-]|[-yas-]`')
  
  
  message.reply('✅ Kayıt Olan Kullanıcıların İsimlerini '+codeming+' Bu Şekle Göre Düzenleyeceğim.')

db.set(`codemingkisim_${message.guild.id}`,codeming)

};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'isim-sistemi',
  description: 'taslak', 
  usage: 'isim-sistemi'
};