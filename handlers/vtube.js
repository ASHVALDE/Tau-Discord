const { joinVoiceChannel } = require('@discordjs/voice');
const { Client, Events, GatewayIntentBits } = require('discord.js');

const create = (message) =>{
    console.log("peticion")
    let vc = message.member.voice.channelId
    const guild = message.member.guild.id
    if(!vc){
        return console.log("El usuario no esta conectado a un canal de voz!!!")
    }
    const connection = joinVoiceChannel({
        channelId: vc,
        guildId: guild,
        adapterCreator: message.member.guild.voiceAdapterCreator,
    });
    connection.receiver.speaking.on('start', (userId) => {
        //actions here
        console.log(userId)
    })
}

module.exports = {
create
}