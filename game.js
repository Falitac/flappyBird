'use strict'

function Game() {
	this.score = 0;
	this.state = 0; // 0 - gra, 1 - menu
	this.player = new Player(canvas.width/2, canvas.height/2, 60, 80, 355);
	this.generate = new Generate();
	this.gameOverCondition = false;

	this.init = function() {
		this.generate.init();
	}

	this.update = function() {
		if(this.player.x > this.generate.pipes[this.player.level].xPos + this.generate.pipeWidth) {
			this.addScore(1);
			this.player.level++;
			if(this.player.level >= this.generate.pipes.length)
				this.player.level = 0;
		}
		if(this.generate.checkCollision(this.player))
			this.gameOver();
		this.player.update();
		this.generate.update();
	}

	this.draw = function() {
		this.generate.draw();
		this.player.draw();
		this.drawScore();
	}

	this.addScore = function(points) {
		this.score += points;
	}

	this.gameOver = function() {
		this.generate.vxSpeed = 0;
		localStorage.setItem('score', this.score);
		this.gameOverCondition = true;
	}

	this.drawScore = function() {
		context.font = "60px PressStart";
		context.textAlign = "start";
		context.fillStyle = "yellow";
		context.fillText('Score: ' + this.score, 30, 80);
		if(this.gameOverCondition) {
			context.textAlign = "center";
			context.font = "500% PressStart";
			context.fillStyle = "red";
			context.fillText('You Died!', canvas.width/2, canvas.height/2);

			context.font = "300% PressStart";
			context.fillStyle = "white";
			let text = "Hit [F5]/[R] to restart!";
			context.fillText(text, canvas.width/2, canvas.height/2 + canvas.height*0.3);
			context.fillStyle = "black";
			context.fillText(text, canvas.width/2, canvas.height/2 + canvas.height*0.3 + 3);
		}
	}
}