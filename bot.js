const Discord = require('discord.js');
const client = new Discord.Client()

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

var prefix = "tbot;"
var ver =  "0.1"

client.login("Token");

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
