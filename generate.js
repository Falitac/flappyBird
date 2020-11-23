'use strict'

function Generate() {
	this.pipes = [];
	this.pipeWidth = 100;
	this.pipeBetweenHeight = 250;
	this.pipeSpaceBetween = 350;
	this.pipesSize = 6;
	this.vxSpeed = 4;


	this.init = function() {
		for (let i = 0; i < 6; i++) {
			this.pipes.push({
				yPos: 10*Math.random()*((canvas.height - 1.25*this.pipeBetweenHeight)/10) + 50,
				xPos: 3*canvas.width/4+i*this.pipeSpaceBetween
			});
		}
	}

	this.update = function() {
		for (let i = 0; i < this.pipes.length; i++) {
			this.pipes[i].xPos -= this.vxSpeed;
			if(this.pipes[i].xPos < -this.pipeWidth) {
				this.pipes[i].xPos = 5.7*this.pipeSpaceBetween;
				this.pipes[i].yPos = 10*Math.random()*((canvas.height - 1.25*this.pipeBetweenHeight)/10) + 50;
			}
		}
	}

	this.draw = function() {
		for(let i=0;i<this.pipes.length;i++) {
			context.fillStyle = 'hsl(' + 90 + ', 70%, 30%)';
			context.fillRect(this.pipes[i].xPos, 0, this.pipeWidth, this.pipes[i].yPos);
			context.fillRect(this.pipes[i].xPos, this.pipeBetweenHeight+this.pipes[i].yPos, this.pipeWidth, canvas.height-this.pipes[i].yPos);
			context.fill();
		}
	}

	this.checkCollision = function(player) {
		let i = player.level;
			if( this.pipes[i].xPos < player.x + player.width &&
				this.pipes[i].xPos + this.pipeWidth > player.x && !(
				this.pipes[i].yPos < player.y &&
				this.pipes[i].yPos + this.pipeBetweenHeight > player.y + player.height)) {
				return true;
			}
		return false;
	}
}