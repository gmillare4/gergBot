// List of insults
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

// Insults you or the person you @
module.exports = async (message, args) => {
  if (args[0].toLowerCase() === "insult") {
    // Generates a number from 0-9 to pick from the array of insults
    const randomNum = Math.floor(Math.random() * 10);
    // Insults you if you don't put any argument or don't @ someone
    if (!args[1] || args[1][0] !== "<") {
      const authorId = message.author.id;
      await message.channel.send(`<@${authorId}>, ${insults[randomNum]}`);
      // Insults the person you @
    } else {
      await message.channel.send(`${args[1]}, ${insults[randomNum]}`);
    }
  }
};
