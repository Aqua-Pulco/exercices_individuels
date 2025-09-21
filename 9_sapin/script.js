
const sapin = [
    "    +",
    "   /|\\",
    "  /*|*\\",
    " /**|**\\",
    "/***|***\\x"
];


function afficherPointeSapin(hauteur) {

    if (!hauteur || hauteur < 1 || hauteur > 4) {
        console.log('veuillez renseigner un chiffre entre 1 et 4');
    }
    else
        for (let i = 0; i < sapin.length; i++) {
            hauteur = hauteur - 1;
            console.log(sapin[i]);
            if (i === hauteur) {
                return
            }

        }
}


afficherPointeSapin(4);

