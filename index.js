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
        console.log("Help envoyer !");
    }

    if (message.content === prefix + "discord"){
        message.channel.sendMessage("Le Discord : https://discord.gg/xTR66sm ");
        console.log("Discord envoyer !");
    }

    if (message.content === prefix + "createur"){
        message.channel.sendMessage("Ce bot a été crée par Yagouroko.");
        console.log("Createur envoyer !");
    }
    
    const Discord = require('discord.js');

function avatar(message, bot, prefix) {
     if (message.content.startsWith(prefix + "avatar")) {
    if (message.channel.type === "dm") return;
    
    let user = message.mentions.users.first() ? message.mentions.users.first() : message.author;
    
    var embed = new Discord.RichEmbed()
        .setColor(0xffffff) 
        .setTitle(user.username)
        .setImage(user.avatarURL({size: 2048})) 
        
    message.channel.send(embed);
    
};
}
    
});
