const Discord = require('discord.js');
const fs = require('fs');
exports.run = async (client, msg, args) => {

if(msg.author.bot || msg.channel.type === "dm") return;
  if (!msg.guild) {
    return msg.author.send('bu komut sadece sunucularda kullanılabilir.**');
  }
if(args[0].length > 4) return msg.reply(' 👎  4 haneli bir rakam girmelisin.\n Örnek Kullanım : `.discrim 8198`');
const discrim = args[0] || msg.author.discriminator;
const users = client.users.filter(user => user.discriminator === discrim).map(user => user.tag);
if (users < 1) {
return msg.reply('<a:uzaylih_hyr:700331725238173747> Sistemde Bulunmayan Bir Tag Girdiniz.\n Örnek Kullanım : `.discrim 8198`');
} else {
msg.channel.send(`${users.join('\n')}`, {split: true, code: "md"})         
}
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};
      
exports.help = {
name: 'discrim'
};