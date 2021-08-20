const config = require('./config.json')
const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

const { ShardingManager } = require('discord.js');
const shard = new ShardingManager('./bot.js', {
  token: config.token,
  autoSpawn: true
});

shard.spawn(2);

shard.on('launch', shard => console.log(`[SHARD] Shard ${shard.id}`));