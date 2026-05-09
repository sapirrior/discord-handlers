const fs = require('node:fs');
const path = require('node:path');

// You may set this commandsFolder variable to anything you want!
const commandsFolder = "./commands"; // we are using ./commands folder as default and mostly used.
const files = fs.readdirSync(commandsFolder);
client.commands = new Collection() // You must set up the client before making the collection

// The Main part of the handler
for (const file of files) {
    if (!file.endsWith(".js")) continue;
    const filePath = path.join(commandsFolder, file);
    const command = require(filePath);
    
    if ('name' in command && 'execute' in command) {
        client.commands.set(command.name, command);
    } else {
        console.log(`The command at ${filePath} is either missing \'name\' or \'execute\' property or both.\nThe Command is not loaded`);
    }
}

// Example command Structure: commands/ping.js
module.exports = {
    name: "ping",
    
    async execute(message, args) {
        message.reply("PONG!");
    }
}