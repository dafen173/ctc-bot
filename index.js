// ctc-bot

const TelegramBot = require('node-telegram-bot-api');
const debug = require( './helpers' );
const TOKEN = '1818383467:AAFTPSct-_jkXgCIz3eRtdPpTFVVXX0jyrY';

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



bot.on('message', (msg) => {
    
    setTimeout(() => {
        bot.sendMessage(msg.chat.id, 'https://learn.javascript.ru/json')
        }, 4000)
    })


/*
bot.on('message', (msg) => {
    
    const html = `
    <strong>Hello, ${msg.from.first_name}</strong>
    <pre>${debug(msg)}</pre>
    `
    
    bot.sendMessage(msg.chat.id, html, {
        parse_mode: 'HTML'
    })
})
*/
/*
bot.onText (/\/start/, msg => {
    const { id } = msg.chat

    bot.sendMessage(id, debug(msg))
})

bot.onText (/\/help (.+)/, (msg, [source, match]) => {
    const { id } = msg.chat

    bot.sendMessage(id, debug(match))
})
*/
/*
bot.on('message', (msg) => {
    console.log(msg)
    bot.sendMessage(msg.chat.id, 'hello, ' + msg.from.first_name)
})
*/

/*
bot.on('message', msg => {
    const { id } = msg.chat

    bot.sendMessage (id, debug (msg))
    .then(() => {
        console.log('msg has been send')
    })
    .catch((error) => {
        console.error(error);
    })
})
*/






