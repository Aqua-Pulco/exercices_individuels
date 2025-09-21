// Le backslash \ n’est pas “un caractère normal” dans une chaîne

// Dans un littéral de chaîne ("...", '...', `...`), \ introduit une séquence d’échappement :

// \" signifie : mets un guillemet " dans la chaîne (et ne termine pas la chaîne).
// \\ signifie : mets un backslash \ dans la chaîne.
// \n, \t… sont des sauts de ligne, tabulations, etc.
// \xHH attend deux hexadécimaux (ex. \x41 = A).
// \uXXXX et \u{...} sont des escapes Unicode.

// Conséquence immédiate : écrire un \ “brut” à la fin d’une chaîne n’est pas autorisé.
// Il va essayer “d’échapper” le guillemet fermant, ce qui rend le littéral invalide.
// \" n’ajoute pas un backslash, mais un guillemet dans la chaîne
// \x commence une seq hexaD. et exige deux chiffres derrière > cela crée une erreur de syntaxe

// ctrl + L selectionne ligne
// alt + up deplace ligne

//METHOD VERIF en negatif
// let n = Number(y)
// if (!Number.isFinite(n) || !Number.isInteger(n) || n < 0 || n > 4)


///////////// --ETAPE 1-- \\\\\\\\\\\\\

const sapinUn = [
    "    +",
    "   /|\\",
    "  /*|*\\",
    " /**|**\\",
    "/***|***\\x"
];

function afficherPointeSapin(hauteur) {
    let num = Number(hauteur)
    if (!Number.isFinite(num) || !Number.isInteger(num) || (num < 0 || num > 4)) {
        return ('veuillez renseigner un chiffre entre 0 et 4');
    }
    else {
        sapinDeux = [];
        for (let i = 0; i < sapinUn.length; i++) {
            sapinDeux.push(sapinUn[i]);
            if (i === num) {
                return sapinDeux.join("\n");
            }
        }
    }
}

// console.log(afficherPointeSapin(5));
// console.log(afficherPointeSapin(4));

///////////// --1.1 ligne d'* -- \\\\\\\\\\\\\

function afficherEtoiles(n) {

    let text = [];

    let num2 = Number(n)
    if (!Number.isFinite(num2) || !Number.isInteger(num2) || num2 <= 0) {
        return (`Vous avez rentré '${n}',\nveuillez renseigner un chiffre entre 1 et ∞`);
    }
    else {
        for (let j = 1; j <= num2; j++) {
            text.push('*');
        }
        let result = text.join("");
        return result;
    }
}

// console.log(afficherEtoiles(2));
// console.log(afficherEtoiles('nZ'));
// console.log(afficherEtoiles(12));


///////////// --1.2 ■ d'* -- \\\\\\\\\\\\\

function afficherRectangle(h, L) {
    if (isNaN(h) || h < 0 || isNaN(L) || L < 0) {
        return (`Vous avez rentré '${h}' et '${L}',\nveuillez renseigner des nombres valides`);
    }
    else {
        let boite = [];
        for (let k = 0; k < h; k++) {
            boite.push(afficherEtoiles(L));
            boite.push("\n");
        }
        const rectangle = boite.join("");
        return rectangle;
    }
}

// console.log(afficherRectangle('5', 5));



///////////// --1.3 ▲ d'* droite -- \\\\\\\\\\\\\


function afficherTriangleDroite(n) {
    let num3 = Number(n)
    if (!Number.isFinite(num3) || !Number.isInteger(num3) || num3 <= 0) {
        return (`Vous avez rentré ${n}\nentrez un nombre valide`)
    }
    else {
        let tab1 = [];
        let tabEtoiles = [];

        //creation du tableau croissant d'etoile
        for (let l = 0; l < num3 - 1; l++) {
            tab1.push('*');
            tabEtoiles.push(tab1.join(""));
        }
        // console.log(tabEtoiles)


        // création du triangle droit complet
        let tab2 = ['\\'];
        for (let m = 0; m < tabEtoiles.length; m++) {
            tab2.push(tabEtoiles[m] + '\\');
        }
        // console.log(tab2)


        //affichge      
        let sortie = [];
        for (let o = 0; o < tab2.length; o++) {
            sortie.push(tab2[o]);
            sortie.push("\n");
        }
        let triangle = sortie.join("");
        return triangle;

    }
}

// console.log(afficherTriangleDroite(4));


///////////// --1.4  ▲ d'* gauche   -- \\\\\\\\\\\\\


function afficherTriangleGauche(n) {

    const num4 = Number(n);
    if (!Number.isFinite(num4) || !Number.isInteger(num4) || num4 <= 0) {
        return `Valeur invalide: ${n}`;
    }
    let tab = [];
    let tabEtoiles = [];
    let ligne1 = [];

    // nombre d'espaces ou de *
    const max = num4 - 1;

    //creation du tableau croissant d'etoile
    for (let p = 0; p < max; p++) {
        tab.push('*');
        tabEtoiles.push(tab.join(""));
    }
    // console.log(tabEtoiles)


    //creation du tableau de /
    let tab1 = [];
    for (let q = 0; q < tabEtoiles.length; q++) {
        tab1.push('/' + tabEtoiles[q])

    }
    // console.log(tab1);


    
    //on crée les espaces de la premiere ligne
    for (let r = 0; r < max; r++) {
        ligne1.push(' ')
    }

    //on crée la partie gauche sans espaces
    let out = [];
    // ici 1ere ligne
    out.push(ligne1.join("") + '/' + '\n');
    // ici le corps
    for (let o = 0; o < tab1.length; o++) {
        ligne1.pop() //on enleve un espace
        out.push(ligne1.join(""));
        out.push(tab1[o]);
        out.push("\n");
    }


    //on affiche
    let triangleGauche = out.join("");
    return triangleGauche;


    // En s'inspirant de la fonction afficherTriangleDroite(), 
    // comment aligner correctement les etoiles sur le bord de droite ?
}




// 1.5 Assemblage et décorations


//        +
//       /|\
//      /*|*\
//     /**|**\
//     /*o|**\
//    /***|***\
//   /**+*|*o**\
//   /****|****\
//  /***o*|**+**\
// /*o*+**|***o**\
//       ###
//       ###
//       ###