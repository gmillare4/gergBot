// Dependencies
require("dotenv").config();

// Secrets
const guildID = `${process.env.GUILD_ID}`;
const channelID = `${process.env.CHANNEL_ID}`;

// Required Commands
const ping = require("./ping");
const insult = require("./insult");
const help = require("./help");

// List of commands
const commands = {
  ping,
  insult,
  help,
};

module.exports = async (message) => {
  const args = message.content.split(" ");
  // Ignore all messages w/o the string "gerg" at the front
  if (args.length == 0 || args[0].toLowerCase() !== "gerg") return;
  if (message.guild.id === guildID) {
    if (message.channel.id === channelID) {
      // Remove "gerg" from arguments
      args.shift();
      // Reply if no arguments are after "gerg"
      if (args.length === 0) {
        await message.reply("what do you want bitch");
        // Run command the command exists
      } else if (args[0].toLowerCase() in commands) {
        commands[args[0].toLowerCase()](message, args);
        // Reply if not a valid command
      } else {
        await message.reply("that's not a command loser");
      }
      // Reply if using the GergBot outside of the gerg-bot channel
    } else {
      await message.reply("use the 'gerg-bot' channel you fuck");
    }
  }
};
