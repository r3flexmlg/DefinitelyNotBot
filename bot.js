const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'role') {
        let myRole = message.guild.roles.find("name", "tibijczyk");
    	message.reply(myRole.id);
  	}
    
    if (message.content === 'configtest') {
    	message.reply(config.ownerID);
  	}
    
    if (message.content === 'boh') {
        //var server = new Discord.Guild();
        guild.fetchMembers()
          .then(console.log)
          .catch(console.error);
        
  	}
});



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
