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
	{
		type: "input",
		name: "userGuess",
		message: "Choose a letter!"
	}
	]).then(function(guess){
			var guess = guess.userGuess;
			console.log(word.checkLetter(guess));
			checkWin(word.hiddenWord, word.attempt);
	});
}

function question() {
	inquirer.prompt([
	{
		type:"confirm",
		name: "quit",
		message: "Do you wish to quit?"
	}
	]).then(function(answer){
		if(answer.quit === true){
			process.exit();
		} else{
			return startGame();
		}
	});
}

function checkWin(word, attempt){
	var hiddenLetter = word.includes("_");

	if(attempt === 0){
		console.log("\nYou're out! Better luck next time!\n");
		return question();
	} else if(!hiddenLetter){
		console.log("\nYAY!!! YOU WON!!!!\n");
		return question();
	} else{
		game();
	}
}

startGame();