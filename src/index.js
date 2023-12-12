require("dotenv").config();
const { Client } = require("discord.js");
const eventHandler = require("./modules/handlers/eventHandler");
const config = require("../config.json");
const logger = require("./modules/logger");

const client = new Client({
    intents: 3243773,
    failIfNotExists: false
});

logger.system(`Attempting to start bot..`);

eventHandler(client);

client.login(process.env.TOKEN).catch(e => console.error(e));

module.exports = { client, config };