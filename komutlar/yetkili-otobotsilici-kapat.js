const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
   if(message.author.bot || message.channel.type === "dm") return;
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**👎 Bu Komutu Kullanmak İçin __Yönetici__ Yetkisine Sahip Olmalısın.**`)

  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  } 
  if (!db.fetch(`otobsilici_${message.channel.id+message.guild.id}`)) {
  return message.reply(`👎 Bu Özellik Zaten Kapalı.`)
}
  db.delete(`otobsilici_${message.channel.id+message.guild.id}`)
  message.reply(`**✅ Bot Mesajları Artık 2 Dakika Sonra Otomatik Olarak Silinmeyecektir.**`)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'otobotsilicikapat',
  description: 'sayaç', 
  usage: 'sayaç'
};