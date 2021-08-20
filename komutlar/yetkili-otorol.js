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
if(frenzy_ibrahim) return message.reply(`👎 Bu sistem zaten aktif durumda. Kapatmak için **${prefix}otorolkapat**`)
let frenzy_role = message.mentions.roles.first()
let frenzy_kanal = message.mentions.channels.first()
if(!frenzy_kanal || !frenzy_role) return message.reply(`👎 Otorol sistemini ayarlamak için **rol ve kanal** belirtmelisin.\nÖrnek Kullanım : \`.otorol @üye #otorol \``)
  
db.set(`Frenzy?Code?OtorolRol_${message.guild.id}`,frenzy_role.id) 
db.set(`Frenzy?Code?OtorolKanal_${message.guild.id}`,frenzy_kanal.id)
message.reply(`✅ Otorol aktif edildi!\nYeni gelen kullanıcılara <@&${frenzy_role.id}> rolünü vereceğim.`)
};  
exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['otorolayarla'],
  permLevel: 0 
};
exports.help = {
  name: 'otorol',
  description: 'Otorol Sistemi - Frenzy Code',
  usage: 'otorol rol kanal'
};