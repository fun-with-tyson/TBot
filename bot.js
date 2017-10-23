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

client.login("MzU5OTU4NzY3NTc3NTk1OTA0.DMyvDQ.19lhlZOqXc4xRErAH706MGVgHKY");

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
		//add "commnd, command 
			case "help":
			var embed = new Discord.RichEmbed()
            .setAuthor("Help")
            .setDescription("My Prefix is tbot;")
            .addField("**Normal Commands**", "help, ping, purge, say, embedsay")
            .setColor("#03ffee")
           .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL)
		   .setTimestamp()
        message.author.send({ embed });
		var embed = new Discord.RichEmbed()
            .setAuthor("Help")
            .setDescription("TBots prefix is tbot;")
            .addField("**I have sent you a DM of all of TBots Commands**", "If the DM has not been sent please DM @Tyson or try the command agian")
            .setColor("#03ffee")
          .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL)
		  .setTimestamp()
        message.channel.send({ embed });
		break;
		//Do Not Touch
		case "purge":
		const user = message.mentions.users.first();
const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
if (!amount) return message.reply('Must specify an amount to delete!');
if (!amount && !user) return message.reply('Must specify a user and amount, or just an amount, of messages to purge!');
message.channel.fetchMessages({
 limit: amount,
}).then((messages) => {
 if (user) {
 const filterBy = user ? user.id : Client.user.id;
 messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
 }
 message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
});
break;
// SAY - says anything you want to
case "say":
try {
					if(message.content.length < prefix.length + 4) {
                        message.channel.send("You have to say something")
                        break
                    } else { 
							message.channel.send(message.content.replace(prefix + "say ", ''));
					message.delete();
							}
					} catch(err) {
						message.channel.send(error)
					}
					break;
				//All The Rules of all T servers
				case "trules":
					 if(message.author.id !== "338842973972201472") return;
					 var embed = new Discord.RichEmbed()
            .setAuthor("The rules of T Central and TBot Central")
            .setDescription("If you have any questions please DM @Tyson or @Kaiss")
            .addField("**Rule 1** Respect People", "We don't want insults hurled around on the server.")
            .setColor("#03ffee")
           .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL)
		   .setTimestamp()
        message.author.send({ embed });
					 
			}
})