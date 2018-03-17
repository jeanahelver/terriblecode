import * as THREE from "three";
import {game, init} from "./init.js"
import gamepad from "./gamepad.js"
import  {GLTFLoader}  from "./GLTFLoader.js";
init();
gamepad.init();
//https://www.sitepoint.com/understanding-es6-modules/

let scn = {};
function loadscene() {
	let geometry = new THREE.BoxGeometry(1,1,1);
	let material = new THREE.MeshBasicMaterial({wireframe:true});
	scn.mesh = new THREE.Mesh(geometry, material);
	game.scene.add(scn.mesh);

	game.camera.position.z = 2;
}
loadscene();

var loader = new GLTFLoader();

loader.load(
	// resource URL
	'../src/cutie.gltf', //this isnt loading idk why :S
	// called when the resource is loaded
	function ( gltf ) {

		game.scene.add( gltf.scene );
	

	},
	// called when loading is in progresses
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' +error );

	}
);

function update() {
	game.newtime = performance.now();
	game.dt = (game.newtime - game.oldtime)/100;
	game.oldtime = game.newtime;
	//console.log(dt);
	gamepad.update();

	scn.mesh.rotation.x += 0.1*game.dt;

	game.renderer.render(game.scene, game.camera);
	requestAnimationFrame(update);
}
update();
