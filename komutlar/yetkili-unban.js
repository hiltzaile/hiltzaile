const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
 if(message.author.bot || message.channel.type === "dm") return;
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**👎 Bu Komutu Kullanmak İçin __Yönetici__ Yetkisine Sahip Olmalısın.**`)

  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  }  
  let guild = message.guild
  client.unbanAuth = message.author;
  let user = args[0];
  if (!user) return message.reply('👎 Banı kaldırılacak kişinin ID numarasını yazmalısın.\nÖrnek Kullanım : `.unban sebep id`').catch(console.error);
message.guild.unban(user);
  message.reply("✅ Başarıyla ban kaldırıldı!")


};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'unban',
  description: 'İstediğiniz kişinin banını kaldırır.',
  usage: 'unban [kullanıcı] [sebep]'
};