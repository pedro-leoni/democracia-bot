//@ts-nocheck
import { Client, Collection, GatewayIntentBits,MessageCollector, Events } from "discord.js"
import obj from "./config/config.json"
import path from "path";
import fs from "fs"


const {token} = obj

export const client = new Client({intents: [GatewayIntentBits.Guilds] });



client.once('ready', () => {
    console.log(`Bot conectado como ${client.user!.tag}`);
    
});

client.login(token);