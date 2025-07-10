// //TOUT REFAIRE AVEC DE FONCTIONS

// // ON A UN PB ROGER AVEC Annuler du prompt


let total = 50;
let pseudoTab = [];
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


// console.log(pseudoTab);


// for (let i = 0; i < numberOfPlayers; i++) {
//     const pseudo = prompt(`PLAYER ${i + 1}\nChoose your name`)
//     pseudoTab.push(pseudo);
// }
// console.log(pseudoTab);




//     for (let i = 0; i < pseudoTab.length; i++) {
//         let matchesAmount = prompt(`It's your turn ${pseudoTab[i]}!\nHow many matches do you want to remove?\n`);
//         do {
//             matchesAmount = parseInt(matchesAmount);
//             while (matchesAmount > total || matchesAmount > 6 || matchesAmount < 1) {
//                 matchesAmount = prompt(`Oh no\n${pseudoTab[i]}!\nYou can't remove that amount of match.es\nTry again please\n`);
//                 matchesAmount = parseInt(matchesAmount);
//             }
//         } while (isNaN(matchesAmount));

//         console.log("matchesamount", matchesAmount);

//         total = parseInt(total - matchesAmount);
//         console.log(`total`, total);
//     }

