// Dependencies
const Discord = require("discord.js");
require("dotenv").config();

// Handler for all commands (index.js)
const commandHandler = require("./commands");

// Create a new Discord client instance
const client = new Discord.Client();

// Terminal message on initialization
client.once("ready", () => {
  console.log("🐵 I AAAAM READY 🐱‍🚀");
  client.user.setActivity("gerg help");
});

// Event listener on message
client.on("message", commandHandler);

// Bot Login
client.login(process.env.BOT_TOKEN);
