var inquirer = require("inquirer");
var Word = require("./word.js");
var word = "";

function startGame(){
	console.log("\nGuess the fast food chain!\n");
	word = new Word();
	console.log(word.converted());
	game();
}

function game() {
	inquirer.prompt([
		type: "input",
		name: "userGuess",
		message: "Choose a letter!",
		]).them(function(guess){
			var guess = guess.userGuess;
			console.log(word.checkLetter(guess));
			checkWin(word.hiddenWord, word.attempt);
		})
}