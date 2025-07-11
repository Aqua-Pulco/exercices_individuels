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

function getPseudos() {
    for (let i = 0; i < numberOfPlayers; i++) {
        let pseudo = prompt(`PLAYER ${i + 1}\nChoose your name`)
        if (pseudo === null) {
            console.log("user leaving the game");
            return null;
        }
        pseudosTab.push(pseudo);
    }
    console.log(pseudosTab);
    return pseudosTab;
}

getPseudos();


function tour() {
    for (const element of pseudosTab) {
        let answer = prompt(`${element}, how many matches do you want to take?\n(from 1 to 6)`);
        if (answer === null) {
            console.log("user leaving the game");
            return null;
        }
        answer = parseInt(answer);
        while (answer < 1 || answer > 6) {
            answer = prompt(`${element}, up to 6 matches authorized\n1 is the minimum`);
            if (answer === null) {
                console.log("user leaving the game");
                return null;
            }
            while (isNaN(answer)) {
                answer = prompt(`${element}, you need to enter a number`);
                if (answer === null) {
                    console.log("user leaving the game");
                    return null;
                }
            }

            answer = parseInt(answer);
        }
        total -= answer
        console.log(total);

    }
    return total
}


while (total > 0) {
    tour()
}


console.log(total);