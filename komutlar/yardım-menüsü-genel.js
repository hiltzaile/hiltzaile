const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;


exports.run = (client, message, args) => {

let davet = "www.pornhub.com"
  let pages = [
              'Genel Komut Menüsüne Hoşgeldiniz\n\nKomutları Görmek İçin :rewind: ve :fast_forward: emojilerini kullabilirsin.',
              `\n** <👀 [${prefix}say](${davet})** : Sunucudaki üye istatistiğini gösterir.\n** 👀 [${prefix}emojiler](${davet})** : Sunucudaki emojileri listeler.\n** 👀 [${prefix}discrim](${davet})** : Discriminizdeki kişileri gösterir.\n** 👀 [${prefix}avatar](${davet})** : Avatarınızı gösterir.\n** 👀 [${prefix}havadurumu <şehir>](${davet})** : Belirttiğiniz şehrin haavadurumunu gösterir.\n** 👀 [${prefix}say](${davet})** : Yılbaşına kalan süreyi gösterir.\n** 👀 [${prefix}wikipedia](${davet})** : Yazdığınız şeyi wikipedia üzerinde arar.\n** 👀 [${prefix}atatürk-sözleri](${davet})** : Rastgele Atatürk sözleri paylaşır.\n** 👀 [${prefix}öneri](${davet})** : Bulunduğunuz sunucu için öneri yaparsınız.`
        
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
aliases: ['askjlccccccccccccccccccccccccccccccccasdljk'],
permLevel: 0
};

exports.help = {
name: 'genel',
description: 'Yardım Listesini Gösterir',
usage: 'sayfalıyardım'
};