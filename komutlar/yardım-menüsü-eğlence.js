const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;


exports.run = (client, message, args) => {

let davet = "www.pornhub.com"
  let pages = [
              'Eğlence Komutları Menüsüne Hoşgeldiniz\n\nKomutları Görmek İçin :rewind: ve :fast_forward: emojilerini kullabilirsin.',
              `\n** 🧶 [${prefix}ağla](${davet})** : Botu ağlatırsınız.\n** 🧶 [${prefix}kekoyazı](${davet})** : Yazığınız yazıyı keko yazısına çevirir.\n** 🧶 [${prefix}nahçek](${davet})** : Etiketlediğiniz kişiye nah çekersiniz.\n** 🧶 [${prefix}tabletreis](${davet})** : Tablet reis kutu açılımı yapar.\n** 🧶 [${prefix}tersyazı](${davet})** : Yazığınız yazıyı ters çevirir.`
        
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
aliases: ["eglence"],
permLevel: 0
};

exports.help = {
name: 'eğlence',
description: 'Yardım Listesini Gösterir',
usage: 'sayfalıyardım'
};