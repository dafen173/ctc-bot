// ctc-bot

const TelegramBot = require('node-telegram-bot-api');

const TOKEN = '1818383467:AAE0o9-CnjnUF8K2zV2ITz2mrSSJC4qDLsI';

console.log('бот был запущен...')

const debug = require( './helpers' );

const bot = new TelegramBot (TOKEN, {
    polling: {
        interval: 300,
        autoStart: true,
        params: {
            timeout: 10
        }
    }
})


const inlineKeys = [
    [
        {
            text: 'Forward',
            callback_data: 'forward'
        },
        {
            text: 'Reply',
            callback_data: 'reply'
        }
    ], 
    [
        {
            text: 'Edit',
            callback_data: 'edit'
        },
        {
            text: 'Delete',
            callback_data: 'delete'
        }   
    ]
]


bot.on('callback_query', query => {
    const { chat, message_id, text } = query.message

    switch (query.data) {
        case 'forward':
            //куда, откуда, что
            bot.forwardMessage(chat.id, chat.id, message_id)
            break
    }

    bot.answerCallbackQuery ({
        callback_query_id: query.id
    })
})




bot.onText(/\/start/, (msg, [source, match]) => {
    const chatId = msg.chat.id

    bot.sendMessage(chatId, 'Keyboard', {
        reply_markup: {
            inline_keyboard: inlineKeys
        }
    })
})












































