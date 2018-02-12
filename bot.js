const Discord = require("discord.js");

const client = new Discord.Client();

const token = "NDEyNDI1ODA3NDQ1NjIyNzg1.DWKE_Q.JMq7nvyumRH3Et10_9bAoQSqgxo";
//client id: 412425807445622785
//invite with https://discordapp.com/oauth2/authorize?client_id=412425807445622785&scope=bot
client.on("ready", () => {
  console.log("bot connected and ready!");
});

client.on("message", (message) => {
  if((message.content.toLowerCase().includes("vainglory") || message.content.toLowerCase().includes("vain glory")) && !message.author.bot) {
  message.channel.send("vainglory is a potato game");
  //console.log("vainglory is a bad game");
  }
});

client.login(token);
