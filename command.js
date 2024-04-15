const {REST, Routes} = require('discord.js')
const commands = [
    {
      name: 'ping',
      description: 'Replies with Pong!',
    },
    {
        name:'create',
        description:'creates a new short url'
    }
  ];

const rest = new REST({ version: '10' }).setToken(DiscordToken);

(async ()=> {
try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands('clientID'), { 
        body: commands 
    });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();