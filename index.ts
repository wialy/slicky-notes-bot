import Telegraf from "telegraf";

const bot = new Telegraf("1067116538:AAES4_lii45gOwBr8AJZSQahOE8bUntDSvY");

bot.start(ctx =>
  ctx.reply(
    `The time is ${new Date().getHours() + ":" + new Date().getMinutes()}`
  )
);
bot.launch();
