const Discord = require('discord.js'),
      db = require('quick.db'),
      ayarlar = require('../ayarlar.json'),
      prefix = ayarlar.prefix
exports.run = async (client, message, args) => {
   if(message.author.bot || message.channel.type === "dm") return;
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**👎 Bu Komutu Kullanmak İçin __Yönetici__ Yetkisine Sahip Olmalısın.**`)

  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  } 
let frenzysayı = await db.fetch(`FrenzyCode+SayaçSayı_${message.guild.id}`)  
let frenzykanal = await db.fetch(`FrenzyCode+SayaçKanal_${message.guild.id}`)  
 
if(!frenzysayı && !frenzykanal) return message.reply(`👎 Sayaç Sistemi Zaten Kapalı **Açmak İçin** : \`${prefix}sayaç-ayarla #kanal 100\``)
db.delete(`FrenzyCode+SayaçSayı_${message.guild.id}`) 
db.delete(`FrenzyCode+SayaçKanal_${message.guild.id}`) 
message.reply(`✅ Sayaç Başarıyla Kapatıldı!!`)
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sayaçkapat'],
  permLevel: 0
};
exports.help = {
  name: 'sayaç-kapat',
  description: 'Sayaç Sistemi',
  usage: 'sayaç-kapat'
};
