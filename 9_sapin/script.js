
const sapin = [
    "    +",
    "   /|\\",
    "  /*|*\\",
    " /**|**\\",
    "/***|***\\x"
];


function afficherPointeSapin(hauteur) {
    hauteur = hauteur - 1;
    if (!hauteur) {
        console.log('veuillez renseigner un chiffre entre 1 et 4');
    }
    else
        for (let i = 0; i < sapin.length; i++) {

                console.log(sapin[i]);
                if (i===hauteur) {
                    return
                }
            
        }
}


afficherPointeSapin(2);
