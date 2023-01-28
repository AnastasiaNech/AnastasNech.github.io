"use strict";
exports.__esModule = true;
var telegraf_1 = require("telegraf");
var token = '5836658333:AAGM2lRF_sDjsxliWs263MW9PElVQj3-cBs';
var telegram = new telegraf_1.Telegram(token);
var bot = new telegraf_1.Telegraf(token);
console.log("TEstRun");
var test = document.getElementById("usercard2");
if (test) {
    test.innerHTML = "TestInput";
}
bot.start(function (ctx) {
    ctx.reply('Hello ' + ctx.from.first_name + '!');
});
bot.help(function (ctx) {
    ctx.reply('Send /start to receive a greeting');
    ctx.reply('Send /keyboard to receive a message with a keyboard');
    ctx.reply('Send /quit to stop the bot');
});
bot.command('quit', function (ctx) {
    // Explicit usage
    ctx.telegram.leaveChat(ctx.message.chat.id);
    // Context shortcut
    ctx.leaveChat();
});
bot.command('keyboard', function (ctx) {
    ctx.reply('Keyboard', telegraf_1.Markup.inlineKeyboard([
        telegraf_1.Markup.button.callback('First option', 'first'),
        telegraf_1.Markup.button.callback('Second option', 'second'),
    ]));
});
bot.on('text', function (ctx) {
    ctx.reply('You choose the ' +
        (ctx.message.text === 'first' ? 'First' : 'Second') +
        ' Option!');
});
