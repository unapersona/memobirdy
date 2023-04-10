const config = require('../config');
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(config.telegram.token, { polling: true });

module.exports = {
    bot,
    on(event, callback) {
        console.log(`Registramos evento: ${event}`);
        return bot.on(event, callback);
    },
    send(chatId, msg) {
        bot.sendMessage(chatId, msg);
    },
    async getFile(fileId) {
        return bot.getFileLink(fileId)
    }
}