const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => {
 
	var a = await db.fetch(`onk_${message.guild.id}`)
	var abul = message.guild.channels.find(`name`, a)
	if (!a) return message.reply(" 👎  Bir öneri kanalı ayarlanmamış.")

var oneri = args.join(" ").slice(0)
if (!oneri) {
	message.reply(" 👎  Bir öneri giriniz.")
} else {
	const embed = new Discord.RichEmbed()
	.setTitle("Öneri")
	.addField("Öneren Kullanıcı", `${message.author.tag}`)
	.addField(`Öneri`, oneri)
  .setColor("BLUE")
  abul.send(embed).then(m => {
    m.react("✅")
    m.react("❌")})
}


 } 
 
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
}
exports.help = {
 name: 'öneri',
 description: 's',
 usage: 's'
};