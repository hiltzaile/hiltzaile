const Discord = require("discord.js");
const client = new Discord.Client();
const db = require('quick.db');
const {stripIndents} = require('common-tags');
const talkedRecently = new Set();

exports.run = async (client, message, args) => {


if (!message.guild) return;
           if (talkedRecently.has(message.author.id)) {
           return message.reply(" <a:uzaylih_hyr:700331725238173747> `30` Saniye de Bir Kullanabilirsin - " + message.author);
    } else {

           // the user can type the command ... your command code goes here :)

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
        message.delete();
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 30);// Şuan 5 Saniyedir Değiştirebilirsiniz.
    }
  try {
  message.reply("Sunucu Kurulumun İşlemini Onaylamak İçin **`kur`** Yazmalısın\nİşlem 30 Saniye İçerisinde Sona Erecektir.")
.then(m => {
setTimeout(() => {
m.edit('Sunucu Kurulum İşlemi İptal Edildi.')
}, 30000)

})


    .then(() => {

    message.channel
        .awaitMessages (response => response.content === "kur, kur", {
          max: 1,
          time: 30000,
          errors: ["time"]
        })



      .then((collected) => {
 
          message.guild.channels.forEach((kanal) => {
 setTimeout(() => {

          	kanal.delete()

  }, 1000)

        })

          setTimeout(() => {
          message.guild.roles.forEach((rol) => {
          	rol.delete()
          })
      }, 3000)
     


    let every = message.guild.roles.find(r => r.name === '@everyone')





               message.guild.createChannel('●▬▬▬▬๑「📢」๑▬▬▬▬●', 'category').then(bilgi => {
               message.guild.createChannel('●▬▬▬▬๑「🌎」๑▬▬▬▬●', 'category').then(partner => {
               message.guild.createChannel('●▬▬▬▬๑「💬」๑▬▬▬▬●', 'category').then(toplum => {
               message.guild.createChannel('●▬▬▬▬๑「🔊」๑▬▬▬▬●', 'category').then(sesli => {
               message.guild.createChannel('●▬▬▬▬๑「🎤」๑▬▬▬▬●', 'category').then(mzk => {





    setTimeout(() => {
    	message.guild.createChannel('📚│kurallar', 'text').then(kurallar => {
    	kurallar.overwritePermissions(every, {
    		SEND_MESSAGES: false
    	})
setTimeout(() => {
    	kurallar.setParent(bilgi.id)
}, 1000)
    	kurallar.send(stripIndents`
    	
> **Kurallar
> <a:uzayli_kurallar:709099458641657886> Küfür etmek, hakaretlerde bulunmak yasaktır!
> <a:uzayli_kurallar:709099458641657886> Reklam yapmak, link atmak yasaktır!
> <a:uzayli_kurallar:709099458641657886> bot-komut kanalı dışında bir kanalda komut kullanmak yasaktır!
> <a:uzayli_kurallar:709099458641657886> Sesli kanallarda bas açmak vb. hareketler yapmak yasaktır!
> <a:uzayli_kurallar:709099458641657886> Din, dil, ırk ayrımı yapmak yasaktır!
> <a:uzayli_kurallar:709099458641657886> Siyaset hakkında tartışmak, konuşmak yasaktır!
> <a:uzayli_kurallar:709099458641657886> Spam ve flood yapmak yasaktır!
> <a:uzayli_kurallar:709099458641657886> Uygunsuz davranışlarda bulunmak, uygunsuz paylaşımlar yapmak yasaktır!
> <a:uzayli_kurallar:709099458641657886> Kuralları okumamak kesinlikle yasaktır!
> <a:uzayli_kurallar:709099458641657886> Etiketler : @everyone & @here**

    	`)


    })
}, 10000)
  setTimeout(() => {
    	message.guild.createChannel('📢│duyurular', 'text').then(duyurular => {
    	duyurular.overwritePermissions(every, {
    		SEND_MESSAGES: false
    	})
 setTimeout(() => {
    	duyurular.setParent(bilgi.id)
}, 1000)
    })

}, 11000)
  setTimeout(() => {
    	message.guild.createChannel('✅│oylama', 'text').then(oylama => {
    	oylama.overwritePermissions(every, {
    		SEND_MESSAGES: false
    	})
  setTimeout(() => {
    	oylama.setParent(bilgi.id)
}, 1000)
    })
}, 12000)
 setTimeout(() => {
   	message.guild.createChannel('🌎│partner', 'text').then(partners => {
    	partners.overwritePermissions(every, {
    		SEND_MESSAGES: false
    	})
  setTimeout(() => {
    	partners.setParent(partner.id)
}, 1000)
 	    partners.send(stripIndents`
> Destek Sunucumuz Açıldı!
> Davet Linki : https://discord.gg/sJXqTeR
`)
    })
}, 13000)
 setTimeout(() => {
   	message.guild.createChannel('🌎│partner-text', 'text').then(partnertext => {
    	partnertext.overwritePermissions(every, {
    		SEND_MESSAGES: false
    	})
  setTimeout(() => {
    	partnertext.setParent(partner.id)
}, 1000)
    })
}, 14000)
setTimeout(() => {
   	message.guild.createChannel('🌎│partner-şart', 'text').then(partnersart => {
    	partnersart.overwritePermissions(every, {
    		SEND_MESSAGES: false
    	})
  setTimeout(() => {
    	partnersart.setParent(partner.id)
}, 1000)
    })
}, 15000)
setTimeout(() => {
    	message.guild.createChannel('💬│sohbet', 'text').then(sohbet => {
  setTimeout(() => {
    	sohbet.setParent(toplum.id)
}, 1000)
    })
}, 16000)
setTimeout(() => {
    	message.guild.createChannel('🔮│bot-komut', 'text').then(komutlar => {
  setTimeout(() => {
    	komutlar.setParent(toplum.id)
}, 1000)
    })
}, 17000)
setTimeout(() => {
    	message.guild.createChannel('📷│galeri', 'text').then(destek => {
  setTimeout(() => {
    	destek.setParent(toplum.id)
}, 1000)

   
    })
    }, 18000)
 

    setTimeout(() => {
     	message.guild.createChannel('🔊│Sohbet', 'voice').then(shbt => {
 setTimeout(() => {
shbt.setUserLimit(15)
  }, 5000)
   setTimeout(() => {
    	shbt.setParent(sesli.id)
    }, 1000)
    })
    }, 20000)
   setTimeout(() => {
     	message.guild.createChannel('🔊│Sohbet', 'voice').then(shbt2 => {
 setTimeout(() => {
shbt2.setUserLimit(15)
  }, 5000)
 setTimeout(() => {
    	shbt2.setParent(sesli.id)
    }, 1000)
    })
    }, 21000)
   setTimeout(() => {
     	message.guild.createChannel('🔊│Sohbet', 'voice').then(shbt3 => {
 setTimeout(() => {
shbt3.setUserLimit(15)
  }, 5000)
 setTimeout(() => {
    	shbt3.setParent(sesli.id)
    }, 1000)
    })
    }, 22000)

    setTimeout(() => {
    	message.guild.createChannel('🎵│Müzik', 'voice').then(mzk1 => {
 setTimeout(() => {
mzk1.setUserLimit(10)
  }, 5000)
 setTimeout(() => {
    	mzk1.setParent(mzk.id)
    }, 1000)
    })
   }, 23000)
   setTimeout(() => {
    	message.guild.createChannel('🎵│Müzik', 'voice').then(mzk2 => {
 setTimeout(() => {
mzk2.setUserLimit(10)
  }, 5000)
 setTimeout(() => {
    	mzk2.setParent(mzk.id)
    }, 1000)
    })
   }, 24000)
   setTimeout(() => {
    	message.guild.createChannel('🎵│Müzik', 'voice').then(mzk3 => {
 setTimeout(() => {
mzk3.setUserLimit(10)
  }, 5000)
 setTimeout(() => {
    	mzk3.setParent(mzk.id)
    }, 1000)
    })
    }, 25000)
// AFK KATEGORİSİ

   message.guild.createChannel('●▬▬▬▬๑「💤」๑▬▬▬▬●', 'category').then(afk => {
   setTimeout(() => {
    	message.guild.createChannel('💤│AFK', 'voice').then(afkk => {
 setTimeout(() => {
afkk.setUserLimit(99)
  }, 5000)
 setTimeout(() => {
    	afkk.setParent(afk.id)
    }, 2000)
    })
    }, 27000)
})

// MODERASYON KATEGORİSİ

   message.guild.createChannel('●▬▬▬▬๑「🌀」๑▬▬▬▬●', 'category').then(mod => {

setTimeout(() => {
   	message.guild.createChannel('🌀│öneri', 'text').then(onr => {
    	onr.overwritePermissions(every, {
    		SEND_MESSAGES: false
    	})
 setTimeout(() => {
    	onr.setParent(mod.id)
    }, 2000)
 	    onr.send(stripIndents`
 ${message.author} \`.öneri-kanal\` yazarak öneri kanalını ayarlayabilirsin.
`)
     
    })
}, 29000)
setTimeout(() => {
   	message.guild.createChannel('🌀│sayaç', 'text').then(sayac => {
    	sayac.overwritePermissions(every, {
    		SEND_MESSAGES: false
    	})
 setTimeout(() => {
    	sayac.setParent(mod.id)
    }, 2000)
 	    sayac.send(stripIndents`
 ${message.author} \`.sayaç\` yazarak sayacı ayarlayabilirsin.
`)
     
    })
}, 30000)
setTimeout(() => {
   	message.guild.createChannel('🌀│otorol', 'text').then(otoroll => {
    	otoroll.overwritePermissions(every, {
    		SEND_MESSAGES: false
    	})
 setTimeout(() => {
    	otoroll.setParent(mod.id)
    }, 2000)
 	    otoroll.send(stripIndents`
  ${message.author} \`.otorol\` yazarak otorolü ayarlayabilirsin.
`)
    
})
})
    })
}, 31000)


  setTimeout(() => {
    	message.guild.createRole({
        name: '🏆・Kurucu',
        color: 'ff0000',
        permissions: [
            "ADMINISTRATOR",
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES",
    ]
      })
      message.guild.createRole({
        name: '🌠・Yönetim',
        color: '00bdff',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES",
            "KICK_MEMBERS"
    ]
      })
      message.guild.createRole({
        name: '🔮・Moderator',
        color: '00ff08',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES"
    ]
      })
      message.guild.createRole({
      	name: '⚙️・Destek Ekibi',
      	color: 'GREEN',
      	mentionable: true
      }).then(d => {
      db.set(`destekR_${message.guild.id}`, d.id)
    })
      message.guild.createRole({
        name: '💎・Vip',
        color: '00ffb6',
      })
      message.guild.createRole({
        name: '💾・Bot',
        color: 'ff8100',
      })
      message.guild.createRole({
        name: '🍸・Üye',
        color: 'caf7fc',
      }).then(d => { db.set(`otoR_${message.guild.id}`, d.id)})

    const embed = new Discord.RichEmbed()
	.setColor('BLUE')
	.setDescription('İstenilen Kanallar ve Roller Oluşturuldu. Bir Sıkıntı Olduğunda **`.iletişim`** Komudundaki Bilgilerden Ulaşabilirsiniz.')
	message.author.send({embed: embed})
    }, 32000)
        
    
    })})})})})
      
  

        .catch(() => {     
        });
  })
  } catch (err) {
    
  }
  
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['normalsunucukur2','normal-sunucu-kur-2'],
	permLevel: 0,
	kategori: 'moderasyon'
};

exports.help = {
	name: 'normal-sunucu-kur2',
	description: 'Sunucunuzu sıfırlar ve tekrardan botun ayarlarını ayarlayarak gerekli rolleri, kanalları, kategorileri oluşturarak sunucu kurar.',
	usage: ''
};