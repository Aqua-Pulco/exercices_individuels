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
    return tab2;
}
console.log(encode('lalala'));

function getMorse(text) {
    console.log(text)
   let morse =  encode(`${text}`)
   console.log(morse);
}
getMorse('test');

// string = tableau

function decode(morse){
    let morseLetter = morse.split(" ");
    let newTab = [];
    console.log(morseLetter);
    for (let everyLetter of morseLetter){
       newTab = newTab + morseToLatin[everyLetter]
    }
    console.log(newTab);
   }

decode('- . ... -');