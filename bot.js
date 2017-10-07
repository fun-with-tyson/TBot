const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

var prefix = "tb-";
var ver = "0.2";

client.on('guildMemberAdd', member => {
	const channel = member.guild.channels.find('name', 't-bot-welcomes');
	if (!channel) return;
	message.send(`Welcome to the server, ${member}! Be sure to read the rules, and enjoy your stay at this server!`);
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
	console.log("[SUCCESS] TBot is now ready! Running version " + ver + "!");
	setGame();
	client.setInterval(setGame, 200000);
});

client.on("message", function (message) {
	if (message.author.bot) return;
	if (message.channel.type === "dm") return;
	if (message.content.indexOf(prefix) !== 0) return;
	let command = message.content.split(" ")[0];
	command = command.slice(prefix.length);
	let args = message.content.split(" ").slice(1);

	if (command === 'help') {
		var embed = new Discord.RichEmbed()
			.setAuthor("Commands for TBot " + ver, "https://images-ext-2.discordapp.net/external/KLnOX8cIR8Fe6aRozJDuwtMC4NQttUMJu3MQRy2nTvM/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/354594001736957954/b7259f4a3009c964cae30157176bc2ac.png?width=250&height=250")
			.setDescription("All commands must be prefixed with: " + "`" + prefix + "`")
			.addField("Disclaimer:", "Please note that TBot is currently bare. If you would like to help us, use `tb-git!`");
			.addField("- General Commands", "ping, git, avatar")
			.addField("- Information", "info")
			.setColor("#03ffee")
			.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL)
			.setTimestamp()
		message.channel.sendEmbed(embed);
	}

	if (command === 'profileurl') {
		message.reply(message.author.avatarURL);
	}

	if (command === 'ping') {
		message.reply('Pong! :ping_pong:');
	}

	if (command === 'information') {
		var embed = new Discord.RichEmbed()
			.setAuthor("Information", "https://images-ext-2.discordapp.net/external/KLnOX8cIR8Fe6aRozJDuwtMC4NQttUMJu3MQRy2nTvM/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/354594001736957954/b7259f4a3009c964cae30157176bc2ac.png?width=250&height=250")
			.setDescription("This information command will tell you all the information you need about TBot.")
			.addField("Bot Creators/Helpers", "Tyson - Lead Developer of TBot")
			.addField("Why was this bot made and when was this bot made?", "This bot was made on the 21th of September 2017.\nThe bot was made because I have always had a passion to code a great standing public bot; thus I made TBot.")
		message.channel.sendEmbed(embed);
	}

	if (command === 'git') {
		message.reply('Want to help contribute to the development of TBot? Here is the link: https://github.com/fun-with-tyson/TBot. Get coding!')
	}

	if (command === 'say') {
		if (message.author.id !== config.ownerID)
			message.reply(":no_entry: **NOPE!** Sorry buddy, but Tyson is only allow to use this command.")
		else {
			message.channel.sendMessage(args.join(" "));
			message.delete();
		}
	}
	if (command === 'avatar') {
		if (message.mentions.users.first()) {
			var mentionmembers = message.mentions.members.first()
			var mentionusers = message.mentions.users.first()
			var embed = new Discord.RichEmbed()
				.setImage(mentionusers.displayAvatarURL)
				.setColor("#03ffee")
			message.channel.send({ embed })
		} else {
			var embed = new Discord.RichEmbed()
				.setImage(message.author.displayAvatarURL)
				.setColor("#03ffee")
			message.channel.send({ embed })
		}

	}

	if (command === "suggest") {
		try {
			var title;
			var body;
			var icon = message.author.avatar;
			message.author.createDM(`:wave: Welcome to the TBot suggestion system! This is an easy to suggest things that you want to improve `
				+ `in ${message.guild.name}. The following information *will be recorded.*\n- Your username and discriminator.\n- Time and date of suggestion.n\nIf you do not agree with this, please type ` + "`n` now. Otherwise, please enter `y` to continue.");
			switch (message.content) {
				default:
					message.author.send("Invalid option. Try again.");
					break;
				case "y":
					message.author.send("Okay. Please enter the title of the suggestion.");
					title = message.content;
					if (title != null) {
						message.author.send("Thanks! Now, please enter the body of the suggestion. Be as specfic as you like. But remember: The suggestion is up to the staff at the end.");
						body = message.content;
						if (body != null) {
							message.author.send("And, tada! The suggestion *should* be posted! Thanks for the suggestion and we appreciate your feedback!")
						}
						var author = message.author;
					}
					var embed = new RichEmbed()
						.setAuthor(message.author)
						.setColor("#03ffee")
						.addField(title)
						.addField(body)
						.setFooter(new Date() + `, suggested by ${message.author}`)
					const channel = message.guild.channels.find('name', 'suggestions');
					if (!channel) return;
					message.channel.send({ embed });
					break;
				case "n":
					message.author.send("Aborting.");

			}

		} catch (ex) {

		}
	}

});


client.login(config.token).catch(function () {
	console.log("[ERROR] Login failed.");
});