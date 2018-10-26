"use strict";

// Load the NPM Package inquirer
var inquirer = require("inquirer");
let Word = require('./Word.js');

//initialize with first word on load
let wordBank = ["hello","world","zebra","giraffe","chupacabra","monkey","sloth"];
//console.log("lol");
let test = new Word(wordBank[Math.floor(Math.random()*wordBank.length)]);
test.displayWord();
let guess = true; 
let guessCount = 0;
let debug = 10;

function game(letter,callback) {
  test.checkChar(letter,function () {
    test.displayWord();
  });
  callback();
}

function gameOver () {
  if(test.guessed) {
    test = new Word(wordBank[Math.floor(Math.random()*wordBank.length)]);
    return test.displayWord(function () {
      gameLoop();
    });
  }
  else {
    return gameLoop();

  }
    
}

function gameLoop () {
    inquirer
    //Create a "Prompt" with a series of questions.
    .prompt([
        {
          message: "Guess a letter!",
          name: "letterguess"
        }
    ])
    .then(function(response) {
      game(response.letterguess,function () {
        gameOver();
      });
    });
}

gameLoop();