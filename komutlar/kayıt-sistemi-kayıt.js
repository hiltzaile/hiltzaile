const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => { 
 if(message.author.bot || message.channel.type === "dm") return;
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**👎  Bu Komutu Kullanmak İçin __Yönetici__ Yetkisine Sahip Olmalısın.**`)

  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  }  

  let hgmsj = await db.fetch(`codeminghgmsj_${message.guild.id}`)
  let alınacakrol = await db.fetch(`codemingkalınacakrol_${message.guild.id}`)  
let isimsistemi = await db.fetch(`codemingkisim_${message.guild.id}`)
let kayıtkanalı = await db.fetch(`codemingkkanal_${message.guild.id}`)
 let logk = await db.fetch(`codemingklogkanal_${message.guild.id}`)
let verilecekrol = await db.fetch(`codemingkverilecekrol_${message.guild.id}`)  

if(!kayıtkanalı) return
if(message.channel.id !== kayıtkanalı) return message.reply(' 👎  Sadece Kayıt Kanalından Kayıt Olabilirsiniz.').then(mete => mete.delete(7000))
if(message.member.roles.has(verilecekrol)) return message.reply(" 👎  Zaten kayıt olmuşsunuz.")  

if(!isimsistemi)  {
  
 let isim = args[0] 
 let yaş = args[1] 
 
 if(!isim) return message.channel.send(' 👎  Seni kayıt etmem için bir isim girmelisin Örnek: `.kayıt Mahmut 18`').then(mete => mete.delete(7000))
 if(isNaN(yaş)) return message.channel.send(' 👎 Yaş sadece sayılardan oluşabilir.').then(mete => mete.delete(7000))
if(yaş.length > 2) return message.channel.send(" 👎  Yaş max 2 karaketerden oluşabilir.")
message.member.setNickname('['+isim+']['+yaş+']')
if(verilecekrol) message.member.addRole(verilecekrol)
 if(alınacakrol) message.member.removeRole(alınacakrol) 
if(logk) client.channels.get(logk).send("<@!"+message.author.id+'> İçin Kayıt İşlemi Başarı İle Tamamlandı. :clipboard:')
  //eğer alınacak rol verisi varsa o rolü al? h tamam ben 2. nin ifini 1 e eklemisim Jalahakdhaus
  // noldu  en bastaki ifte ! olmucak mi
 /// bura wtf
// mete mc atın rolünü yükseltsene hallettim
} else {
  
 if(!isimsistemi.includes("-yas-")) {
     
 let isim = args[0] 

 
 if(!isim) return message.channel.send(' 👎  Seni kayıt etmem için bir isim girmelisin Örnek: `.kayıt Mahmut`').then(mete => mete.delete(7000))
let risim = isimsistemi.replace("-uye-", isim)
   
   message.member.setNickname(risim)
if(verilecekrol) message.member.addRole(verilecekrol)
 if(alınacakrol) message.member.removeRole(alınacakrol) 
if(logk) client.channels.get(logk).send("<@!"+message.author.id+'> İçin Kayıt İşlemi Başarı İle Tamamlandı. :clipboard:')
   
 } else {
   
   let isim = args[0] 
 let yaş = args[1] 
 
 if(!isim) return message.channel.send('< 👎  Seni kayıt etmem için bir isim girmelisin Örnek: `.kayıt Mahmut 18`').then(mete => mete.delete(7000))
 if(isNaN(yaş)) return message.channel.send(' 👎  Yaş sadece sayılardan oluşabilir.').then(mete => mete.delete(7000))
if(yaş.length > 2) return message.channel.send(" 👎  Yaş max 2 karaketerden oluşabilir.")
let risim = isimsistemi.replace("-uye-", isim).replace("-yas-", yaş)
   message.member.setNickname(risim)
if(verilecekrol) message.member.addRole(verilecekrol)
 if(alınacakrol) message.member.removeRole(alınacakrol) 
if(logk) client.channels.get(logk).send("<@!"+message.author.id+'> İçin Kayıt İşlemi Başarı İle Tamamlandı. :clipboard:') 
   
   // oha lan tahmin ettiğimden kolay oldu jxzhczxc
   // kaç dk oldu
  // 17 dakika 47 saniye zxfjhgsdıfeds 
 }// kanwkenwiaj bitti mi tamami ile
  // bot.js  hg msj ve  sora test okey go go bot.js go
  
  
  
  
}
  
  //okey





};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'kayıt',
  description: 'taslak', 
  usage: 'kayıt'
};