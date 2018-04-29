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
    
    {
    "name": "8ball",
    "permissions": "NONE",
    "restriction": "1",
    "actions": [{
        "channel": "0",
        "varName": "",
        "message": "${member} shook an 8-Ball!",
        "storage": "0",
        "varName2": "",
        "name": "Send Message"
    }, {
        "time": "2",
        "measurement": "1",
        "name": "Wait"
    }, {
        "storage": "1",
        "varName": "rnd_num",
        "min": "1",
        "max": "20",
        "name": "Generate Random Number"
    }, {
        "behavior": "0",
        "interpretation": "1",
        "code": "switch (tempVars(\"rnd_num\")) {\n  case 1: msg.channel.send(\"The Magic 8-Ball says - **It is decidedly so**, \" + member + \".\"); break;\n  case 2: msg.channel.send(\"The Magic 8-Ball says - **Without a doubt**, \" + member + \".\"); break;\n  case 3: msg.channel.send(\"The Magic 8-Ball says - **Yes definitely**, \" + member + \".\"); break;\n  case 4: msg.channel.send(\"The Magic 8-Ball says - **You may rely on it**, \" + member + \".\"); break;\n  case 5: msg.channel.send(\"The Magic 8-Ball says - **As I see it, yes**, \" + member + \".\"); break;\n  case 6: msg.channel.send(\"The Magic 8-Ball says - **Most likely**, \" + member + \".\"); break;\n  case 7: msg.channel.send(\"The Magic 8-Ball says - **Outlook good**, \" + member + \".\"); break;\n  case 8: msg.channel.send(\"The Magic 8-Ball says - **Yes**, \" + member + \".\"); break;\n  case 9: msg.channel.send(\"The Magic 8-Ball says - **Signs point to yes**, \" + member + \".\"); break;\n  case 10: msg.channel.send(\"The Magic 8-Ball says - **Reply hazy try again**, \" + member + \".\"); break;\n  case 11: msg.channel.send(\"The Magic 8-Ball says - **Ask again later**, \" + member + \".\"); break;\n  case 12: msg.channel.send(\"The Magic 8-Ball says - **Better not tell you now**, \" + member + \".\"); break;\n  case 13: msg.channel.send(\"The Magic 8-Ball says - **Cannot predict now**, \" + member + \".\"); break;\n  case 14: msg.channel.send(\"The Magic 8-Ball says - **Concentrate and ask again**, \" + member + \".\"); break;\n  case 15: msg.channel.send(\"The Magic 8-Ball says - **Don't count on it**, \" + member + \".\"); break;\n  case 16: msg.channel.send(\"The Magic 8-Ball says - **My reply is no**, \" + member + \".\"); break;\n  case 17: msg.channel.send(\"The Magic 8-Ball says - **My sources say no**, \" + member + \".\"); break;\n  case 18: msg.channel.send(\"The Magic 8-Ball says - **Outlook not so good**, \" + member + \".\"); break;\n  case 19: msg.channel.send(\"The Magic 8-Ball says - **Very doubtful**, \" + member + \".\"); break;\n  default: msg.channel.send(\"The Magic 8-Ball says - **It is certain**, \" + member + \".\"); break;\n}",
        "storage": "0",
        "varName": "",
        "name": "Run Script"
    }]
}
    
});

