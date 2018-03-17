import * as THREE from "three";
export var game ={};
export function init() {
	console.log("init");
	game.scene =  new THREE.Scene();
	game.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
	game.renderer = new THREE.WebGLRenderer();
	
	document.getElementById("screen").appendChild(game.renderer.domElement);
	document.getElementById("screen").onclick = function(){
    	let element = document.getElementById("screen")
        if(element.requestFullscreen){ element.requestFullscreen();}
        if(element.webkitRequestFullscreen){ element.webkitRequestFullscreen();}
        if(element.mozRequestFullScreen){ element.mozRequestFullScreen();}
        if(element.msRequestFullscreen){ element.msRequestFullscreen();}
  	};
  	game.width = window.innerWidth;
  	game.height = window.innerHeight;
  	game.renderer.setSize(game.width,game.height);
  	window.addEventListener("resize", function(){
    	game.width = window.innerWidth;
    	game.height = window.innerHeight;
    	game.renderer.setSize(game.width,game.height);
    	game.camera.aspect = game.width/game.height;
    	game.camera.updateProjectionMatrix();
	});

  game.oldtime = 0;
  game.newtime = 0;
  game.dt = 0;
}