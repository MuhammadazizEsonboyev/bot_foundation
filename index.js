const TelegramBot = require('node-telegram-bot-api');
const token = '6124776526:AAHniq3fDBGPcRJV6AUyE1RG3Rvp60rnPB4';
const bot = new TelegramBot(token, {polling: true});
bot.on("message", (msg) => {
    const chatId = msg.chat.id
    const date = new Date()
    const hour = date.getHours()
    const minute = date.getMinutes()
    if(msg.text === "/start"){
        bot.sendMessage(chatId, "👋Salom " + msg.chat.first_name)
        bot.sendMessage(chatId, "Hozir soat " + hour + " : " + minute)
    }
})


