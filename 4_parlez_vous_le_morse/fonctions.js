import latinToMorse from './annexe1.js';
import morseToLatin from './annexe2.js';

function getCharTab(texte) { // renvoie un tableau
    let tab = texte.split("");
    return tab;
}

function oneCharIntoMorse(char) {  // un caractère uniquement
    const charUp = char.toUpperCase();
    if (!(charUp in latinToMorse)) {
        return '';                      //ATTENTION !!\\ chaine vide !== rien 
    }
    return latinToMorse[charUp]; //va chercher 1corresp morse ds dico pour 1 lettre lat
}

function encode(texte) {
    let tab1 = getCharTab(texte); // transf un texte en tableau // y compris "" !!
    let tab2 = [];
    for (const el of tab1) {
        const elIntoMorse = oneCharIntoMorse(el);
        if (elIntoMorse === "") {
            tab2.push("/");
        }
        else {
            tab2.push(oneCharIntoMorse(el)); // traduire chq el
        }
    }
    tab2 = tab2.join(" "); //met un espace entre chaq el du tab
    return tab2.trim();
}

function getMorseFromString(text) {
    text = text.replaceAll(' ', '/');
    let morse = encode(text);
    return morse;
}

function decode(morse) {
    let morseLetter = morse.split(" "); // des que je rencontre un espace cela definit un el du tab
    let newTab = [];
    for (let everyLetter of morseLetter) {
        if (everyLetter === '/') { //a chaque el du tab
            newTab.push(' ');
        }
        else if (!(everyLetter in morseToLatin)) { // si pas de correspondance :
            alert(`${morse} n'est pas du morse`);
            return `${morse} n'est pas du morse`;
        }
        newTab.push(morseToLatin[everyLetter]); //met dans le tab en attente les instances et separe par un espace
    }
    return newTab.join("").trim(); // renvoi tout.
}

export { getCharTab, oneCharIntoMorse, encode, getMorseFromString, decode };
