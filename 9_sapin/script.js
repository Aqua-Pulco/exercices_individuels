
const sapin = [
    "    +",
    "   /|\\",
    "  /*|*\\",
    " /**|**\\",
    "/***|***\\x"
];

function afficherPointeSapin(hauteur) {

    if (isNaN(hauteur) || hauteur < 0 || hauteur > 4) {
        console.log('veuillez renseigner un chiffre entre 0 et 4');
        return
    }
    else
    for  (let i = 0; i < sapin.length; i++) {
        console.log(sapin[i]);
        if (i === hauteur) {
            return
        }

    }
}


afficherPointeSapin(4);



