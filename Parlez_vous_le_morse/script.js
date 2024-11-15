// On récupère les éléments HTML

const translateButton = document.getElementById("translate-button");
const translateLatinToMorse = document.getElementById("latin-to-morse");
const translateMorseToLatin = document.getElementById("morse-to-latin");
const resultTranslation = document.getElementById("result");
const resultBis = document.getElementById("result-bis");
const decodeButton = document.getElementById("decode-button");

// On récupère les dictionnaires

const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

const morseToLatin = {
    '-': "T",
    '--': "M",
    '---': "O",
    '--.': "G",
    '--.-': "Q",
    '--..': "Z",
    '-.': "N",
    '-.-': "K",
    '-.--': "Y",
    '-.-.': "C",
    '-..': "D",
    '-..-': "X",
    '-...': "B",
    '.': "E",
    '.-': "A",
    '.--': "W",
    '.---': "J",
    '.--.': "P",
    '.-.': "R",
    '.-..': "L",
    '..': "I",
    '..-': "U",
    '..-.': "F",
    '...': "S",
    '...-': "V",
    '....': "H"
  }

// Les fonctions


// Fonction qui récupère la liste des caractères latins
function getLatinCharacterList(text) {
    let latinCharacterList = [];
    for (let i = 0; i < text.length; i++) {
        latinCharacterList.push(text[i]);
    }
    return latinCharacterList;
}

const result = getLatinCharacterList("HELLO WORLD");
//console.log(result);


// Fonction qui traduit un caractère latin en morse
function translateLatinCharacter(latinCharacter) {
    return latinToMorse[latinCharacter];
}

 const morseCode = translateLatinCharacter("A");
console.log(morseCode);

// Fonction qui encode un texte latin en morse
function encode(latinText) {
    let morseCode = [];
    for (let i = 0; i < latinText.length; i++) {
        let currentCharacter = latinText[i];
        morseCode.push(translateLatinCharacter(currentCharacter));
    }
    return morseCode;
}

const encodedText = encode(latinToMorse);
// console.log(encodedText);

// Fonction qui récupère la liste des caractères morse
function getMorseCharacterList (morseCode) {
    let morseCodeList = []
    for (let i = 0; i < morseCode.length; i++) {
    morseCodeList.push(morseCode[i]);
    }
    
    return morseCodeList;
    
    }

    const morseToLatinTranslate = getMorseCharacterList(morseToLatin);
    console.log(morseToLatinTranslate);

    function translateMorseCharacter(morseCharacter) {
        return morseToLatin[morseCharacter];
    }

const translationMorseToLatin = translateMorseCharacter("....");
// console.log(translationMorseToLatin); 


// Fonction qui traduit un texte en morse en latin
function decode (morseToLatinTranslate){

    let translation = []
    
    for (let i = 0 ; i < morseToLatinTranslate.length; i++) {
   
    translation.push(translateMorseCharacter(morseToLatinTranslate[i]));
    }
console.log(translation);
    return morseToLatinTranslate;

}
console.log(morseToLatinTranslate)
    const translation = decode(morseToLatin);
    //console.log (translation)

    // Ecouteurs d'évènements

    translateButton.addEventListener('click', function() {

        const userInput = translateLatinToMorse.value;
        console.log(userInput);
        const latinCode = translateLatinCharacter(userInput);
        console.log(latinCode);
        resultTranslation.innerHTML = latinCode;
        console.log(latinCode);
    });


    decodeButton.addEventListener('click', function() {
        const userInput = translateMorseToLatin.value;
        console.log(userInput);
        const morseCode = decode(userInput);
        resultBis.innerHTML = morseCode;
        console.log(morseCode);
    });




