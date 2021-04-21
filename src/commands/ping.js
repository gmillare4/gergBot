// Sends a "pong" after user sends a "ping"
module.exports = async (message, args) => {
  if (args[0].toLowerCase() === "ping") {
    await message.channel.send("pong");
  }
};
