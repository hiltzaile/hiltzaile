const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => { 
 if(message.author.bot || message.channel.type === "dm") return;
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**< 👎  Bu Komutu Kullanmak İçin __Yönetici__ Yetkisine Sahip Olmalısın.**`)

  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  }  
let codeming = message.mentions.roles.first()
  
if(!codeming) return message.channel.send(' 👎  Kayıt Tamamlandığı Zaman alınacak Rolü Ayarlamak İçin Bir Rol Etiketlemelisin\n Örnek: `.kayıt-alınacak-rol-ayarla @kayıtsız` ')
 
message.reply('✅ Kayıt Olan alınacak Verilecek Otomatik Rol '+codeming+' Şeklinde Ayarlandı.')  
  
db.set(`codemingkalınacakrol_${message.guild.id}`, codeming.id)  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'kayıt-alınacak-rol-ayarla',
  description: 'taslak', 
  usage: 'kayit-alınacak-rol-ayarla'
};