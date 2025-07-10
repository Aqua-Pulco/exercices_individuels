// //TOUT REFAIRE AVEC DE FONCTIONS
// // ON A UN PROBLEM ROGER AVEC Annuler du prompt
// crtl + shift + tab

let total = 50;
let pseudosTab = [];
let numberOfPlayers;


function howManyPlayers() {
    let input = prompt("How many players wants to play?");
    if (input === null) {
        console.log("user leaving the game");

        return null;
    }
    while (isNaN(input) || input < 2 || input > 10) {
        input = prompt("Please enter a number between 2 and 10");
        if (input === null) {
            console.log("user leaving the game");
            return null
        }
    }
    input = parseInt(input);
    console.log(input);
    return numberOfPlayers = input;
}

howManyPlayers();


for (let i = 0; i < numberOfPlayers; i++) {
    const pseudo = prompt(`PLAYER ${i + 1}\nChoose your name`)
    pseudosTab.push(pseudo);
}
console.log(pseudosTab);

function tour(){
for (const element of pseudosTab) {
    let answer = prompt(`${element}, how many matches do you want to take?`);
    if (answer === null) {
        console.log("user leaving the game");
        return null
    }
    total -= answer
    console.log(total);
    
}
return total
}

tour()

console.log(total);