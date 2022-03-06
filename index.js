const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

let biteyGuildId = '479570018112110593';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  let bitey = client.guilds.cache.get(biteyGuildId);
  
  bitey.channels.cache.forEach((c) => {
    if (c.type === 'GUILD_VOICE') {
      c.members.forEach((m) => {
        console.log(m.user.username);
      });
    }
  });

  // setInterval(() => {

  // }, 5000);

});

client.on('interactionCreate', async interaction => {
  console.log(interaction);
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.login('OTQ4NzYxNDE0MjA4NzI1MDIz.YiAg7A.eTPYjQSOJg9BznU8t-bkdUmMoFU');
