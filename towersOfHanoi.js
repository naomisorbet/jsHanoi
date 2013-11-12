(function (root) {
	var Hanoi = root.Hanoi = (root.Hanoi || {});
	var Game = Hanoi.Game = function(){
		
		this.stacks = [[3, 2, 1], [], []]
	}
		
	Game.prototype.play(){
		console.log("How to play message")
		//loop, maybe with an until won
		Game.printRods()
		game.turn
		game.checkForWin  //unitl?  
	}	
		
	Game.prototype.checkForWin = function(){
		if (this.stacks[1] === [3, 2, 1] || this.stacks[2] === [3, 2, 1]){
			console.log("You win!")
		}
	}
	
	Game.prototype.printRods = function(){
		console.log(this.stacks);
	}
	
	Game.prototype.moveDisc = function(src, dest){
		if(dest.length === 0 ||src[src.length-1] < dest[dest.length-1]){
			dest.push(src.pop());
		}
		else{
			console.log("not a valid move")
		}
		this.checkForWin()
	}
	return Hanoi.Game
})(this);

myGame = new this.Hanoi.Game;

myGame.printRods();