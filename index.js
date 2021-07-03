const { Composer } = require('micro-bot')

const bot = new Composer()


bot.start((cxt) => {
    cxt.reply("salom men ishlayapman")
});
bot.help((cxt) => {
    cxt.reply("salom sizga qanday yordam kerak")
})

module.exports = bot;
// huhratreyimboyevcoder@gmail.com
// obscure-meadow-83535
// https://obscure-meadow-83535.herokuapp.com/