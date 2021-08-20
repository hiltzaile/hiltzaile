const db = require('quick.db')
const Discord = require('discord.js')
exports.run = async (bot, message, args) => {
 if(message.author.bot || message.channel.type === "dm") return;
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**👎 Bu Komutu Kullanmak İçin __Yönetici__ Yetkisine Sahip Olmalısın.**`)

  if (!message.guild) { // ✅
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  }  
    if (!args[0]) return message.reply('👎 Hatalı Kullanım \n Örnek Kulanım : `.reklamkick aç/kapat`')
    if (args[0] == 'aç') {
      let açıkkapalı = await db.fetch(`reklamkick_${message.guild.id}`)
      if(açıkkapalı) return message.reply(`👎 Sistem Zaten Açık`)
      
        db.set(`reklamkick_${message.guild.id}`, 'acik')
        message.reply(`✅ Reklam Kick Sistemi Başarı İle Açıldı`)
    }
    if (args[0] == 'kapat') { 
      let açıkkapalı = await db.fetch(`reklamkick_${message.guild.id}`)
      if(!açıkkapalı) return message.reply(`👎 Sistem Zaten Kapalı`)
      
        db.delete(`reklamkick_${message.guild.id}`, 'kapali')
        message.reply(`✅ Reklam Kick Sistemi Başarı İle Kapatıldı`)
    }
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['reklam-kick'],
    permLevel: 0
};
exports.help = {
    name: 'reklamkick',
    description: 'Reklam kick sistemini açıp kapatır',
    usage: 'reklamkick aç/kapat'
};