

// 1. prompt combien de joueurs si > 2 tu ne peux pas jouer tout.e seul.e = numberOfPlayers/howManyPlayers
// 2. prompt pseudo boucle sur joueurs
// 3. prompt combien d'alumettes player 1 / 2 etc
// 4. fonction : si SE RENSEIGNER SUR LES REGLES DU JEU si allumettes = 0; you win (+reste)

let total = 50;
let usersTab= [];
let userEntry;

do {
    userEntry = prompt("How many players are you ?",)
    userEntry = parseInt(userEntry);
    console.log("dowhile", userEntry);
    while (userEntry < 2) {
        userEntry = prompt("You need to be at least 2, sorry...",);
        userEntry = parseInt(userEntry);
        console.log("while du dowhile", userEntry);
    }
} while (
    isNaN(userEntry)
);







