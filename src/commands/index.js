require("dotenv").config();

const guildID = `${process.env.GUILD_ID}`;

module.exports = async (message) => {
  if (message.guild.id === guildID) {
    //console.log(message);
    if (message.content.toLowerCase() === "ping") {
      await message.channel.send("pong");
    }
  }
};
