const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("-");

bot.on('ready', function() {
    bot.user.setGame("-help https://discord.gg/xTR66sm");
    console.log("Le bot a bien ete connecte");
});

bot.login("NDM5ODc5NTk0NTc3NzU2MTcw.DcaQ7g.9yK4pgKXI5Ycuu9OCMSakEJc7z8");


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

    if (message.content === prefix + "carla"){
        message.channel.sendMessage("Je m'appelle Carla j'ai 14 ans/ Micro: Blue Yeti/ Cam: WebCam Logitech C922/ Pc: AlienWare 17/ \n Logiciel de montage: SonyVegas Pro 14 \n carlaasmr38@gmail.com");
        console.log("carla effectué");
    }

    if (message.content === prefix + "newvideo"){
        message.channel.sendMessage("Cette commande est en développement /!\ Chaîne de Carla: https://www.youtube.com/channel/UCqFI3r7Rlsdw6AVge-zvKfA ");
        console.log("newvideo effectué");
    }
    
    if (message.content === prefix + "leia"){
        message.reply("Coucou tua ! Mua c'est Leia Organa xD");
        console.log("leia effectué !");
    }

    if (message.content === prefix + "makoas"){
        message.channel.sendMessage("Salut mua c'est Makoas ! :p");
        console.log("makaos effectué");
    }
    
     if (commande ===  " ping " ) {
    // Calcule le ping entre l'envoi d'un message et son édition, ce qui donne une belle latence.
    // Le second ping est une latence moyenne entre le bot et le serveur websocket (sens unique, pas aller-retour)
    const  m  =  wait  message . canal . envoyer ( " Ping? " );
    m . modifier ( ` ! Pong est Latence $ { m . createdTimestamp  - un  message . createdTimestamp } . ms Latence API est $ { Math . tour ( client . ping ) } ms ` );
  }
  
    
});
