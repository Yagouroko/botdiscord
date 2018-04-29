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
    
    client . sur ( " guildCreate " , guilde  => {
  // Cet événement se déclenche lorsque le bot rejoint une guilde.
  console . log ( ` nouvelle guilde a rejoint: $ { guilde . nom } (id: $ { guilde . id } .) Cette guilde a $ { guilde . memberCount } ! Les membres ` );
  client . utilisateur . setActivity ( ` Au service de $ { client . guildes . taille } serveurs ` );
});

client . sur ( " guildDelete " , guilde  => {
  // cet événement se déclenche lorsque le bot est retiré d'une guilde.
  console . connecte ( ` je suis retiré de: $ { guilde . nom } (id: $ { guilde . id } ) ` );
  client . utilisateur . setActivity ( ` Au service de $ { client . guildes . taille } serveurs ` );
});


client . on ( " message " , message asynchrone  => { 
  // Cet événement sera exécuté sur chaque message reçu, de n'importe quel canal ou DM.
  
  // C'est une bonne pratique d'ignorer les autres robots. Cela rend également votre bot s'ignorer
  // et ne pas entrer dans une boucle de spam (nous appelons cela "botception").
  si ( un message . auteur . bot ) retour ;
  
  // Bonne pratique pour ignorer tout message qui ne commence pas par notre préfixe,
  // qui est défini dans le fichier de configuration.
  si ( un message . contenu . indexOf ( config . préfixe ) ==!  0 ) retour ;
  
  // Ici nous séparons notre nom "command", et nos "arguments" pour la commande.
  // Par exemple si nous avons le message "+ Dites-vous que c'est la vraie vie?" , nous obtiendrons ce qui suit:
  // commande = dire
  // args = ["Is", "this", "the", "real", "la vie?"]
  const  args  =  message . contenu . tranche ( config . préfixe . longueur ). couper (). split ( /  + / g );
   commande  const =  args . Maj (). toLowerCase ();
  
  // Allons avec quelques exemples de commandes courantes! N'hésitez pas à les supprimer ou à les modifier.
  
  if (commande ===  " ping " ) {
    // Calcule le ping entre l'envoi d'un message et son édition, ce qui donne une belle latence.
    // Le second ping est une latence moyenne entre le bot et le serveur websocket (sens unique, pas aller-retour)
    const  m  =  wait  message . canal . envoyer ( " Ping? " );
    m . modifier ( ` ! Pong est Latence $ { m . createdTimestamp  - un  message . createdTimestamp } . ms Latence API est $ { Math . tour ( client . ping ) } ms ` );
  }
  
  if (commande ===  " dire " ) {
    // fait dire quelque chose au bot et supprime le message. À titre d'exemple, il est ouvert à tous.
    // Pour obtenir le "message" lui-même, nous rejoignons le `args` dans une chaîne avec des espaces:
    const  sayMessage  =  args . rejoindre ( "  " );
    // Ensuite, nous supprimons le message de commande (sournois, non?). La prise ignore juste l'erreur avec une chose mignonne de smiley.
    un message . delete (). catch ( O_o => {});
    // Et nous obtenons le bot pour dire la chose:
    un message . canal . envoyer (sayMessage);
  }
  
  if (commande ===  " kick " ) {
    // Cette commande doit être limitée aux mods et admins. Dans cet exemple, nous codons simplement les noms de rôles.
    // Veuillez lire Array.some () pour comprendre ce bit:
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    si ( ! un message . membres . rôles . certains ( r => [ " Administrateur " , " modérateur " ]. comprend ( r . nom )))
      retour un  message . répondre ( " Désolé, vous n'avez pas les permissions pour l'utiliser! " );
    
    // Vérifions d'abord si nous avons un membre et si nous pouvons les kicker!
    // message.mentions.members est une collection de personnes qui ont été mentionnées, en tant que GuildMembers.
    // Nous pouvons aussi prendre en charge l'obtention du membre par ID, ce qui serait args [0]
    laissez member =  message . mentionne . membres . premier () ||  un message . guilde . membres . get (args [ 0 ]);
    si ( ! membre)
      retour un  message . répondre ( " Veuillez mentionner un membre valide de ce serveur " );
    if ( ! member . kickable )
      retour un  message . répondre ( " Je ne peux pas donner un coup de pied à cet utilisateur, a-t-il un rôle plus important, ai-je des autorisations de coup de pied? " );
    
    // tranche (1) supprime la première partie, qui devrait être la mention ou l'identifiant de l'utilisateur
    // join ('') prend toutes les différentes parties pour en faire une seule chaîne.
    Laissez raison =  args . couper ( 1 ). rejoindre ( '  ' );
    if ( ! reason) reason =  " Aucune raison fournie " ;
    
    // Maintenant, le temps d'un coup de pied rapide dans les noix!
    attend le  membre . coup de pied (raison)
      . catch ( error  =>  message . reply ( ` Sorry $ { message . author } Je n'ai pas pu lancer à cause de: $ { error } ` ));
    un message . réponse ( ` $ { membre . utilisateur . étiquette } a été botté par $ { un message . auteur . tag } parce que: $ { raison } ` );

  }
  
  if (commande ===  " ban " ) {
    // La plupart de cette commande est identique à kick, sauf qu'ici, seuls les administrateurs le feront.
    // Dans le monde réel, les mods pourraient aussi l'interdire, mais ce n'est qu'un exemple, n'est-ce pas? ;)
    si ( ! un message . membres . rôles . certains ( r => [ " Administrateur " ]. comprend ( r . nom )))
      retour un  message . répondre ( " Désolé, vous n'avez pas les permissions pour l'utiliser! " );
    
    laissez member =  message . mentionne . membres . premier ();
    si ( ! membre)
      retour un  message . répondre ( " Veuillez mentionner un membre valide de ce serveur " );
    si ( ! membre . bannable )
      retour un  message . répondre ( " Je ne peux pas interdire cet utilisateur, a-t-il un rôle plus élevé, ai-je des permissions d'interdiction? " );

    Laissez raison =  args . couper ( 1 ). rejoindre ( '  ' );
    if ( ! reason) reason =  " Aucune raison fournie " ;
    
    attend le  membre . interdiction (raison)
      . catch ( error  =>  message . reply ( ` Sorry $ { message . author } Je ne pouvais pas interdire à cause de: $ { error } ` ));
    un message . réponse ( ` $ { membre . utilisateur . balise } a été interdite par $ { un message . auteur . étiquette } parce que: $ { raison } ` );
  }
  
  if (commande ===  " purge " ) {
    // Cette commande supprime tous les messages de tous les utilisateurs du canal, jusqu'à 100.
    
    // obtient le nombre de suppressions, en tant que nombre réel.
    const  deleteCount  =  parseInt (args [ 0 ], 10 );
    
    // Ooooh sympa, conditions combinées. <3
    if ( ! deleteCount || deleteCount <  2  || deleteCount >  100 )
      retour un  message . reply ( " Veuillez indiquer un nombre compris entre 2 et 100 pour le nombre de messages à supprimer " );
    
    // Donc, nous recevons nos messages, et les supprimons. Assez simple, non?
    const  récupéré  =  attendre le  message . canal . fetchMessages ({count : deleteCount});
    un message . canal . bulkDelete (récupéré)
      . catch ( error  =>  message . reply ( ` Impossible de supprimer les messages à cause de: $ { error } ` ));
  }
});

  
    
});
