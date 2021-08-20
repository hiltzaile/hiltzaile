const Discord = require('discord.js');
const db = require('quick.db');
exports.run = (client, message, args) => {

if(message.author.bot || message.channel.type === "dm") return;
  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  }
 const embed = new Discord.RichEmbed()
  .setColor('GREEN')
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setTitle(`Üye Sayısı!`)
  .setDescription(`Sunucuda **${message.guild.memberCount}** adet kullanıcı, ${message.guild.channels.size} adet kanal ,${message.guild.members.filter(m => m.user.bot).size} adet bot bulunmakta!`)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucusay'],
  permLevel: 0
};

exports.help = {
  name: 'say',
  description: 'Sunucuyu sayarsınız.',
  usage: 'sunucu-say'
};