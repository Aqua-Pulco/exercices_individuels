import latinToMorse from './annexe1.js';
//import morseToLatin from './annexe2.js';

let latincharacterTab = [];

function getLatinCharacterList(texte) {
    console.log(texte);
    let tab = texte.split("");

    return tab
}
latincharacterTab = getLatinCharacterList("Hello, Paris");
console.log(latincharacterTab);


function translateLatinCharacter(char) {
    char = char.toUpperCase()
    if (char in latinToMorse === false) {
       return char 
    }
    return latinToMorse[char];
}

function encode (texte){
  let tab1 =  getLatinCharacterList(texte);
  let tab2 = [];
    for (const el of tab1) {  
      tab2 = `${tab2} ${translateLatinCharacter(el)}`;        
    }
    return tab2;
}
console.log(encode('lalala'));