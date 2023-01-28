"use strict";
export const __esModule = true;
import { Telegram, Telegraf, Markup } from "telegraf";
var token = '5836658333:AAGM2lRF_sDjsxliWs263MW9PElVQj3-cBs';
var telegram = new Telegram(token);
var bot = new Telegraf(token);
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
    ctx.reply('Keyboard', Markup.inlineKeyboard([
        Markup.button.callback('First option', 'first'),
        Markup.button.callback('Second option', 'second'),
    ]));
});
bot.on('text', function (ctx) {
    ctx.reply('You choose the ' +
        (ctx.message.text === 'first' ? 'First' : 'Second') +
        ' Option!');
});
