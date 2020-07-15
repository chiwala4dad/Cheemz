const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});
client.on("message", message => {
  function Play(fileName) {
          message.member.voiceChannel.join()
               .then(connection => {
                 // play the random audio file
                   const dispatcher = connection.playFile("./data/" + fileName );

                   // disconnect from the voice channel when the quote is over
                   dispatcher.on("end", () => {
                       message.member.voiceChannel.leave();
                       
                   });
               })
  
}
 if (message.content === "cheemz") {

       // make sure the user is in a voice channel
       if (message.member.voiceChannel) {

           // join the user's voice channel
           message.member.voiceChannel.join()
               .then(connection => {

                   // get a random audio file from our list
                   const randAudioFile = _.sample(audioFiles);

                   // play the random audio file
                   const dispatcher = connection.playFile("./data/" + randAudioFile);

                   // disconnect from the voice channel when the quote is over
                   dispatcher.on("end", () => {
                       message.member.voiceChannel.leave();
                       
                   });
               })
               
       }
    
    }
});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
