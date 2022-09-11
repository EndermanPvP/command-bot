const Discord = require('discord.js');

const prefix = '?'; //Your Bot Prefix

const client = new Discord.Client({
	allowedMenttions: {
		parse: ['users', 'roles'],
		repliedUser: true,

	},
	intents: [
		"GUILDS",
		"GUILD_MESSAGES",
		"GUILD_PRESENCES",
		"GUILD_MEMBERS",
		"GUILD_MESSAGE_REACTIONS",
	],

});

  client.on("ready", () => {
	  console.log("Bot made by EndermanPvP#0001!", "Bot is online.") //Do not remove credits.
  
  })
  
  client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

//================================
//           COMMANDS
//================================

	if (command === 'command') {// Edit "`command`" to your command.
		message.channel.send('The command \`?command\` is working!')
	}
})

//================================
//          BOT TOKEN
//================================

client.login("Your Token")
