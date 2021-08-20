const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

exports.run = async (client, message, params, args) => {
 if(message.author.bot || message.channel.type === "dm") return;

  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  } 

  
let davet = "uykum geldi eklemedim"
let oy = "www.pornhub.com"
let desteksunucu = "www.pornhub.com"
  const yardım = new Discord.RichEmbed()
     .setColor('GRAY')
      .setThumbnail(client.user.avatarURL)
	   .setTitle("**Lumonious**")

// SADECE ORTA KISIM AYARLANCAK

     .addField("**:🧸 | Kayıt Komutları**",`\n
💵 | [**${prefix}kayıt-kanal-ayarla #kanal**](${davet}) - Kayıt Kanalını Ayarlar
💵 | [**${prefix}kayıt-log-kanal**](${davet}) - Kayıt Olan Kişileri Gösteren Kanalı Ayarlar
💵 | [**${prefix}isim-sistemi -uye- -yas-**](${davet}) - İsim Sistemini Ayarlar
💵 | [**${prefix}kayıt-verilecek-rol-ayarla**](${davet}) - Kayıt Olan Kişiye Verilecek Rol
💵 | [**${prefix}kayıt-alınacak-rol-ayarla**](${davet}) - Kayıt Olan Kişiden Alınacak Rol
💵 | [**${prefix}kayıt-sistemi-kapat**](${davet}) - Kayıt Sistemini Kapatır Ve Verileri Siler
💵 | [**${prefix}giriş-sistemi**](${davet}) - Giriş Mesajını Düzenler.
`)
.addField('**🧸 | Not**', `🧸 | Bütün Komutları Ayarlamasssanız Sistem Çalışmaz.`)

// SADECE ORTA KISIM AYARLANCAK
 return message.channel.sendEmbed(yardım);

};


  
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['kayıtsistemi'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'kayıt-sistemi',
    description: 'yardım',
    usage: 'yardım'
  };