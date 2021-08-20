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
const frenzy_sayı = args[1]
const frenzy_kanal = message.mentions.channels.first()
if(!frenzy_sayı || !frenzy_kanal) return message.reply(`👎 Sayaç Sistemini Ayarlamak İçin Lütfen Sayı ve Kanal Belirtiniz.\n Örnek Kullanım : \`${prefix}sayaç #kanal 100\``)
if(isNaN(frenzy_sayı)) return message.reply(`👎 Sayaç Sistemini Ayarlamak İçin Sayıyı Sadece Rakamlardan Yazmalısın!\n Örnek Kullanım : \`${prefix}sayaç #kanal 100\``)
  
await db.set(`FrenzyCode+SayaçSayı_${message.guild.id}`,frenzy_sayı)  
await db.set(`FrenzyCode+SayaçKanal_${message.guild.id}`,frenzy_kanal.id)  
  
message.reply(`✅ **Sayaç Başarıyla Ayarlandı!**`)
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'sayaç',
  description: 'Sayaç Sistemi - Frenzy Code',
  usage: 'sayaç <sayı> <#kanal>'
};