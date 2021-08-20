const Discord = require('discord.js');

exports.run = function (client, message, args) {
 if(message.author.bot || message.channel.type === "dm") return;
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**👎 Bu Komutu Kullanmak İçin __Yönetici__ Yetkisine Sahip Olmalısın.**`)

  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  }  
    let kanal = message.mentions.channels.first();
    let duyurumetni = args.join(" ").slice(22);
    if(!kanal) return message.channel.send("👎 Hata bir kanal etiketlemelisini!");
  if(!duyurumetni) return message.channel.send("👎 Hata duyuru metni yazmalısınız!");
  message.delete();
  message.channel.send("✅ Başarıyla duyuruldu!");
    kanal.createWebhook("Duyuru 📢")
    .then(webhook => webhook.edit("Lumonious")
        .then(wb => {
            const duyurucu = new Discord.WebhookClient(wb.id, wb.token);
            duyurucu.send(duyurumetni)
            duyurucu.delete()
        })
        .catch(console.error))
        .catch(console.error);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: 'duyuruyap'
};