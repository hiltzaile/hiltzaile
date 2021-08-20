const Discord = require('discord.js');
exports.run = function(client, message, args) {
 if(message.author.bot || message.channel.type === "dm") return;
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**<👎 Bu Komutu Kullanmak İçin __Yönetici__ Yetkisine Sahip Olmalısın.**`)

  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  }  
  let mesajsayisi = parseInt(args.join(' '));
  if (isNaN(args[0])) {
            message.reply("**👎 Kaç mesaj sileceğimi belirtmedin.**").then(msg => msg.delete(5000));
            return
        }
        
        if (args[0].length > 99) {
            message.channel.send("**👎 99'dan fazla mesaj silemem.**").then(msg => msg.delete(5000));
            return
        }
  message.channel.bulkDelete(mesajsayisi + 1);
  message.reply('✅ **__' + mesajsayisi + '__** **adet mesaj sildim!** ').then(msg => msg.delete(5000));


};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 0
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktar mesajı siler.',
  usage: 'temizle <temizlenecek mesaj sayısı>'
};