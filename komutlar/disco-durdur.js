const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, msg, args, message) => {

  if (message.author.id != "659133949876109312") return message.reply('Bunu Sadece Sahibim Kullanabilir');

  let discoR = await db.fetch(`discorol_${msg.guild.id}`);
   setInterval(() => {
  msg.guild.roles.find('name', discoR).setColor("DEFAULT");
     }, 0)
msg.channel.send(`Disco Durduruldu!`);
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['disko-durdur'],
  kategori: 'ayarlar',
    permLevel: 4
}

exports.help = {
    name: 'disco-durdur',
    description: 'Disco Durdurur!',
    usage: 'disco-durdur'
}