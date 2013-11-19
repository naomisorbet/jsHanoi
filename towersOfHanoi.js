"use strict";

(function (root) {
	var Hanoi = root.Hanoi = (root.Hanoi || {});
	var Game = Hanoi.Game = function(){
		
		this.stacks = [[3, 2, 1], [], []]
	}
	
	var readline = require('readline');
	var READER = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});
			
	
	Game.prototype.isValidMove = function(src, dest){
		if (this.stacks[src].length === 0){
			return false;
		}
		else if (this.stacks[dest].length === 0){

			return true;
		}
		else {
			return this.stacks[src][this.stacks[src].length-1] < this.stacks[dest][this.stacks[dest].length-1];
		}
	}
		
	Game.prototype.isWon = function(){
		function checkTower(tower){
			if(tower.length === 3) {
				var subWon = true;
			}
			else if (tower.length < 1){
				subWon = false;
			}
			else{
				for (var i = 0; i < tower.length; i++){
					if (tower[i] != 3 - i){
						var subWon = false;
					}
				}
			}
			
			if (subWon){
				return true;
			}
			else{
				return false;
			}
		}
		return checkTower(this.stacks[1]) || checkTower(this.stacks[2]);
	}
	
	Game.prototype.moveDisc = function(src, dest, numTurns){
		this.stacks[dest].push(this.stacks[src].pop());
		numTurns++
		if (this.isWon()) {
			console.log("You won in " + parseInt(numTurns) + " turns!")
			READER.close()
		}
		else {
			this.playTurn(numTurns)
		}
	}
	
	Game.prototype.playTurn = function(numTurns){
		var that = this;
			this.printRods()
		READER.question("Name your source tower (0, 1, or 2): ", function(response){
			var sourceTower = parseInt(response);
		
			READER.question("Name your destination tower (0, 1, or 2): ", function(response){
				var destTower = parseInt(response);
				if (that.isValidMove(sourceTower, destTower)) {
					that.moveDisc(sourceTower, destTower, numTurns)
				}
				else {
					console.log("Invalid move.")
					that.playTurn();
				}
			});
		
		});
	}
	
	Game.prototype.printRods = function(){
		console.log(this.stacks);
	}
	
		Game.prototype.play = function(){
		console.log("How to play message")
		this.playTurn(0)	

	}	

	return Hanoi.Game
})(this);

var myGame = new this.Hanoi.Game;

myGame.play();









