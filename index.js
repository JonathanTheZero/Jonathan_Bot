const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client(config.token);
const prefix = "?";

console.log("Starting...");

client.on("ready", () => console.log("Bot is ready!"));

client.on("message", async message => {
    if (message.author.bot) return;

    /*if (message.content.match(/jonathan/i)) {
        message.channel.send("Jonathans unite");
    }*/

    if (message.content.match(/(I am|I'm) Jonathan/i)) return message.channel.send("Hi Jonathan, I'm Jonathan.");

    if (message.content.indexOf(prefix) !== 0) return;
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    if (!args || args.length === 0) return;
    const command = args.shift().toLowerCase();
    if (!command) return;

    if (command === "jonathan") return message.reply("Jonathan");

    if (command === "ping") {
        const m = await message.channel.send("Ping?");
        m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
    }

    else if (command === "say") {
        const sayMessage = args.join(" ");
        message.delete().catch(console.log);
        message.channel.send(sayMessage);
    }

    else if (command.match(/origins?/))
        return message.channel.send({ 
            embed: { 
                title: "The story of Jonathania....", 
                thumbnail: { url: "https://cdn.discordapp.com/attachments/691085630771298384/712351191887249519/Jonathania.png" },
                description: "Yet to be added....",
                color: 0xC2171A,
                timestamp: new Date(),
                footer: "Jonathan"
            } 
        });
});

client.login(config.token);