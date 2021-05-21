const Discord = require('discord.js');
exports.run = (client, message, args) => {

  if (!message.guild) return;
  if (!message.member.hasPermission("YETKİLİ İD")) return message.reply('Yeterli yetkin yok');
  let guild = message.guild
  let rol = message.mentions.roles.first()  
  let user = message.mentions.members.first() 

  if (!user) return message.reply('Hata mesajınızı yazınız.').catch(console.error);
  if (rol.length < 1) return message.reply('Rol');
user.roles.add(rol)
const embed = new Discord.MessageEmbed()
        .setDescription(`${user} kullanıcısından başarıyla ${rol} rolü verildi!`)
        .setFooter('SİSTEM', client.user.avatarURL())
        .setColor("RANDOM")
        .setTimestamp()
    message.channel.send(embed)

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'rol-ver',
  description: 'İstediğiniz kişiye istediğiniz rolü verir.',
  usage: 'rol-ver [kullanıcı] [@rol]'
};