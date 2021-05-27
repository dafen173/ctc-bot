// ctc-bot

const TelegramBot = require('node-telegram-bot-api');

const TOKEN = '1818383467:AAE0o9-CnjnUF8K2zV2ITz2mrSSJC4qDLsI';

console.log('бот был запущен...')


const bot = new TelegramBot (TOKEN, {
    polling: {
        interval: 300,
        autoStart: true,
        params: {
            timeout: 10
        }
    }
})

const debug = require( './helpers' );


bot.on('inline_query', query => {

    const results = []

    for (let i = 0; i < 5; i++) {
        results.push({
            type: 'article',
            id: i.toString(),
            title: 'Title ' + i,
            input_message_content: {
                message_text: `Article #${i+1}`
            }
        })        
    }

    bot.answerInlineQuery(query.id, results, {
        cashe_time: 0
    })

})


