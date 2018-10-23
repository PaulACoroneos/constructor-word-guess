"use strict";

// Load the NPM Package inquirer
let inquirer = require("inquirer");
let Word = require('./Word.js');

//initialize with first word on load
let test = new Word("hello");
let guess = true; 

//Create a "Prompt" with a series of questions.
while(guess) {
  inquirer
    .prompt([
      {
        message: "Guess a letter!",
        name: "letterguess"
      }
    ])
    .then(function(response) {
      test.checkChar(response.letterguess).displayWord();
    });
}

  
