const TelegramBot = require('node-telegram-bot-api');
const express = require('express');

// 🔑 Bot Token
const TOKEN = '7790991987:AAFlO6vkatMvLjDkQoEdCAwn5KMeWeY8unk';

// 🌐 Express app (for port binding)
const app = express();
const PORT = process.env.PORT || 3000;

// 🤖 Telegram bot (polling)
const bot = new TelegramBot(TOKEN, { polling: true });

// Emoji list
const emojis = [
  '😀','😂','🤣','😍','😎','🤯','😴','🥳',
  '🔥','💀','👀','🤡','😈','👽','🚀','⚡',
  '❤️','💯','🫡','🙃','😶‍🌫️'
];

// Telegram message handler
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  bot.sendMessage(chatId, randomEmoji);
});

// Health route (VERY IMPORTANT for deploy)
app.get('/', (req, res) => {
  res.send('🤖 Telegram Bot is running...');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
