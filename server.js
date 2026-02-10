const TelegramBot = require('node-telegram-bot-api');

// 🔑 Replace with your bot token
const TOKEN = '7790991987:AAFlO6vkatMvLjDkQoEdCAwn5KMeWeY8unk';

// Create bot (polling mode)
const bot = new TelegramBot(TOKEN, { polling: true });

// Emoji list
const emojis = [
  '😀','😂','🤣','😍','😎','🤯','😴','🥳',
  '🔥','💀','👀','🤡','😈','👽','🚀','⚡',
  '❤️','💯','🫡','🙃','😶‍🌫️'
];

// On any text message
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // Pick random emoji
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

  // Reply
  bot.sendMessage(chatId, randomEmoji);
});

console.log('🤖 Bot is running...');