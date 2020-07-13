
const fs = require("fs");
const _ = require("underscore");
const moment = require("moment");
const discord = require('discord.js');
const client = new discord.Client();
// store the filenames of all the audio files for sampling later
const audioFiles = fs.readdirSync("./data");

client.on("ready", () => {
   console.log("I'm ready!");
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
                       fs.appendFileSync("log.txt", moment().format("YYYY-MM-DD HH:mm:ss.SSS ") + "AB honor roll all F's you retarded.mp3" + "\n");
                   });
               })
  
}
   // if the sent message was "ping" then respond with "pong"
   if (message.content === "Thank you") {
       message.channel.send("Kanye, Very cool!");

   // if the sent message was "!trump" then play a random trump quote from our data directory
   } 
  else if (message.content === "exec order") {
    message.channel.send("https://images.penguinrandomhouse.com/cover/9781524734398")
   
    } 
   else if (message.content === "#pp play"){ 
      message.channel.send("What the fuck you tryna listen too *niggggaaaaa* :eyes:  http://tiny.cc/ppBot")
       }
       
       if (message.content === "#1") {
     Play("AB honor roll all F's you retarded.mp3")
       }
       if (message.content === "#2") {
          Play("About a week ago.mp3")
       }
        if (message.content === "#3") {
           Play("ITS LIT.mp3")
       }
        if (message.content === "#4") {
           Play("Kyle A Boogie Wit Da Hoodie and Aminés 2017 XXL Freshman Cypher (1).mp3")
       }
        if (message.content === "#5") {
           Play("My names Nino.mp3")
       }
        if (message.content === "#6") {
              Play("Not the Yuttas")
       }
        if (message.content === "#7") {
           Play("Not the Yuttas.mp3")
       }
        if (message.content === "#8") {
           Play("Original Ya Ya Ya YEET! Cx.mp3")
       }
        if (message.content === "#9") {
           Play("Pnb rock I just wanna eat ur pussy Dohonna.mp3")
       }
   if (message.content === "#10") {
      Play("THE JONTRON RANT.mp3")
       }
           if (message.content === "#11") {
              Play("pharogz-cra3y-prod-by-kendox-[AudioTrimmer.com].mp3")
           }
        
       if (message.content === "#help"){
         message.channel.send("Aight so you prolly gonna wanna use -- #pp -- #pp play -- #n (where n is the selction number)" )
       }
    else if (message.content === "#pp") {

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
                       fs.appendFileSync("log.txt", moment().format("YYYY-MM-DD HH:mm:ss.SSS ") + randAudioFile + "\n");
                   });
               })
               .catch(console.log);
       }
    
    }
    
});
client.login(process.env.BOT_TOKEN)
