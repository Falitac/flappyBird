var text = document.querySelector('#text');

var Key = {
  _pressed: {},

  isDown: function(keyCode) {
    return this._pressed[keyCode];
  },
  
  onKeydown: function(event) {
    this._pressed[event.keyCode] = true;
  },
  
  onKeyup: function(event) {
    delete this._pressed[event.keyCode];
  }
};

window.addEventListener('keyup', function(event) { Key.onKeyup(event); }, false);
window.addEventListener('keydown', function(event) { Key.onKeydown(event); }, false);


/*setInterval(()=>{
	text.innerHTML = ''; 
	for(i in Key._pressed){
		text.innerHTML += i + ' ';
	}
},30);
*/