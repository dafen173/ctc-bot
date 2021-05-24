// ctc-bot

const TelegramBot = require('node-telegram-bot-api');

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

const debug = require( './helpers' );


bot.on('message', (msg) => {
    
    bot.sendMessage(msg.chat.id, 'Inline keybord', {
       reply_markup: {
           inline_keyboard:[
              [
                {
                    text: 'First',
                    callback_data: '1'
                }
              ],
              [
                {
                    text: 'Second',
                    callback_data: '1'
                } 
              ]
           ]
       }        
    })
})



