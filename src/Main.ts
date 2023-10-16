import * as THREE from 'three';
import { Flag } from './Flag.ts';
import { Galaxy } from './Galaxy.ts';
import { Planet } from './Planet.ts';
import { Player } from './Player.ts';
import { Scene } from './Scene.ts';
import { Utils } from './Utils.ts';
import './style.css';

// Inits
Scene.initScene();

// World Building
let galaxy: Galaxy = new Galaxy(Utils.worldRadius);
galaxy.addBackgroundImg("res/imgs/background.png");
galaxy.addStars(200, "res/3d/MarioStar/scene.gltf");

let sun = new Planet("res/imgs/sun.jpg", 40,
	new THREE.Vector3(0, 0, -600));
sun.addRing(2, 10, null, 0x00BFFF);
sun.addRing(2, 10, null, 0xDC143C);
let flag: Flag = new Flag(60, 36, "res/imgs/flag.png",
			1, 80, 0xFFFFFF);
sun.setFlag(flag);
galaxy.addPlanet(sun);

galaxy.addPlanet(new Planet("res/imgs/sun.jpg", 20,
						new THREE.Vector3(-300, 0, -400)));
galaxy.addPlanet(new Planet("res/imgs/sun.jpg", 1,
						new THREE.Vector3(0, 0, 0)));

let player = new Player(new THREE.Vector3(0, 0, 0),
	0.01, "res/3d/RobotUFO/scene.gltf");
galaxy.setRocket(player);

// Event Listeners
window.addEventListener('mousedown', (event) => {
	if (event.button === 0) Utils.isMouseDown = true;
});
  
window.addEventListener('mouseup', (event) => {
	if (event.button === 0 ) Utils.isMouseDown = false;
});

window.addEventListener('mousemove', (event) => {
	Utils.updateMousePosition(event);
});

window.addEventListener('mousemove', () => {
	let flag = Utils.rayCastFlags(galaxy);
});
  
window.addEventListener('mousemove', () => {
	if (Utils.isMouseDown) {
		let dX = Utils.mousePosition.x - Utils.lastMousePosition.x;
		let dY = Utils.mousePosition.y - Utils.lastMousePosition.y;
	
		const rotationSpeedX = 0.6;
		const rotationSpeedY = 0.6;
	
		Scene.addCameraRotation(new THREE.Vector3(
			dY * rotationSpeedY, dX * rotationSpeedX, 0));
	}
});

window.addEventListener("keydown", function(event) {
	let key = event.key;
	Utils.updateKeyMap(key, true);
});

window.addEventListener("keyup", function(event) {
	let key = event.key;
	Utils.updateKeyMap(key, false);
});

// Main Loop
function animate() {
	requestAnimationFrame(animate);

	galaxy.updateFrame();

	Scene.renderScene();
}

animate();
