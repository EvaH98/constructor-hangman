var Letter = require("./letter.js");
var fastFoods = ["McDonalds", "Taco Bell", "Burger King", "Jack in the Box", "KFC", "Subway", "In n Out"];

var Word = function() {
	this.word = fastFoods[Math.floor(Math.random() * fastFoods.length)];
	this.wordArray = [];
	this.hiddenWord = [];
	this.shownWord = [];
	this.attempt = this.word.split("").length - 2;
	this.render = function() {
		this.wordArray = this.word.split("");
		for(var i = 0; i < this.wordArray.length; i++){
			this.wordArray[i] = new Letter(this.wordArray[i]);
			if(this.wordArray[i].letter === " "){
				this.hiddenWord.push(this.wordArray[i].letter);	
			}else{
				this.hiddenWord.push(this.wordArray.hide());
			}
		}
	}
	this.shownWord = this.hiddenWord.join(" ");
	return this.shownWord;
};