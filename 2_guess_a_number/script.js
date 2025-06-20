


// Créer une fonction qui demande un nombre à l’utilisateur à l’aide d’un prompteur. 
// (Attention tous les compilateurs en ligne ne permettent pas la prise d’input, prendre celui dans l’énoncé si besoin).
// Stocker sa réponse dans une variable de type adéquat nommée givenNumber.

// const { createElement } = require("react");

const contenant = document.getElementById("renvoi"); // l'adresse de la div est stockée dans la variable contenant


function returnNumber(number) {
    number = prompt("FONCTION returnNumber\nVeuillez entrer un nombre valide, il apparaitra dans la console")
    if(isNaN(number)){
        alert("Le nombre entré en'est pas valide");
        returnNumber(number);
    } 
    else {
    number = parseInt(number);
    console.log(number);}
}
returnNumber();

// Pour le moment nous allons considérer que le nombre à deviner est 22.

//         Écrire une fonction qui prend en paramètre givenNumber et qui se nommera didIWin
//         Si le nombre est plus petit que 22, on affichera à l’utilisateur “Plus grand”.
//         Si le nombre est plus quand que 22 on affichera à l’utilisateur “Plus petit”.
//         Si le nombre est 22 on affichera “Bravo ! Vous avez deviné le nombre”.

//         L’ordre dans lequel vous ferez vos conditions est important, le but est d’exécuter le moins de code possible. Demandez-vous ce
//         qu’il faut vérifier en premier.

//     ⚠️ Attention : le prompt()bloque l’exécution de la page et stoppe l’affichage du rendu. Pour afficher des informations à la suite d’un
//     prompt(), utilisez alert().



function didWin(number) {
    number = prompt("FONCTION didWin\nVeuillez entrer un nombre valide");
    number = parseInt(number);
    if(isNaN(number)){
        alert("Le nombre entré en'est pas valide");
        didWin(number);
    }
    else if(number===22){
        alert("BravoOOo!");
        let titre = document.createElement("h1");
        titre.innerText = `🎰 ${number} était la bonne réponse 🎊`
        contenant.appendChild(titre);
    }
    else if(number>22) {
        alert("plus petit !");
        didWin(number);
    }
    else if(number<22) {
        alert("plus grand !")
        didWin(number);
    } 
}

//         Créer une fonction gamePlay qui gérera vos appels de fonctions et la transmission de votre variable d’une fonction à une autre.
//         Concrètement :
//         Tu vas demander un nombre avec returnNumber()
//         Ce nombre est stocké dans une variable (givenNumber)
//         Ensuite, tu passes cette variable à didWin(givenNumber)


didWin();

function gamePlay(params) {
    
}



