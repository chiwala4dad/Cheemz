const fs = require("fs");
const _ = require("underscore");
const moment = require("moment");
const Discord = require('discord.js');
const client = new Discord.Client();

const audioFiles = fs.readdirSync("./data");
 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {
 function Play(fileName) {
          message.member.voiceChannel.join()
               .then(connection => {
                 // play the random audio file
                   const dispatcher = connection.playFile("./data/" + fileName );

                   // disconnect from the voice channel when the quote is over
                   dispatcher.on("end", () => {
                       message.member.voiceChannel.leave();
                       fs.appendFileSync("log.txt", moment().format("YYYY-MM-DD HH:mm:ss.SSS ") + randAudioFile + "\n");
                   });
               })
  
}
 

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
