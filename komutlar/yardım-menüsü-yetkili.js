const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;


exports.run = (client, message, args) => {

if(message.author.bot || message.channel.type === "dm") return;
  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
    
  }

let davet = "https://www.kisa.link/discord-uzayli-bot"
  let pages = [
              'Moderasyon Komutları Menüsüne Hoşgeldiniz\n\nKomutları Görmek İçin :rewind: ve :fast_forward: emojilerini kullabilirsin.',
              `\n** 🎩 [${prefix}ban](${davet})** : Etiketlediğiniz kullanıcıyı sunucudan yasaklar.\n** 🎩 [${prefix}kick](${davet})** : Etiketlediğiniz kişiyi sunucudan atar.\n**🎩 [${prefix}botgüvenlik](${davet})** : Sunucuya bot eklenmesini açar/kapatırsınız.\n**🎩 [${prefix}mod-log](${davet})** : Mod-log kanalını ayarlarsınız.\n** 🎩 [${prefix}otorol](${davet})** : Otorolü ayarlarsınız. \n** 🎩 [${prefix}otorol-kapat](${davet})** : Otorolü kapatırsınız.\n** 🎩 [${prefix}son-üye](${davet})** : Sunucuya gelen son üyeyi ses kanalında gösterir.\n** 🎩 [${prefix}sil](${davet})** : Belirttiğiniz kadar mesajı siler.\n`,
              `\n** 🎩 [${prefix}reklamengel](${davet})** : Reklam korumasını açar/kapatırsınız.\n** 🎩 [${prefix}sayaç](${davet})** : Sayaç sistemini ayarlarsınız.\n** 🎩 [${prefix}sayaç-kapat](${davet})** : Sayacı sistemini kapatırsınız.\n** 🎩 [${prefix}ses-limit](${davet})** : İd'sini yazdığınız ses kanalının limitini ayarlarsınız.\n** 🎩 [${prefix}sunucu-avatar-değiştir](${davet})** : Sunucunun avatarını değiştirirsiniz.\n** 🎩 [${prefix}yavaşmod](${davet})** : Yavaşmodu ayarlarsınız.\n** 🎩 [${prefix}uyar](${davet})** : Etiketlediğiniz kişiyi dm den uyarırsınız. \n** 🎩 [${prefix}embed](${davet})** : Yazdığınız mesajı embedli atar. `,
              `\n** 🎩 [${prefix}öneri-ayarla](${davet})** : Öneri kanalını ayarlarsınız.\n** 🎩 [${prefix}görselkanal](${davet})** : Belirttiğiniz kanala sadece resim atılmasını sağlar.\n** 🎩 [${prefix}kayıt-sistemi](${davet})** : Kayıt sistemini ayarlarsınız.\n** 🎩 [${prefix}unban](${davet})** : İd'sini girdiğiniz kişinin banını açar.\n** 🎩 [${prefix}otobotsiliciaç](${davet})** : Botların mesajlarını 2 dakika sonra silmesini açar/kaparsınız.\n** 🎩 [${prefix}otobotsilicikapat](${davet})** : Botların mesajlarını 2 dakika sonra silmesini açar/kaparsınız.\n** 🎩 [${prefix}roller](${davet})** : Sunucudaki rolleri gösterir.\n** 🎩 [${prefix}bototorol](${davet})** : Sunucuya giren botlara otomatik olarak verilecek rolü ayarlarsınız. `,
              `\n** 🎩 [${prefix}anons-yap](${davet})** : Süreli Mesajı Ayarlarsınız \n** 🎩 [${prefix}anons-sil](${davet})** : Süreli Mesaj Olan Kanaldaki Süreli Mesajı Silersiniz`
              ];
  let page = 1;

  const embed = new Discord.RichEmbed()
    .setColor('GREEN')
    .setFooter(`Sayfa ${page} / ${pages.length}`)
    .setDescription(pages[page-1])
  message.channel.send(embed).then(msg => {

  msg.react('⏪')
  .then(r => {
    msg.react('⏩')

      //Filter
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });

      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setColor('GREEN')
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setColor('GREEN')
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })

    })
  })
};

exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["mod","yetkili"],
permLevel: 0
};

exports.help = {
name: 'moderasyon',
description: 'Yardım Listesini Gösterir',
usage: 'sayfalıyardım'
};