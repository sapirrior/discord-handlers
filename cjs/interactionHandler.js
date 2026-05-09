const fs = require('node:fs');
const path = require('node:path');

// You can set the folder by yourself which you'll use as command's folder
const commandsFolder = "./commands"; // we set './commands' as default and mostly used.
const files = fs.readdirSync(commandsFolder);
client.commands = new Collection();

// main part of the handler
for (const file of files) {
    if (!file.endsWith(".js")) continue;
    const filePath = path.join(commandsFolder, file);
    const command = require(filePath);
    
    if ('data' in command && 'execute' in command) {
        client.commands.set(command.data.name, command);
    } else {
        console.log(`The command at ${filePath} is missing either \'data\' or \'execute\' property or both.\nCommand from this file is not loaded.`);
    }
}

// Example command structure: ./commands/ping.js
const { SlashCommandBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("bot pings"),
    
    async execute(interaction) {
        await interaction.reply("PONG!")
    }
}