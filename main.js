const Discord = require('discord.js');
const botsettings = require('./botsettings.json')
const client = new Discord.Client({disableEveryone: true});

client.on("ready", async () => {
    console.log('wsp')
    client.user.setActivity('?help');
});

client.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botsettings.prefix;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(message.content === 'hi'){
        return message.channel.send("yooooo wsp")
    }

    if(cmd === `${prefix}bacon`){
        return message.channel.send("It's a sunny Saturday morning and your nostrils fill with the overwhelming tingly smell of sizzling bacon. Your eyes struggle to open after a night's long of sleeping like a rock - you squint at the ceiling, but slowly feel a strong gaze upon you. Your eyes darting around the backyard, because for some reason you were sleeping on the grass, you spot Darren in a 'Kiss the Chef' apron and Spongebob Squarepants boxers as he flips a strip bacon with his spatula. He quickly notices you're up and awake, and launches the balanced breakfast onto your kneecaps.")
    }

    if(cmd === `${prefix}whatislove`){
        return message.channel.send("baby dont hurt me, dont hurt me, no more")
    }

    if(cmd === `${prefix}bye`){
        return message.channel.send("good riddance")
    }

    if(cmd === `${prefix}quote`){
        return message.channel.send(" darren's hot ")
    }

    if(cmd === `${prefix}help`){
        return message.channel.send("no")
    }

    if(message.content === 'age'){
        return message.channel.send("im 22")
    }

    if(message.content === 'height'){
        // Check out Darren's height yoooo
        return message.channel.send("6'0''")
    }

    if(message.content === 'darren do you have a costco membership'){
        // Does Darren have a membership to Costco? Ask him.
        return message.channel.send("yes")
    }

    if (message.content === 'ping') {
        // Send "pong" to the same channel
        message.channel.send('pong');
      }

      if (message.content === 'icon') {
        // Send the user's avatar URL
        return message.reply(message.author.displayAvatarURL());
      }
});

client.on('message', async message => {

    if (!message.guild) return;
  
    if (message.content === 'leave plz') {
      if (message.member.voice.channel) {
        const connection = message.member.voice.channel.leave();
      } else {
        message.reply('dont leave yet idk where to go');
      }
    }

});

client.on('message', async message => {

    if (!message.guild) return;
  
    if (message.content === 'join plz') {
      if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
      } else {
        message.reply('join a voice channel first stinky');
      }
    }

});


client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === '𝓶𝓪𝓽');
  if (!channel) return;
  channel.send(`${member} wsp bro`);
});

client.login(botsettings.token);