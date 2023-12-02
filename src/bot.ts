import { Client, GatewayIntentBits } from "discord.js"
import obj from "./config/config.json"
import { createCommands } from "./commands";


const {token, clientId, guildId} = obj


try {
    const client = new Client({intents: [GatewayIntentBits.Guilds] });
    createCommands()
    client.login(token);
    client.once('ready', () => {
        console.log(`Bot conectado como ${client.user!.tag}`)
    });
} catch (err){
    console.error(err)
}