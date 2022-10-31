const Discord = require('discord.js');
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_PRESENCES", "GUILD_MEMBERS", "GUILD_MESSAGE_REACTIONS"]});
const prefix = '?';

  client.on("ready", () => {
	  console.log("The but is now online!", "Bot made by https://github.com/EndermanPvP"/*Do not remove credits*/)
  
  })
  
  client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'command') {
		message.channel.send('The command \`?command\` is working!')
	}
});
client.login("Your Bot Token")
