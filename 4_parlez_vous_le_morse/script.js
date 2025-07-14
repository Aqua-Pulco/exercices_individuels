// NEXT HTML

import { getCharTab, oneCharIntoMorse, encode, getMorseFromString, decode} from './fonctions.js';

console.log(getCharTab("Hello, Paris")); // split une string en array
console.log(oneCharIntoMorse('a'));
console.log("encode lala lala=", encode('lala lala'));
console.log(getMorseFromString("c'est beau la vie"));
console.log("decode =", decode('- . ... - / - . ... - / - . ... -'));
console.log(`decode encode:${decode(encode('ceci est un test'))}`);
console.log("faux morse", decode('...--'));