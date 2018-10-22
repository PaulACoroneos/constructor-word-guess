"use strict";

class Letter {
    constructor(letter) {
        this.character = letter;
        this.guessed = false;
    }
    checkGuess(userLetter) {
        if(userLetter.toLowerCase() === this.character) {
            this.guessed = true;
           // console.log(this.guessed);
        }
        else {
            this.guessed = false;   //redundant
           // console.log(this.guessed);
        }   
    }

    revealLetter() {
        if(this.guessed) {
           // console.log(this.character);
            return this.character;
        }
        else {
           // console.log("_");
            return "_";
        }
            
    }
}

//test code
// let test = new Letter("a");

// test.checkGuess("a");  
// test.revealLetter();

module.exports = Letter;
    
