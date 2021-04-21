const insults = [
  "If I throw a stick, will you leave?",
  "You’re a gray sprinkle on a rainbow cupcake.",
  "If your brain was dynamite, there wouldn’t be enough to blow your hat off.",
  "You are more disappointing than an unsalted pretzel.",
  "Light travels faster than sound, which is why you seemed bright until you spoke.",
  "We were happily married for one month, but unfortunately, we’ve been married for 10 years.",
  "Your kid is so annoying he makes his Happy Meal cry.",
  "You have so many gaps in your teeth it looks like your tongue is in jail.",
  "Your secrets are always safe with me. I never even listen when you tell me them.",
  "I’ll never forget the first time we met. But I’ll keep trying.",
];

module.exports = async (message, args) => {
  if (args[0].toLowerCase() === "insult") {
    const randomNum = Math.floor(Math.random() * 10);
    if (!args[1] || args[1][0] !== "<") {
      const authorId = message.author.id;
      await message.channel.send(`<@${authorId}>, ${insults[randomNum]}`);
    } else {
      await message.channel.send(`${args[1]}, ${insults[randomNum]}`);
    }
  }
};
