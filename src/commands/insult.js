module.exports = async (message, args) => {
  if (args[0].toLowerCase() === "insult") {
    await message.channel.send("you suck");
  }
};
