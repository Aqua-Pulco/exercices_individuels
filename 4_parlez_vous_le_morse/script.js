//NEXT les lettres en morse sont séparées par un espace, et les mots par des “/” (slash).
// je ne comprends pas la fin de la question 4
// "Ainsi, créer la fonction getMorseCharacterList ainsi que translateMorseCharacter"
// perso je prefere traduire une phrase en francais en morse.
// et faire l'inverse ensuite
// puis html

import latinToMorse from './annexe1.js';
import morseToLatin from './annexe2.js';

function getCharTab(texte) { // renvoie un tableau
    let tab = texte.split("");
    return tab;
}

console.log(getCharTab("Hello, Paris")); // split une string en array


function oneCharIntoMorse(char) {  // un caractère uniquement
    const charUp = char.toUpperCase();
    if (!(charUp in latinToMorse)) {
        if (char === ' ') {
            char = '';                          //     → on renvoie la chaîne vide
        }
        return char;
    }
    return latinToMorse[charUp]; //va chercher une corresp m ds un dictionnaire pour 1 lettre
}

function encode(texte) {  
    let tab1 = getCharTab(texte); // transf un texte en tableau,
    let tab2 = [];
    for (const el of tab1) {
        tab2.push(oneCharIntoMorse(el)); // traduire chq el
    }
    console.log(tab2);
    
    tab2 = tab2.join(" "); //et reconstituer un mot en morse
    console.log(tab2);
    return tab2.trim();
}

console.log("encode lala=", encode('lala'));

function getMorseFromString(text) { 
    text = text.replaceAll(' ', '/');
    let morse =  encode(text);
    return morse;
}

console.log(`test getMorseF=${getMorseFromString('test test test')}`);

// string = tableau

function decode(morse){
    let morseLetter = morse.split(" "); // des que je rencontre un espace cela definit un el du tab
    let newTab = []; 
    for (let everyLetter of morseLetter){ 
        if (everyLetter === '/'){ //a chaque el du tab
            newTab.push(' ');
        }
        else if (!(everyLetter in morseToLatin)) { // si pas de correspondance :
            alert (`${morse} n'est pas du morse`);
            return `${morse} n'est pas du morse`;
        }
       newTab.push(morseToLatin[everyLetter]); //met dans le tab en attente les instances et separe par un espace
    }
    return newTab.join("").trim(); // renvoi tout.
   }

console.log(`decode =${decode('- . ... - / - . ... - / - . ... -')}`);
console.log(encode('ceci est un test')); 
// console.log(decode('...--'));
