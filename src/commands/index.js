require("dotenv").config();

const ping = require("./ping");

const guildID = `${process.env.GUILD_ID}`;

const commands = {
  ping,
};

module.exports = async (message) => {
  if (message.guild.id === guildID) {
    const args = message.content.split(" ");
    if (args.length == 0 || args[0].toLowerCase() !== "gerg") return;
    args.shift();
    if (args[0] in commands) {
      commands[args[0]](message, args);
    }
  }
};
