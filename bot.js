const Discord = require('discord.js');
const client = new Discord.Client()

<<<<<<< HEAD
<<<<<<< HEAD
var prefix = "tb-";
var ver = "0.2";

client.on('guildMemberAdd', member => {
	const channel = member.guild.channels.find('name', 't-bot-welcomes');
=======
var prefix = "tbt-";
var ver = "0.3";

client.on('guildMemberAdd', member => {
=======
 client.on('guildMemberAdd', member => {
>>>>>>> 5108b79b631b11d98db8f5a6a346994fb77d119d
	const channel = member.guild.channels.find('name', 'welcomes-and-byes');
>>>>>>> 77b18bd282cbaa74f3f3bccc042c759e73db5cda
	if (!channel) return;
	message.send(`Welcome to the server, ${member}! Be sure to read the rules, and enjoy your stay at this server!`);
})

client.on('guildMemberAdd', member => {
<<<<<<< HEAD
	const channel = member.guild.channels.find('name', 't-bot-welcomes');
=======
	const channel = member.guild.channels.find('name', 'welcomes-and-byes');
>>>>>>> 77b18bd282cbaa74f3f3bccc042c759e73db5cda
	if (!channel) return;
	message.send(`**${member}** just left the server...`);
})
 // Bot user status
function setGame() {
    var games = [
      `${prefix}help | ${client.guilds.size} Servers!`,
	 "Beta Testing Only"
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

<<<<<<< HEAD
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

<<<<<<< HEAD
	if (command === 'help') {
		var embed = new Discord.RichEmbed()
			.setAuthor("Commands for TBot " + ver, "https://images-ext-2.discordapp.net/external/KLnOX8cIR8Fe6aRozJDuwtMC4NQttUMJu3MQRy2nTvM/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/354594001736957954/b7259f4a3009c964cae30157176bc2ac.png?width=250&height=250")
			.setDescription("All commands must be prefixed with: " + "`" + prefix + "`")
			.addField("Disclaimer:", "Please note that TBot is currently bare. If you would like to help us, use `tb-git!`");
			.addField("- General Commands", "ping, git, avatar")
			.addField("- Information", "info")
=======
/*	if (command === 'help') {
		var embed = new Discord.RichEmbed()
			.setAuthor("Commands for TBot " + ver, "https://images-ext-2.discordapp.net/external/KLnOX8cIR8Fe6aRozJDuwtMC4NQttUMJu3MQRy2nTvM/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/354594001736957954/b7259f4a3009c964cae30157176bc2ac.png?width=250&height=250")
			.setDescription("All commands must be prefixed with: " + "`" + prefix + "`")
			.addField("Disclaimer:", "Please note that TBot is currently bare. If you would like to help us, use tb-git!");
			.addField("- General Commands: ping, git, avatar, suggest, info")
>>>>>>> 77b18bd282cbaa74f3f3bccc042c759e73db5cda
			.setColor("#03ffee")
			.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL)
			.setTimestamp()
		message.channel.sendEmbed(embed);
<<<<<<< HEAD
	}

	if (command === 'profileurl') {
=======
	} */
	
	if (command === 'help') {
		message.channel.send("```Commands for TBot 0.3\n" +
							 "All commands must be prefixed with: tb-\n" +
							 "Disclaimer: Please note that TBot is currently bare. If you would like to help us, use tb-git!\n" +
							 "Note: The current help command (which has embed in it) is currently broken it's going to be fixed soon.\n" +
							 "- General Commands: ping, git, avatar, suggest, info```");
	}
		if (command === 'profileurl') {
>>>>>>> 77b18bd282cbaa74f3f3bccc042c759e73db5cda
		message.reply(message.author.avatarURL);
	}

	if (command === 'ping') {
		message.reply('Pong! :ping_pong:');
	}

<<<<<<< HEAD
	if (command === 'information') {
=======
	if (command === 'info') {
>>>>>>> 77b18bd282cbaa74f3f3bccc042c759e73db5cda
		var embed = new Discord.RichEmbed()
			.setAuthor("Information", "https://images-ext-2.discordapp.net/external/KLnOX8cIR8Fe6aRozJDuwtMC4NQttUMJu3MQRy2nTvM/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/354594001736957954/b7259f4a3009c964cae30157176bc2ac.png?width=250&height=250")
			.setDescription("This information command will tell you all the information you need about TBot.")
			.addField("Bot Creators/Helpers", "Tyson - Lead Developer of TBot")
			.addField("Why was this bot made and when was this bot made?", "This bot was made on the 21th of September 2017.\nThe bot was made because I have always had a passion to code a great standing public bot; thus I made TBot.")
		message.channel.sendEmbed(embed);
	}
=======
var prefix = "tbot;"
var ver =  "0.1"

client.login("Token");
>>>>>>> 5108b79b631b11d98db8f5a6a346994fb77d119d

// Bot ready
client.on("ready", () => {
    console.log(`=======================================\n`,
                 `Total Guilds   | ${client.guilds.size}\n`,
                `=======================================\n`);
    
    setGame();
    client.setInterval(setGame, 10000);
})

client.on("message", function(message) {
    
    if (!message.guild) return;

    if (message.author.equals(client.user)) return;

    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");
    var result = args.join(' ');
    
    switch (args[0]) {
        //ping command
        case "ping":
            message.channel.send("pong!")
            break;
			}
})
