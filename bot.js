const Discord = require("discord.js");
const token = 'MzkxNTU2MzkxODM3NDk5Mzky.DRatlg.DvM7NLPDi50svzPnyVEdqM6kTc0';
const prefix = '#';

var bot = new Discord.Client();



bot.on("ready", () => {
  console.log('online!')

bot.user.setGame('B2ForEver - beta')
});

bot.on("guildMemberAdd", member => {
  if (member.guild.id === '391521978634469386')
  member.guild.channels.get('391525603192602634').send(`**${member.user.username}** Has joined to the Team! Conagratz`)
});

bot.on("guildMemberRemove", (member) => {
  member.guild.channels.get('391525603192602634').send(`**${member.user.username}** Has left the Team! Bye Bye `)
});



bot.on("message", (msg, member, user, username) => {
  if (msg.content.startsWith(prefix + 'ServerInfo')) {
    msg.channel.send({embed:{
      title: 'ServerInfo',
      description: 'The is offical server of the Team!',
      color: 0xFFD800
    }});
  }

   if (msg.content.startsWith(prefix +'TeamInfo')) {
     msg.channel.send({embed:{
       title: 'TeamInfo',
       description: 'B2 is an Official Gaming Team!',
       color: 0xFFD800
     }});
   }

   if (msg.content.startsWith(prefix + 'RL')) {
     msg.member.addRole('391639199755010059')
     msg.channel.send('```u got rocket league clan!```')
   }
   if (msg.content.startsWith(prefix +'PUBG'))  {
     msg.member.addRole('391639687464222721')
     msg.channel.send('```u got Player Unknown BattleGround clan!```')
   }

   if (msg.content.startsWith(prefix + 'OW'))  {
     msg.member.addRole('391639844217946113')
     msg.channel.send('```u got OverWatch clan!```')
   }

   if (msg.content.startsWith(prefix + 'CSGO')) {
     msg.member.addRole('391639455884115978')
     msg.channel.send('```u got CounterStrikeGlobalOffensive clan!```')
   }

   if (msg.content.startsWith(prefix + 'RAINBOW')) {
     msg.member.addRole('391966178655862795')
     msg.channel.send('```u got RainbowSixSiege clan!```')
   }

   if (msg.content.startsWith(prefix + 'Fortnite')) {
     msg.member.addRole('391640006466207755')
     msg.channel.send('```u got Fortnite clan!```')
   }

   if (msg.content.startsWith(prefix + 'sss')) { //למקרה ו... סני יצא חרא
     msg.member.addRole('391524702000119829')
   }

   if (msg.content.startsWith(prefix + 'steam')) {
     msg.reply('http://steamcommunity.com/groups/BtOfficialTeam')
   }

   if (msg.content.startsWith(prefix + 'invite')) {
     msg.channel.send('טופס קבלה לטים: https://docs.google.com/forms/d/e/1FAIpQLScY2Y6eN2VHTU2IQfVwa1IHK3dU0PrIKUGdDDrEWE_OEJPSXg/viewform')
   }

   if (msg.content.startsWith(prefix + 'donate')) {
     msg.channel.send('קישור לתרומות: https://paypal.me/NNackan/25?_ga=1.215025556.282539034.1512403185')
   }

   if (msg.content.startsWith(prefix + 'ssss')) { //למקרה ו...
     msg.member.removeRole('391524702000119829')
   }
});

bot.login(token)
