const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('guildMemberAdd', member => {
	const channel = member.guild.channels.find('name', 'welcomes-and-byes');
	if (!channel) return;
	message.send(`Welcome to the server, ${member}! Be sure to read the rules, and enjoy your stay at this server!`);
})

client.on('guildMemberAdd', member => {
	const channel = member.guild.channels.find('name', 'welcomes-and-byes');
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
	console.log(`[SUCCESS] TBot v${config.ver} is now ready!`);
	setGame();
	client.setInterval(setGame, 200000);
});

client.on("message", function (message) {
	if (message.author.bot) return;
	if (message.channel.type === "dm") return;
	if (message.content.indexOf(config.prefix) !== 0) return;

	let command = message.content.split(" ")[0];
	command = command.slice(config.prefix.length);
	let args = message.content.split(" ").slice(1);
	
	if (command === 'help') {
		var embed = new Discord.RichEmbed()
			.setAuthor(`Commands for ${client.user.username} (TBot v${config.ver})`, client.user.avatarURL)
			.setDescription("All commands must be prefixed with: `" + config.prefix + "`. \nPlease note that TBot is currently bare. If you would like to help us, use tb-git!")
			.addField("General Commands:", "ping, git, avatar, suggest, info")
			.setColor("#03ffee")
			.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL)
			.setTimestamp()
		message.channel.send({ embed });
	}

	if (command === 'ping') {
		message.reply('Pong! :ping_pong:');
	}

	if (command === 'info') {
		var embed = new Discord.RichEmbed()
			.setAuthor("Information", "https://images-ext-2.discordapp.net/external/KLnOX8cIR8Fe6aRozJDuwtMC4NQttUMJu3MQRy2nTvM/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/354594001736957954/b7259f4a3009c964cae30157176bc2ac.png?width=250&height=250")
			.setDescription("This information command will tell you all the information you need about TBot.")
			.addField("Bot Creators/Helpers", "Tyson - Lead Developer of TBot")
			.addField("Why was this bot made and when was this bot made?", "This bot was made on the 21th of September 2017.\nThe bot was made because I have always had a passion to code a great standing public bot; thus I made TBot.")
		message.channel.send({ embed });
	}

	if (command === 'git') {
		message.reply('Want to help contribute to the development of TBot? Here is the link: https://github.com/fun-with-tyson/TBot. Get coding!')
	}

	if (command === 'say') {
		if (message.author.id !== config.ownerID) {
			message.reply(":no_entry: **NOPE!** Sorry buddy, but Tyson is only allow to use this command.")
		} else {
			message.channel.send(args.join(" "));
			message.delete();
		}
	}

	if (command === 'avatar') {
		if (message.mentions.users.first()) {			
			var embed = new Discord.RichEmbed()
				.setTitle(`${message.mentions.users.first().username}'s avatar`)
				.setImage(message.mentions.users.first().displayAvatarURL)
				.setColor("#03ffee")
			message.channel.send({ embed })
		} else {
			var embed = new Discord.RichEmbed()
				.setTitle(`${message.author.username}'s avatar`)
				.setImage(message.author.displayAvatarURL)
				.setColor("#03ffee")
			message.channel.send({ embed })
		}
	}
});

client.login(config.token).catch(function () {
	console.log("[ERROR] Login failed.");
});