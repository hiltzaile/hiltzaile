const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(message.author.bot || message.channel.type === "dm") return;
  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  }

 const embed = new Discord.RichEmbed()
.setDescription('💋 Toplam **__' + client.commands.size + '__** Komutum Var!')
  message.channel.send(embed)
};  
exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['komutsay'],
  permLevel: 0 
};
exports.help = {
  name: 'komutsayısı'
};