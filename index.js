const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = (".");

bot.on('ready', function() {
    bot.user.setGame("Command: .help");
    console.log("Le bot a bien ete connecte");
});

bot.login("Mzg4NzM2NzY2MzU5NjMzOTIx.DQ1VwQ.bBA9lVDyF6G4q33wPkDlfuNUyKY");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n - .insta = Insta de Carla\n - .newvideo = Nouvelle vidéo de Carla ! \n *Ce bot contient des commandes cachées :)*");
        console.log("Help effectué !");
    }

    if (message.content === prefix + "insta"){
        message.channel.sendMessage("Instagram de Carla: carla.asmr");
        console.log("Insta effectué");
    }

    if (message.content === prefix + "fabriquant"){
        message.channel.sendMessage("Ce bot a été crée par MhBurgerKing.");
        console.log("Fabriquant effectué");
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





});

