const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("-");

bot.on('ready', function() {
    bot.user.setGame("-help https://discord.gg/xTR66sm");
    console.log("Le bot a bien ete connecte");
});

bot.login("NDM5ODc5NTk0NTc3NzU2MTcw.DcdywQ.9O-M3-aHwdfm-U5v5ZsazOglTDQ");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n - -createur = Createur du bot \n - -discord = Le discord du createur du bot*");
        console.log("Help effectué !");
    }

    if (message.content === prefix + "discord"){
        message.channel.sendMessage("Le Discord : https://discord.gg/xTR66sm ");
        console.log("Discord effectué");
    }

    if (message.content === prefix + "createur"){
        message.channel.sendMessage("Ce bot a été crée par Yagouroko.");
        console.log("Createur effectué");
    }
    
});
