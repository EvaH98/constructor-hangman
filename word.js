var Letter = require("./letter.js");
var fastFoods = ["McDonalds", "Taco Bell", "Burger King", "Jack in the Box", "KFC", "Subway", "In n Out"];

var Word = function() {
	this.word = fastFoods[Math.floor(Math.random() * fastFoods.length)];
	this.wordArray = [];
	this.hiddenWord = [];
	this.shownWord = [];
	this.attempt = this.word.split("").length - 2;

	this.converted = function() {
		this.wordArray = this.word.split("");
			for(var i = 0; i < this.wordArray.length; i++){
				this.wordArray[i] = new Letter(this.wordArray[i]);

				if(this.wordArray[i].letter === " "){
					this.hiddenWord.push(this.wordArray[i].letter);	
				}else{
					this.hiddenWord.push(this.wordArray[i].hide());
				}
			}
		this.shownWord = this.hiddenWord.join(" ");
		return this.shownWord;
		};

	this.checkLetter = function(letter){
		var match = false

		for (var i = 0; i < this.wordArray.length; i++){
			if(this.wordArray[i].letter.toLowerCase() === letter){
				match = true;
			}
		}

		if (match){
			for (var j = 0; j <this.wordArray.length; j++){

				if(this.wordArray[j].letter.toLowerCase() === letter){
					this.hiddenWord[j] = this.wordArray[j].letter;
				}
			}

			this.shownWord = this.hiddenWord.join(" ");
			console.log("\nYAY! THAT CORRECT!\n");
		} else {
			this.attempt -= 1;
			console.log("\nSorry...you didn't get it\n");
			console.log("You have " + this.attempt + " attempts remaining\n");	
		}

		return this.shownWord;
	};	
};

module.exports = Word;
