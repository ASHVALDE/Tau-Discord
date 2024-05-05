// Require the necessary discord.js classes
const { joinVoiceChannel } = require('@discordjs/voice');
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent,GatewayIntentBits.GuildVoiceStates] });
const vtube = require("./handlers/vtube")


// When the client is ready, run this code (only once).
// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
// It makes some properties non-nullable.
client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on("messageCreate", function(message) {
    if(message.author.bot){
        return false
    }
    if(message.content[0] != '*' ){
        return false
    }
    const comando = message.content.substring(1)
    
    switch (comando) {
        case "ping":
            message.reply("pong")
            break;
        case "prueba":
            vtube.create(message)
            
            break;
        default:
            break;
    }

  });

// Log in to Discord with your client's token
client.login(token);