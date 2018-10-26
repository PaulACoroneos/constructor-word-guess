"use strict";

let Letter = require('./Letter.js');

class Word {
    constructor (wordToGuess) {

        wordToGuess = wordToGuess.split('');
        //console.log("word split ",wordToGuess);
        let letter = "";
        this.guessed = false;
        this.word = [];
        this.guessCount =0;

        //create array of letter objects and store in word
        for(let i=0;i<wordToGuess.length;i++) {
            letter = new Letter(wordToGuess[i]);  //pass letter and fact letter isn't guess yet
            this.word.push(letter);
        }
        //console.log("word ",this.word);
    }

    displayWord(callback) {
        let display = [];
        for(let i=0; i<this.word.length; i++) {
            display.push(this.word[i].revealLetter());
            display.push("  ");
        }
        //return word as single string in CL
        //console.log("hi paul");
        //console.log("debug ",display.join(''));
        console.log(display.join(''));
        if(callback) callback();
    }

    checkChar(guessChar,callback) {
        for(let i=0;i<this.word.length;i++) {
            this.word[i].checkGuess(guessChar);
            if(this.word[i].guessed === true) {
                this.guessCount++;
            }
        }
        if (this.guessCount === this.word.length)
            this.guessed = true;
        else
            this.guessCount = 0;
        if(callback) callback();
    }
    
}


module.exports = Word;

//test code

// let test = new Word("hello world");

// console.log(test.word);
// console.log(test.displayWord());
// test.checkChar("h");

