const Discord = require("discord.js");

const exampleEmbed = new Discord.MessageEmbed()
  .setColor("#9E84EE")
  .setTitle("List of Commands")
  //   .setURL("https://discord.js.org/")
  .setAuthor(
    "GergBot",
    "https://raw.githubusercontent.com/gmillare4/Audio-Visualizer/master/assets/audiovis%20headshot%20(1).png",
    "https://github.com/gmillare4/gergBot"
  )
  //   .setDescription("Some description here")
  //   .setThumbnail("https://i.imgur.com/wSTFkRM.png")
  .addFields(
    { name: "Insult", value: "gerg insult <@Person>" },
    { name: "Ping", value: "gerg ping" }
    // { name: "\u200B", value: "\u200B" },
    // { name: "Inline field title", value: "Some value here", inline: true },
    // { name: "Inline field title", value: "Some value here", inline: true }
  );
//   .addField("Inline field title", "Some value here", true)
//   .setImage("https://i.imgur.com/wSTFkRM.png")
//   .setTimestamp()
//   .setFooter("Some footer text here", "https://i.imgur.com/wSTFkRM.png");

module.exports = async (message, args) => {
  if (args[0].toLowerCase() === "help") {
    await message.channel.send(exampleEmbed);
  }
};
