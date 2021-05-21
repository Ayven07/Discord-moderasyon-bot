const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("YETKİLİ İD"))
    return message.reply("**Bu Komutu Kullanmaya Yetkin Yok!**");

  if (!message.member.voice.channel)
    return message.reply("**Bir Ses Kanalında Değilsin!**");
  let pixelien = message.mentions.members.first();
  if (!pixelien)
    return message.reply(
      "**Yanına Kimin Gelmesini İstiyor İsen Onu Etiketlemen Gerek!**"
    );
  if (!pixelien.voice.channel)
    return message.reply("**Etiketlenen Kişi Bir Sesli Kanalda Değil!**");

  pixelien.voice.setChannel(message.member.voice.channelID);
  message.channel.send("<@"+pixelien + "> **İsimli Kişi Yanına Taşındı!**");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: "çek"
}