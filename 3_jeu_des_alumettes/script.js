

// 1. prompt combien de joueurs si > 2 tu ne peux pas jouer tout.e seul.e = numberOfPlayers/howManyPlayers
// 2. prompt pseudo boucle sur joueurs
// 3. prompt combien d'alumettes player 1 / 2 etc
// 4. fonction : si SE RENSEIGNER SUR LES REGLES DU JEU si allumettes = 0; you win (+reste)

let total = 50;
let usersTab = [];
let playersNumber;

do {
    playersNumber = prompt("How many players are you ?",)
    playersNumber = parseInt(playersNumber);
    console.log("dowhile", playersNumber);
    while (playersNumber < 2 || playersNumber > 10) {
        playersNumber = prompt("You need to be at least 2, and max 10 sorry...",);
        playersNumber = parseInt(playersNumber);
        console.log("while du dowhile", playersNumber);
    }
} while (
    isNaN(playersNumber)
);

console.log(usersTab);

for (let i = 0; i < playersNumber; i++){
    const pseudo = prompt(`PLAYER ${i+1}\nEnter a nickname`)
    usersTab.push(pseudo);
}
console.log(usersTab);




