require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();

const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

const begTimer = 4500;
const postMeme = 4000;

bot.on('ready', function() {
    console.log("Logged in as " + bot.user.username);
});

bot.on('message', msg => {

    if (msg.content === '}}start') {
      var channel = msg.channel;
      setInterval(() => {
        channel.send("pls beg")
      },45600);
      setInterval(() => {
        channel.send("pls pm")
        setTimeout(() => {
            channel.send('f')
        }, 3000)
      },40500);

      msg.channel.send('Starting to AFK Dank Memer');
      
      
    }
  });