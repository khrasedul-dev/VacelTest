const {Telegraf} = require('telegraf')


const bot = new Telegraf('5111905236:AAGw-gOxgKWHxBujRAdOh5XhLvyc7k179FA')


bot.start(ctx=>{
    ctx.reply('bot start')
})


bot.launch()
.then(()=>console.log("bot start"))
.catch((e)=>console.log(e))