var gamepad ={
	deadzone:0.2,
	init: function() {
		
		document.addEventListener("DOMContentLoaded", function(event) { 
			if ("getGamepads" in navigator) {
				console.log("start")
				window.addEventListener("gamepadconnected", function() {
					console.log("connection event");
				});
				window.addEventListener("gamepaddisconnected", function() {
					console.log("disconnection event");
				});
			}
		});
	},
	
	update: function() {
		if(navigator.getGamepads()[0]){
			let gp = navigator.getGamepads()[0];
			for (var i = 0; i < gp.buttons.length; i++) {
				if(gp.buttons[i].pressed){
					console.log("pressed button " + i);
				}
			}
			if (gp.axes) {
				if(gp.axes[0] <-this.deadzone || gp.axes[0] >this.deadzone) console.log("analog X");
				if(gp.axes[1] <-this.deadzone || gp.axes[1] >this.deadzone) console.log("analog Y");
			}
		}
	},

};

export default gamepad;