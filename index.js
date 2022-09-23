const Discord = require('discord.js');
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_PRESENCES", "GUILD_MEMBERS", "GUILD_MESSAGE_REACTIONS"]});

const prefix = '?'; /*The command prefixes.*/
const token = "Token"; /*Entet your token.*/

  client.on("ready", () => {
	  console.log("Bot made by EndermanPvP#0001!"/*Do not remove credits.*/, "Bot is online.", "If a error 'node trace deseption' comes up, simply ignore it. It does not effect the performance in any way.")
  
  })
  
  client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'command'/*The command Trigger e.g. ?command. As shown.*/) {
		message.channel.send('The command \`?command\` is working!') /*Edit the message.*/
	}
});
client.login(token)
