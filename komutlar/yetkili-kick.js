
const Discord = require('discord.js');
exports.run  = async(client, message, args) => {
 if(message.author.bot || message.channel.type === "dm") return;
if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`**👎 Bu Komutu Kullanmak İçin __Üyeleri At__ Yetkisine Sahip Olmalısın.**`)

  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  }  
    var MEMBER = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!MEMBER) return message.channel.send("Bir **üye** belirt!");
    var REASON = args.slice(1).join(" ");
    if (!REASON) {
      await MEMBER.kick({reason: `Yok! | Kickleyen: ${message.author.tag} & ${message.author.id}`}).catch(err => { console.error(err); return message.channel.send("Bir **hata** oluştu! Eğer geliştirici iseniz lütfen **konsolu** inceleyiniz!"); });
const kanal = message.channel.send
const linlord = new Discord.RichEmbed()
.setColor("BLUE")
.setDescription(` \`😐\` Bir Üye **Kicklendi(adam öldü amınakoyim) **;\n 
**\`😐\` Kickleyen**: ${message.member.displayName} - \`${message.author.id}\`\n
**\`😐\` Kicklenen**: ${MEMBER.user.tag} - \`${MEMBER.user.id}\`\n
**\`😐\` Sebep**: Yok!`)
.setImage('https://cdn.discordapp.com/attachments/705894998112993332/707576804134748240/kick.jpg')
message.channel.send(linlord)

    } else {
      await MEMBER.kick({reason: `${REASON} | Kickleyen: ${message.author.tag} & ${message.author.id}`}).catch(err => { console.error(err); return message.channel.send("Bir **hata** oluştu! Eğer geliştirici iseniz lütfen **konsolu** inceleyiniz!"); });
      
const linlords = new Discord.RichEmbed()
.setColor("BLUE")
.setDescription(` \`😐 \` Bir Üye **Kicklendi**;\n 
**\`😐 \` Kickleyen**: ${message.member.displayName} - \`${message.author.id}\`\n
**\`😐 \` Kicklenen**: ${MEMBER.user.tag} - \`${MEMBER.user.id}\`\n
**\`😐 \` Sebep**: \`${REASON}\``)
.setImage('https://cdn.discordapp.com/attachments/705894998112993332/707576804134748240/kick.jpg')
message.channel.send(linlords)


    }
  }

exports.conf = { aliases: [], permLevel: 0 };
exports.help = { name: "kick" };