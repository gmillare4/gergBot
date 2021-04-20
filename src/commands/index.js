require("dotenv").config();

const ping = require("./ping");

const guildID = `${process.env.GUILD_ID}`;
const channelID = `${process.env.CHANNEL_ID}`;

const commands = {
  ping,
};

module.exports = async (message) => {
  const args = message.content.split(" ");
  if (args.length == 0 || args[0].toLowerCase() !== "gerg") return;
  if (message.guild.id === guildID) {
    if (message.channel.id === channelID) {
      //console.log(message);
      args.shift();
      if (args[0].toLowerCase() in commands) {
        commands[args[0].toLowerCase()](message, args);
      }
    } else {
      await message.reply("Use the 'gerg-bot' channel you fuck");
    }
  }
};
