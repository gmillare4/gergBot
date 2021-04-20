const Discord = require("discord.js");

require("dotenv").config();

const client = new Discord.Client();

client.once("ready", () => {
  console.log("🐵 I AAAAM READY 🐱‍🚀");
});

client.on("message", (message) => {
  if (message.content === "ping") {
    message.channel.send("pong");
  }
});

client.login(process.env.BOT_TOKEN);
