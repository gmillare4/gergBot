const Discord = require("discord.js");

const exampleEmbed = new Discord.MessageEmbed()
  .setColor("#9E84EE")
  .setTitle("List of Commands")
  .setAuthor(
    "Github",
    "https://raw.githubusercontent.com/gmillare4/gergBot/master/public/GergBot%20Headshot.png",
    "https://github.com/gmillare4/gergBot"
  )
  .addFields(
    { name: "Insult", value: "gerg insult <@person>" },
    { name: "Ping", value: "gerg ping" }
  );

module.exports = async (message, args) => {
  if (args[0].toLowerCase() === "help") {
    await message.channel.send(exampleEmbed);
  }
};
