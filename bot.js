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

bot.on("guildMemberRemove", member => {
  member.guild.channels.get('391525603192602634').send(`**${member.user.username}** Has left the Team! Bye Bye `)
});



bot.on("message", msg => {
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
   }
   if (msg.content.startsWith(prefix +'PUBG'))  {
     msg.member.addRole('391639687464222721')
   }

   if (msg.content.startsWith(prefix + 'OW'))  {
     msg.member.addRole('391639844217946113')
   }

   if (msg.content.startsWith(prefix + 'CSGO')) {
     msg.member.addRole('391639455884115978')
   }

   if (msg.content.startsWith(prefix + 'sss')) { //למקרה ו... סני יצא חרא
     msg.member.addRole('391524702000119829')
   }

   if (msg.content.startsWith(prefix + 'steam')) {
     msg.reply('http://steamcommunity.com/groups/BtOfficialTeam')
   }

   if (msg.content.startsWith(prefix + 'invite')) {
     msg.channel.send('טופס קבלה לטים: https://goo.gl/forms/fZnx2O98Nupa0Fbh2')
   }

   if (msg.content.startsWith(prefix + 'donate')) {
     msg.channel.send('קישור לתרומות: https://paypal.me/NNackan/25?_ga=1.215025556.282539034.1512403185')
   }

   if (msg.content.startsWith(prefix + 'ssss')) { //למקרה ו...
     msg.member.removeRole('391524702000119829')
     msg.channel.send('ayyyyyyyy')
   }
});

bot.login(token)
