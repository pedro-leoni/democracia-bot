-- Ejemplo commands-- 
`
import { SlashCommandBuilder } from "discord.js";

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction: any) {
		await interaction.reply('Pong!');
	},
};
`

docs: https://discordjs.guide/creating-your-bot/command-handling.html#executing-commands


sv pruebas: https://discord.gg/QW8fHMumnZ