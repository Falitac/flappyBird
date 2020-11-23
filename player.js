'use strict'

function Player(x, y, width, height, hue) {
	this.x = x;
	this.y = y;
	this.vx = 0;
	this.vy = 0;
	this.ax = 0;
	this.ay = 0;
	this.width = width;
	this.height = height;
	this.hue = hue;
	this.angle = 0;
	this.jumpClicked = false;
	this.level = 0;

	this.jumpKeyPressed = function() {
		// [W]/[Space]
		return Key.isDown(87) || Key.isDown(32);
	}

	this.update = function() {
		this.x += this.vx;
		this.y += this.vy;
		this.vx += this.ax;
		this.vy += this.ay+1;
		if(this.jumpKeyPressed() && !this.jumpClicked && !game.gameOverCondition) {
			this.ay = -17;
			this.vy = 0;
			this.jumpClicked = true;
		} else {
			this.ay = 0;
		}
		if(!this.jumpKeyPressed())
			this.jumpClicked = false;
		if(this.y > canvas.height - this.height)
			this.y = canvas.height - this.height;
	}

	this.draw = function() {
		context.fillStyle = 'hsl(' + this.hue + ', 100%, 60%)';
		context.fillRect(this.x, this.y, this.width, this.height);
		context.fill();
	}
}