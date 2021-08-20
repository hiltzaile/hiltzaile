const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

exports.run = async (client, message, params, args) => {
 if(message.author.bot || message.channel.type === "dm") return;

  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  } 

  
let davet = "www.pornhub.com"
let oy = "www.pornhub.com"
let desteksunucu = "www.pornhub.com"
  const yardım = new Discord.RichEmbed()
     .setColor('GRAY')
      .setThumbnail(client.user.avatarURL)
	   .setTitle("**Lumonious**")

// SADECE ORTA KISIM AYARLANCAK

     .addField("**Yardım Komutları**",`\n
:white_small_square: | [**${prefix}genel**](${davet}) - Genel Komutlar
:white_small_square: | [**${prefix}moderasyon**](${davet}) - Yetkili Komutları
:white_small_square: | [**${prefix}kayıt-sistemi**](${davet}) - Kayıt Komutları
:white_small_square: | [**${prefix}sunucu-kur**](${davet}) - Sunucu Kurma Komutları
:white_small_square: | [**${prefix}eğlence**](${davet}) - Eğlence Komutları
:white_small_square: | [**${prefix}filtreler**](${davet}) - Fotoğraf Filtreleri
:white_small_square: | [**${prefix}bot-bilgi**](${davet}) - Bot Bilgisi Komutları.
`)

// SADECE ORTA KISIM AYARLANCAK

     .addField("**:white_small_square: | Bot Hakkında**", `:white_small_square: | [Bot Davet Linki](${davet}) | [Oy Ver](${oy}) | [Destek Sunucusu](${desteksunucu}) `)
  return message.channel.sendEmbed(yardım);

};


  
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['komut'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'yardım',
    description: 'yardım',
    usage: 'yardım'
  };