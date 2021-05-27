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












