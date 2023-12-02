import Discord, { Client, Collection, Events, GatewayIntentBits, REST, Routes } from "discord.js"
import obj from "./config/config.json"
import { createCommands } from "./commands";


const {token, clientId, guildId} = obj


try {
    const client = new Client({intents: [GatewayIntentBits.Guilds] });
    // Construct and prepare an instance of the REST module
    const rest = new REST().setToken(token);
    (async () => await createCommands(client, rest))()
    client.login(token);
    client.once('ready', () => {
        console.log(`Bot conectado como ${client.user!.tag}`)
    });
    
    client.on(Events.InteractionCreate, async interaction => {
        if (!interaction.isChatInputCommand()) return;
        const command = interaction.client.commands.get(interaction.commandName);
        if (!command) {
            console.error(`No command matching ${interaction.commandName} was found.`);
            return;
        }
    
        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            if (interaction.replied || interaction.deferred) {
                await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
            } else {
                await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
            }
        }
    });
    
} catch (err){
    console.error(err)
}