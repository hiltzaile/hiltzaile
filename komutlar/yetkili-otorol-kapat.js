	const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json'),
      prefix = ayarlar.prefix
exports.run = async(client, message, args) =>{
   if(message.author.bot || message.channel.type === "dm") return;
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**👎 Bu Komutu Kullanmak İçin __Yönetici__ Yetkisine Sahip Olmalısın.**`)

  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  } 
let frenzy_ibrahim = await db.fetch(`Frenzy?Code?OtorolRol_${message.guild.id}`) || await db.fetch(`Frenzy?Code?OtorolKanal_${message.guild.id}`)
if(!frenzy_ibrahim) return message.reply(`👎 Bu sistem zaten kapalı durumda. Açmak için **${prefix}otorol rol kanal**`)
db.delete(`Frenzy?Code?OtorolRol_${message.guild.id}`) 
db.delete(`Frenzy?Code?OtorolKanal_${message.guild.id}`)
message.reply(`✅ Otorol kapatıldı!\nYeni gelen kullanıcılara hiç bir rol vermeyeceğim.`)
};  
exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['otorol-kapat'],
  permLevel: 0 
};
exports.help = {
  name: 'otorolkapat',
  description: 'Otorol Sistemi - Frenzy Code',
  usage: 'otorolkapat'
};
