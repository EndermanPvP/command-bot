const Discord = require('discord.js');
const prefix = '?';
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

  client.on("ready", () => {
	  console.log("Bot made by EndermanPvP#0001!", "Bot is online.")
  
  })
  
  client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'command') {
		message.channel.send('The command \`?command\` is working!')
	}
});

client.login("Your Token")