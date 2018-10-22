"use strict";

let Letter = require('./Letter.js');

class Word {
    constructor (wordToGuess) {

        wordToGuess = wordToGuess.split('');
        //console.log("word split ",wordToGuess);
        let letter = "";

        this.word = [];

        //create array of letter objects and store in word
        for(let i=0;i<wordToGuess.length;i++) {
            letter = new Letter(wordToGuess[i]);  //pass letter and fact letter isn't guess yet
            this.word.push(letter);
        }
    }

    displayWord() {
        let display = [];
        for(let i=0; i<this.word.length; i++) {
            display.push(this.word[i].revealLetter());
            display.push("  ");
        }
        //return word as single string in CL
        return display.join('');
    }

    checkChar(guessChar) {
        for(let i=0;i<this.word.length;i++)
            this.word[i].checkGuess(guessChar);
    }
}


module.exports = Word;

//test code

// let test = new Word("hello world");

// console.log(test.word);
// console.log(test.displayWord());
// test.checkChar("h");

