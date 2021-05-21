const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
  if(message.author.bot || message.channel.type === "dm") return;
  const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
    let count = 0;
   
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
      const emoji = client.emojis.cache.find(emoji => emoji.name === "tik");
  const arrifentembed = new Discord.MessageEmbed()
  .setColor("black")
  .setAuthor('Bilgi', `${message.author.displayAvatarURL({dynamic:true})}`)
        .addField(`Seslideki Üye Sayısı`, `${count}`)
        .addField(`Toplam Üye Sayısı`, `${message.guild.memberCount}`)
        .setTimestamp()
        .setFooter(``)
  message.channel.send(arrifentembed)
  message.react(emoji)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'say',
  description: 'kullanıcıyı susturur.',
  usage: 'say'
};