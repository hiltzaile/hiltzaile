const discord = require('discord.js')

exports.run = async (bot, message, args) => {

if(message.author.bot || message.channel.type === "dm") return;
  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  }
  if (args.length < 1) {
    return message.reply(' <a:uzaylih_hyr:700331725238173747> Doğru kullanım .ters <yazı>')
  }
  await message.channel.send(args.join(' ').split('').reverse().join(''));
};

exports.conf = {
  aliases: [ 'ters' ],
  enabled: true,
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'tersyaz',
  description: 'Gönderdiğiniz mesajın ters çevrilmiş halini yazar.',
  usage: 'tersyaz <yazı>'
};