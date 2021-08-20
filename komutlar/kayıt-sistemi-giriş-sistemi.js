const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => { 
 if(message.author.bot || message.channel.type === "dm") return;
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**< 👎  Bu Komutu Kullanmak İçin __Yönetici__ Yetkisine Sahip Olmalısın.**`)

  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  }  
  let codeming = args.slice(0).join(" ")
  if(codeming.length < 5) return message.channel.send(' 👎  Giriş Sistemi İçin En Az 5 Karakter Belirtebilirsin.\n Örnek: `.giriş-sistemi Hoşgeldin -uye- Bu Kayıt Olmak İçin .kayıt İsim Yaş`')
  
  
  message.reply('✅ Sunucuya Yeni Üye Katılınca '+codeming+' Kayıt Kanalına Bu Şekilde Karşılama Mesajı Atacağım.')

db.set(`codeminghgmsj_${message.guild.id}`,codeming)

};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'giriş-sistemi',
  description: 'taslak', 
  usage: 'giriş-sistemi'
};