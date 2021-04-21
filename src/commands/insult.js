module.exports = async (message, args) => {
  if (args[0].toLowerCase() === "insult") {
    console.log(args[1]);
    await message.channel.send(`${args[1]}, you suck`);
  }
};
