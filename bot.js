const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
   
var prefix = "tb-";
var ver = "0.2";
   
client.on('guildMemberAdd', member => {
const channel = member.guild.channels.find('name', 't-bot-welcomes');
		if (!channel) return;
		message.send(`Welcome to the server hope you have a great time and make sure to read #information or #rules whatever server your on and enjoy your time at this awesome server have fun, ${member}`);
})

client.on('guildMemberAdd', member => {
const channel = member.guild.channels.find('name', 't-bot-welcomes');
		if (!channel) return;
		message.send(`**${member}** just left the server...`);
})


function setGame() {
    var games = [
        "tb-help",
		"the waiting game",
		"Annoying Tyson",
		"being unbreakable"
    ]

    client.user.setPresence({
        status: 'online',
        afk: false,
        game: {
            type: 0,
            name: games[Math.floor(Math.random() * games.length)]
        }
    })
}

client.on('ready', () => {
       console.log("[SUCCESS] TBot is now ready! Running version "+ ver +"!");
	   setGame();
	   client.setInterval(setGame, 200000);
   });

client.on("message", function(message){
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    if (message.content.indexOf(prefix) !== 0) return;
	let command = message.content.split(" ")[0];
	command = command.slice(prefix.length);
	let args = message.content.split(" ").slice(1);
	
	if (command === 'help'){
		var embed = new Discord.RichEmbed()
		.setAuthor("Commands for TBot " + ver, "https://images-ext-2.discordapp.net/external/KLnOX8cIR8Fe6aRozJDuwtMC4NQttUMJu3MQRy2nTvM/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/354594001736957954/b7259f4a3009c964cae30157176bc2ac.png?width=250&height=250")
        .setDescription("My prefix is "+ prefix)
		.addField("Disclaimer:", "Please note that TBot is currently bare if you want to help us type in tb-git")
		.addField("- General Commands", "ping, git", true)
		.addField("- Information", "info", true)
		.setColor("#03ffee")
	    .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL)
        .setTimestamp()
	    message.channel.sendEmbed(embed);
	}
	
    if(command === 'profileurl'){
        message.reply(message.author.avatarURL);
    }

    if(command === 'ping'){
        message.reply('Pong! :ping_pong:');
    }
	
	if(command ==='information'){
		 var embed = new Discord.RichEmbed()
		.setAuthor("Information", "https://images-ext-2.discordapp.net/external/KLnOX8cIR8Fe6aRozJDuwtMC4NQttUMJu3MQRy2nTvM/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/354594001736957954/b7259f4a3009c964cae30157176bc2ac.png?width=250&height=250")
        .setDescription("This information command will tell you all the information you need about TBot")
        .addField("Bot Creators/Helpers", "Alee14-Converting AleeBot 0.0.6's code to TBot\nTyson-Making and developng the Bot")
        .addField("Why was this bot made and when was this bot made", "This bot was made on the 21th of September 2017 the bot was made because i have always wanted to code a great standing public bot and becuase i love coding discord bots and thank Alee for remaking it from AleeBot\'s 0.0.6 code base and he gave me permission to use it.")
		message.channel.sendEmbed(embed);
	}
	
	if(command === 'git'){
		message.reply('Want to help contribute TBot here\'s the link: https://github.com/fun-with-tyson/TBot')
	}
	
	if(command === 'say'){
		if(message.author.id !== config.ownerID)   
		message.reply(":no_entry: **NOPE!** Sorry buddy Tyson is only allow to say this command.") 
		else {
		message.channel.sendMessage(args.join(" "));
		message.delete();
		}
	}
	
	
	
});

 
 client.login (config.token).catch(function() {
       console.log("[ERROR] Login failed.");
   });