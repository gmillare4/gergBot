const Discord = require("discord.js");

require("dotenv").config();

const client = new Discord.Client();

const guildID = `${process.env.GUILD_ID}`;

client.once("ready", () => {
  console.log("🐵 I AAAAM READY 🐱‍🚀");
});

client.on("message", async (message) => {
  if (message.guild.id === guildID) {
    //console.log(message);
    if (message.content.toLowerCase() === "ping") {
      await message.channel.send("pong");
    }
  }
});

client.login(process.env.BOT_TOKEN);
