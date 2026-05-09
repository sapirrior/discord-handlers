Discord.js Command Handlers

Simple and minimal Discord.js command handler templates.

Files

- "cjs/interactionHandler.js"
  
  - Slash command handler

- "cjs/prefixHandler.js"
  
  - Prefix command handler

Features

- Dynamic command loading
- Minimal and readable structure
- Easy to modify
- Beginner friendly

Commands Folder

Default command folder:

./commands

You may change it inside the handler files.

Example Prefix Command
```js
module.exports = {
    name: "ping",

    async execute(message, args) {
        await message.reply("PONG!");
    }
}
```
Example Slash Command
```js
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Bot replies with PONG!"),

    async execute(interaction) {
        await interaction.reply("PONG!");
    }
}
```
Notes

These handlers are intentionally minimal so you can easily understand and extend them yourself.

Coming Soon

- "mjs/"
  - ES Module version of the handlers