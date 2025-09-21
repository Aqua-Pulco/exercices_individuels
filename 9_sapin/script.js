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


///////////// --ETAPE 1-- \\\\\\\\\\\\\\

const sapinUn = [
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
        for (let i = 0; i < sapinUn.length; i++) {
            console.log(sapinUn[i]);
            if (i === hauteur) {
                return
            }
        }
}

afficherPointeSapin(5);


///////////// --1.1 -ligne d'* -- \\\\\\\\\\\\\\

function afficherEtoiles(n) {

    let text = [];

    for (i = 1; i <= n; i++) {
        text += '*';    
    }
    console.log(text.trim());
    return
}

afficherEtoiles(2)
afficherEtoiles(5)
