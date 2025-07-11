//NEXT les lettres en morse sont séparées par un espace, et les mots par des “/” (slash).
// je ne comprends pas la fin de la question 4
// "Ainsi, créer la fonction getMorseCharacterList ainsi que translateMorseCharacter"
// perso je prefere traduire une phrase en francais en morse.
// et faire l'inverse ensuite
// puis html

import latinToMorse from './annexe1.js';
import morseToLatin from './annexe2.js';

function getLatinCharacterList(texte) {
    // console.log(texte);
    let tab = texte.split("");
    return tab;
}

console.log(getLatinCharacterList("Hello, Paris")); // je peux split une string en array


function translateLatinCharacter(char) { //je peux aller chercher une correspondance dans un dictionnaire pour 1 lettre
    char = char.toUpperCase()
    if (char in latinToMorse === false) {
        return char;
    }
    return latinToMorse[char];
}

function encode(texte) { // je peux transformer un texte en tableau, traduire chaque el et reconstituer une string
    let tab1 = getLatinCharacterList(texte);
    let tab2 = [];
    for (const el of tab1) {
        tab2 = `${tab2} ${translateLatinCharacter(el)}`;
    }
    return tab2.trim();
}
console.log(encode('lalala'));

function getMorseFromString(text) {
    console.log(text)
   let morse =  encode(`${text}`)
   
   return morse
}
console.log(`test getMorseF.>>${getMorseFromString('test')}`);

// string = tableau

function decode(morse){
    let morseLetter = morse.split(" ");
    let newTab = [];
    //console.log(morseLetter);
    for (let everyLetter of morseLetter){
        if (!(everyLetter in morseToLatin)) {
            return `${morse} n'est pas du morse`
        }
            //if () si everyLetter ne figure pas dans dico morseToLatin
        // return qqch comme morse inconnu
       newTab = `${newTab} ${morseToLatin[everyLetter]}`
    }
    return newTab;
   }

console.log(decode('- . ... -'));
console.log(decode(encode('test'))); 
console.log(decode('...--'));
