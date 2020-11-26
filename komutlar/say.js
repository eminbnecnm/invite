const Discord = require('discord.js');
exports.run = async (client, message, args) => {
var tagdakiler = 0;
  let tag = "⦡";
message.guild.members.cache.forEach(member => {
    if(member.user.username.includes(tag)) {
      tagdakiler = tagdakiler+1
    }
  })    
const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
    let count = 0
     let botlar = message.guild.members.cache.filter(m => m.user.bot).size;
    let textChannels = message.guild.channels.cache.filter(m => m.type == "text").size;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  let  çevrimiçi = message.guild.members.cache.filter(m => !m.user.bot && m.user.presence.status !== "offline").size
    const emin  = new Discord.MessageEmbed()
    .setColor("AQUA")
    .setThumbnail(`https://cdn.discordapp.com/attachments/719922694346506378/720984679938916362/giphy-4.gif`)
    .addField(` **Sunucudaki Toplam Üye Sayısı**`,`**\`\`\`${message.guild.memberCount}\`\`\`**`)
        .addField(` **Toplam Çevrimiçi Üye Sayısı**`, `**\`\`\`${çevrimiçi}\`\`\`**`) 
        .addField(`**Seslideki Üye Sayısı**`,`**\`\`\`${count}\`\`\`**`)
        .addField(`**Tagdaki Üye Sayısı**`,`**\`\`\`${tagdakiler}\`\`\`**`)
      .setTitle(`${message.author.tag} - Tarafından Kullanıldı`)
            message.channel.send(emin);

} 

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'say',
    description: 'Say',
    usage: 'say'
}