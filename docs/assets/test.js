const Markup = require('telegraf/markup')
const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')

const bot = new Telegraf('5836658333:AAGM2lRF_sDjsxliWs263MW9PElVQj3-cBs')

bot.use(Telegraf.log())

bot.start(function (ctx) {
    ctx.reply('Hello ' + ctx.from.first_name + '!');
});
  
bot.launch()