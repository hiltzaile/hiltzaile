
const Discord = require("discord.js");
const request = require('node-superfetch');

module.exports.run = async (bot, message, args) => {

if(message.author.bot || message.channel.type === "dm") return;
  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  }
  
  
  try {
        var query = args.join(" ");
        if(!query) message.channel.sendEmbed(new Discord.RichEmbed().setTitle("HATA").setDescription("<a:uzaylih_hyr:700331725238173747>  Wikipedia da Aranacak şeyi yazman Gerekiyor!").setColor("RED"))
        var  { body } = await request
        .get('https://tr.wikipedia.org/w/api.php')
        .query({
            action: 'query',
            prop: 'extracts|pageimages',
            format: 'json',
            titles: query,
            exintro: '',
            explaintext: '',
            pithumbsize: 150,
            redirects: '',
            formatversion: 2
        })

       var data = body.query.pages[0];
            if (data.missing) return message.channel.sendEmbed(new Discord.RichEmbed().setTitle("HATA").setDescription(" 👎  Sonuç bulunamadı."))
            var embed = new Discord.RichEmbed()
                .setTitle(data.title)
                .setAuthor("Wikipedia", "https://cdn.discordapp.com/attachments/708336677000577116/708874305156677702/kisspng-wikipedia-logo-wikimedia-foundation-encyclopedia-a-simple-5acfc57d65dd52.png", "https://www.wikipedia.org/")
                .setThumbnail(data.thumbnail ? data.thumbnail.source : null)
                .setURL(`https://tr.wikipedia.org/wiki/${encodeURIComponent(query).replace(/\)/g, "%29")}`)
                .setDescription(data.extract.replace(/\n/g, '\n\n'))
                .setColor("#2FD62D");
                message.channel.send(embed)
    } catch (error) {
        message.channel.sendEmbed(new Discord.RichEmbed().setTitle("HATA").setDescription(error).setColor("RED"))
    }
    
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["viki","vikipedia","wikipedia","wiki","vikipedi"],
  permLevel: 0
};

module.exports.help = {
  name: 'vikipedia',
  description: 'Wikipedia sitesinde arama yaparsınız',
  usage: 'vikipedi'
};