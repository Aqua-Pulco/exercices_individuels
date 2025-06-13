let prenom = 'Beyonce'; //créé une variable prénom, on y met Beyonce.

let nom = prompt ("Comment tu t'appelles ?") // créé une variable nom, on y met ce que le prompt va récupèrer
                                            // on indique a user ce qu'on veut recup via le ("message du prompt")



function sayHello(firstName, hour) { // créé une fonction sayHello qui prend en parametre une string et un number
    let message = `Bonjour ${firstName} !`;  // crée une variable de type string

    if (hour >= 18) { // si le parametre 2 est sup ou egal a 18 alors la variable message dit "bonsoir"
        message = `Bonsoir ${firstName} !`
    }
    document.querySelector('h1').innerText = message; // retourne message à l'adresse doc etc. >dans les balises <h1>
}

sayHello(nom, 13); // et enfin on appelle la fonction sayHello (on pourrait lui envoyer l'heure actuelle en live?? next step)
