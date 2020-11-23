'use strict'
var canvas = document.querySelector('.cnv');
var context = canvas.getContext('2d');
var game;

function mainLoop() {
  	context.clearRect(0,0,canvas.width, canvas.height);
  	draw();
  	requestAnimationFrame(mainLoop);
}

function init() {
	canvas.width = innerWidth;
	canvas.height = innerHeight;
	game = new Game();
	game.init();
}

function draw() {
	game.update();
	if(game.gameOverCondition && Key.isDown(82))
		init();
	game.draw();
}

init();
mainLoop();