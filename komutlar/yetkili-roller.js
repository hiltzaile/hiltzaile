const Discord = require('discord.js')
exports.run = (client, message, args) => {
 if(message.author.bot || message.channel.type === "dm") return;
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**👎 Bu Komutu Kullanmak İçin __Yönetici__ Yetkisine Sahip Olmalısın.**`)

  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  }  
 
    const frenzy = message.guild.roles.filter(r => r.name !== "@everyone").map(r => r).join(' , ') || 'Bulunmuyor'
    
        const roller = new Discord.RichEmbed()
             .setDescription(frenzy)
            message.channel.send(roller)
    
  
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0,
}
exports.help = {
    name: 'roller'
}