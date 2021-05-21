// ctc-bot

const TelegramBot = require('node-telegram-bot-api');

const TOKEN = '1818383467:AAFTPSct-_jkXgCIz3eRtdPpTFVVXX0jyrY';

const bot = new TelegramBot (TOKEN, {
    polling: true
})

bot.on('message', (msg) => {
    console.log(msg)
    bot.sendMessage(msg.chat.id, 'hello, ' + msg.from.first_name)
})


