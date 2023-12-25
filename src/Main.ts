// @ts-ignore
import TWEEN from '@tweenjs/tween.js';
import * as THREE from 'three';
import { Flag } from './Flag.ts';
import { Galaxy } from './Galaxy.ts';
import { LoadingScreen } from './LoadingScreen.ts';
import { MainInit } from './MainInit.ts';
import { Planet } from './Planet.ts';
import { Player } from './Player.ts';
import { Scene } from './Scene.ts';
import { Utils } from './Utils.ts';
import './style.css';

let loaded = false;

// Inits
Scene.initScene();

// World Building
let galaxy: Galaxy = Scene.galaxy;
galaxy.addStars(200, "res/3d/MarioStar/scene.gltf", 1);
// galaxy.addStars(60, "res/3d/Primogem/scene.gltf", 0.04);

const menuFlagAddY = -200;

let kqPosition = new THREE.Vector3(536, 120, 60);
let robotsPVZPosition = new THREE.Vector3(420, 0, -180);
let oregairuPosition = new THREE.Vector3(240, -10, -400);
let bleachPosition = new THREE.Vector3(420, 10, -560);
let glPosition = new THREE.Vector3(60, 160, -440);
let igPosition = new THREE.Vector3(-40, 140, -240);
let fftPosition = new THREE.Vector3(-360, 210, 20);

let kqMenuPosition = new THREE.Vector3(-220,
	Galaxy.getGalaxyModelViewY() + menuFlagAddY, -100);
let robotsPVZMenuPosition = new THREE.Vector3(-220,
	Galaxy.getGalaxyModelViewY() + menuFlagAddY, -32);
let oregairuMenuPosition = new THREE.Vector3(-220,
	Galaxy.getGalaxyModelViewY() + menuFlagAddY, 68);
let bleachMenuPosition = new THREE.Vector3(-220,
	Galaxy.getGalaxyModelViewY() + menuFlagAddY, 168);
let glMenuPosition = new THREE.Vector3(220,
	Galaxy.getGalaxyModelViewY() + menuFlagAddY, -100);
let igMenuPosition = new THREE.Vector3(220,
	Galaxy.getGalaxyModelViewY() + menuFlagAddY, -32);
let fftMenuPosition = new THREE.Vector3(220,
	Galaxy.getGalaxyModelViewY() + menuFlagAddY, 36);

let kqPlanet = new Planet("res/imgs/planets/Planet_Fiery.png", 40,
	kqPosition, 0.6, "red");
// kqPlanet.addRing(2, 10, null, 0x00BFFF);
kqPlanet.addRing(2, 10, "res/imgs/rings/Ring.jpg", null, 1, 'orange');
kqPlanet.addRing(12, 12, null, 0xDC143C, 1);
let kqFlag = new Flag(106, 60,
	null, "res/vids/Keqing.mp4",
	1, 120, 0xFFFFFF, "ProjectKeqing", 0, 0,
	null,
	"res/imgs/icons/Icon_C++.png",
	"res/imgs/icons/Icon_SDL2.png",
	"res/imgs/icons/Icon_CLion.png",
	"res/imgs/icons/Icon_Boost.png");
kqPlanet.setFlag(kqFlag);
galaxy.addPlanet(kqPlanet);
let kqMenuFlag = kqFlag.cloneForMenu();
kqMenuFlag.position.copy(kqMenuPosition);
kqMenuFlag.rotateX(-Math.PI / 2);
galaxy.addMenuFlag(kqMenuFlag);
LoadingScreen.updateCount();

let robotsPVZPlanet = new Planet("res/imgs/planets/Planet_Frozen.jpg", 40,
	robotsPVZPosition, 0.4, "cyan");
robotsPVZPlanet.addRing(2, 10, null, 0x00BFFF, 1);
robotsPVZPlanet.addRing(2, 10, null, 0xDC143C, 1);
let robotsPVZFlag = new Flag(100, 60,
	"res/imgs/WIP.jpg", null,
	1, 120, 0xFFFFFF, "ProjectRobotsPVZ", 0, 0,
	null,
	"res/imgs/icons/Icon_C++.png",
	"res/imgs/icons/Icon_UnrealEngine.jpg",
	"res/imgs/icons/Icon_VisualStudio.png");
robotsPVZPlanet.setFlag(robotsPVZFlag);
galaxy.addPlanet(robotsPVZPlanet);
let robotsPVZMenuFlag = robotsPVZFlag.cloneForMenu();
robotsPVZMenuFlag.position.copy(robotsPVZMenuPosition);
robotsPVZMenuFlag.rotateX(-Math.PI / 2);
galaxy.addMenuFlag(robotsPVZMenuFlag);
LoadingScreen.updateCount();

let oregairuPlanet = new Planet("res/imgs/planets/Planet_Green.jpg", 20,
	oregairuPosition, 0.8, "green");
oregairuPlanet.addRing(1, 6, null, 0xFFFFFF, 1);
let oregairuFlag = new Flag(60, 124,
	null, "res/vids/Oregairu.mp4",
	1, 160, 0xFFFFFF, "ProjectOregairu", 0, 0,
	null,
	"res/imgs/icons/Icon_Java.png",
	"res/imgs/icons/Icon_AndroidStudio.png");
oregairuPlanet.setFlag(oregairuFlag);
galaxy.addPlanet(oregairuPlanet);
let oregairuMenuFlag = oregairuFlag.cloneForMenu();
oregairuMenuFlag.position.copy(oregairuMenuPosition);
oregairuMenuFlag.rotateX(-Math.PI / 2);
galaxy.addMenuFlag(oregairuMenuFlag);
LoadingScreen.updateCount();

let bleachPlanet = new Planet("res/imgs/planets/Planet_Purple0.png", 20,
	bleachPosition, 1, "purple");
bleachPlanet.addRing(1, 6, null, 0xFFFFFF, 1);
let bleachFlag = new Flag(112, 60,
	null, "res/vids/Bleach.mp4",
	1, 100, 0xFFFFFF, "ProjectBleach", 0, 0,
	null,
	"res/imgs/icons/Icon_Python.png",
	"res/imgs/icons/Icon_PyGame.png",
	"res/imgs/icons/Icon_Pyzo.png",
	"res/imgs/icons/Icon_cxFreeze.png");
bleachPlanet.setFlag(bleachFlag);
galaxy.addPlanet(bleachPlanet);
let bleachMenuFlag = bleachFlag.cloneForMenu();
bleachMenuFlag.position.copy(bleachMenuPosition);
bleachMenuFlag.rotateX(-Math.PI / 2);
galaxy.addMenuFlag(bleachMenuFlag);
LoadingScreen.updateCount();

let glPlanet = new Planet("res/imgs/planets/Planet_RedBlue.jpg", 20,
	glPosition, 0.4, "white");
glPlanet.addRing(1, 6, null, 0xFFFFFF, 1);
let glFlag = new Flag(100, 60,
	"res/imgs/WIP.jpg", null,
	1, 100, 0xFFFFFF, "ProjectENSIMAG_GL", 0, 0,
	null);
glFlag.rotateY(Math.PI);
glPlanet.setFlag(glFlag);
galaxy.addPlanet(glPlanet);
let glMenuFlag = glFlag.cloneForMenu();
glMenuFlag.position.copy(glMenuPosition);
glMenuFlag.rotateX(-Math.PI / 2);
galaxy.addMenuFlag(glMenuFlag);
LoadingScreen.updateCount();

let igPlanet = new Planet("res/imgs/planets/Planet_Yellow.png", 20,
	igPosition, 0.6, "yellow");
igPlanet.addRing(1, 6, null, 0xFFFFFF, 1);
let igFlag = new Flag(80, 60,
	"res/imgs/IGPuzzle.png", null,
	1, 100, 0xFFFFFF, "ProjectENSIMAG_IG", 0, 0,
	null,
	"res/imgs/icons/Icon_CLanguage.png",
	"res/imgs/icons/Icon_CLion.png");
igFlag.rotateY(Math.PI);
igPlanet.setFlag(igFlag);
galaxy.addPlanet(igPlanet);
let igMenuFlag = igFlag.cloneForMenu();
igMenuFlag.position.copy(igMenuPosition);
igMenuFlag.rotateX(-Math.PI / 2);
galaxy.addMenuFlag(igMenuFlag);
LoadingScreen.updateCount();

let fftPlanet = new Planet("res/imgs/planets/Planet_Pink0.jpg", 20,
	fftPosition, 0.6, "pink");
fftPlanet.addRing(1, 6, null, 0xFFFFFF, 1);
let fftFlag = new Flag(106, 60,
	"res/imgs/FFT.jpg", null,
	1, 100, 0xFFFFFF, "ProjectUPMC_FFT", 0, 0,
	null,
	"res/imgs/icons/Icon_CLanguage.png",
	"res/imgs/icons/Icon_AVX2.png",
	"res/imgs/icons/Icon_VSCode.png");
fftFlag.rotateY(Math.PI);
fftPlanet.setFlag(fftFlag);
galaxy.addPlanet(fftPlanet);
let fftMenuFlag = fftFlag.cloneForMenu();
fftMenuFlag.position.copy(fftMenuPosition);
fftMenuFlag.rotateX(-Math.PI / 2);
galaxy.addMenuFlag(fftMenuFlag);
LoadingScreen.updateCount();

Utils.gltfLoader.load("res/3d/RobotUFO/scene.gltf", ( gltf ) => {
	let player = new Player(gltf.scene, 0.01);
	galaxy.setPlayer(player);
	player.position.set(-600, 100, -600);
	LoadingScreen.updateCount();
});

MainInit.initRoad();
LoadingScreen.updateCount();

Utils.gltfLoader.load("res/3d/Galaxy/scene.gltf", ( gltf ) => {
	let galaxyModel = gltf.scene;
	let scale = Galaxy.galaxyModelScale;
	galaxyModel.scale.set(scale, scale, scale);
	galaxyModel.position.set(0, Galaxy.galaxyModelY, 0);
	galaxy.setGalaxyModel(galaxyModel);
	LoadingScreen.updateCount();
});

// Event Listeners
window.addEventListener('resize', () => {
	Scene.updateRenderSize();
});

window.addEventListener('mousedown', (event) => {
	if (!loaded) return;

	if (event.button === 0) {
		if (Utils.mousePosition.x > 1 - Utils.getScrollbarWidth()) return;

		Utils.isMouseDown = true;

		galaxy.updateCurrentHoldObj();
		
		if (event.target instanceof HTMLElement) {
			let id = event.target.id;
			if (!galaxy.rayCastObjects(true, true, true) && 
					id === Scene.projBgContainerId) {
				Scene.rmDisplayHold = true;
			}
		}
	}
});
  
window.addEventListener('mouseup', (event) => {
	if (!loaded) return;

	if (event.button === 0 ) {
		if (Utils.mousePosition.x > 1 - ((Utils.getScrollbarWidth() / window.innerWidth) * 2)) return;

		galaxy.checkObjOnMouseUp();

		Utils.isMouseDown = false;

		if (event.target instanceof HTMLElement) {
			let id = event.target.id;
			if (Scene.rmDisplayHold && 
					!galaxy.rayCastObjects(true, true, true) &&
					id === Scene.projBgContainerId) {
				Scene.removeProjectDisplayer();
			}
		}
		Scene.rmDisplayHold = false;
	}
});

window.addEventListener('mousemove', (event) => {
	if (!loaded) return;
	
	Utils.updateMousePosition(event);
});

window.addEventListener("wheel", (event) => {
	if (!loaded) {
		event.preventDefault();
		return;
	}

	Utils.mouseWheel = true;

	if (Scene.currentMenu == 0 && !Scene.isDisplayingProject() &&
			!(Scene.aboutSectionTargetOpacity == 1)) {
		event.preventDefault();
	}

	if (Scene.currentMenu == 0 && Scene.cameraFollowingObj &&
			!(Scene.aboutSectionTargetOpacity == 1)) {
		let forward = event.deltaY >= 0;
		MainInit.moveForward(forward);

		if (!Utils.scrolled && MainInit.i != 0) {
			let scrollToExplore = document.getElementById("scrollToExplore");
			if (scrollToExplore != null) {
				Scene.scrollToExploreFadeOut();
			}
			Utils.scrolled = true;
		}
	}

	if (Scene.currentMenu == 1 && !Scene.isDisplayingProject() &&
		!(Scene.aboutSectionTargetOpacity == 1)) {
		if (event.deltaY < 0) {
			galaxy.zShiftMenuFlags(Galaxy.zShiftScrollLength);
		} else {
			galaxy.zShiftMenuFlags(-Galaxy.zShiftScrollLength);
		}
	}

}, {passive: false});

window.addEventListener("scroll", (event) => {
	if (!loaded) {
		event.preventDefault();
		return;
	}

	if (Utils.mouseWheel) return;

	if (Scene.currentMenu == 0 && !Scene.isDisplayingProject() &&
			!(Scene.aboutSectionTargetOpacity == 1)) {
		event.preventDefault();
	}

	if (Scene.currentMenu == 0 && Scene.cameraFollowingObj &&
			!(Scene.aboutSectionTargetOpacity == 1)) {
		const currentScrollHeight = document.documentElement.scrollTop;
		let i = (currentScrollHeight / MainInit.scrollHeight) * MainInit.scrollLengthAdv;
		i = Math.round(i / MainInit.scrollLengthAdv) * MainInit.scrollLengthAdv;
		if (i > 0) {
			MainInit.i = i - MainInit.scrollLengthAdv;
			MainInit.moveForward(true);
		} else {
			MainInit.i = i + MainInit.scrollLengthAdv;
			MainInit.moveForward(false);
		}

		if (!Utils.scrolled && MainInit.i != 0) {
			let scrollToExplore = document.getElementById("scrollToExplore");
			if (scrollToExplore != null) {
				Scene.scrollToExploreFadeOut();
			}
			Utils.scrolled = true;
		}
	}
}, {passive: false});

let closeButton = document.getElementById("closeButton");
if (closeButton != null) {
	closeButton.addEventListener("click", () => {
		Scene.removeProjectDisplayer();
	});
}

window.addEventListener("keydown", (event) => {
	let key = event.key;
	// Utils.updateKeyMap(key, true);

	if (key == "Escape") {
		if (Scene.isCameraLerping() && !Scene.cameraFollowingObj) {
			Scene.removeCameraLerp();
		}
		Scene.removeProjectDisplayer();
	}
});

// window.addEventListener("keyup", (event) => {
// 	let key = event.key;
// 	Utils.updateKeyMap(key, false);
// });

document.documentElement.style.overflowY = 'scroll';

let menuRoad = document.getElementById("menuRoad");
let menuOverview = document.getElementById("menuOverview");
let menuAbout = document.getElementById("menuAbout");

if (menuRoad != null && menuOverview != null && menuAbout != null) {
	menuRoad.style.opacity = "1";

	menuRoad.addEventListener("click", () => {
		if (Scene.currentMenu == 0) return;
		Scene.setCurrentMenu(0);
		
		if (!Utils.scrolled) Scene.showScrollToExplore(true);

		Galaxy.showButtonUpDown(false);

		document.documentElement.style.height = MainInit.htmlHeight;
        window.scrollTo({
			top: (MainInit.i / MainInit.scrollLengthAdv) * MainInit.scrollHeight,
			behavior: 'auto'
		});
		Scene.showProgressBar();

		let cameraLerp = Scene.setCameraLerp(MainInit.target.position, MainInit.target);
		cameraLerp.setFinalPosition(new THREE.Vector3(0, 0, 0));
		cameraLerp.setLookQuaternion(new THREE.Quaternion().setFromEuler(
			new THREE.Euler(-Math.PI / 2, 0, 0)));
		cameraLerp.setMaxDist(-1);
	});

	menuOverview.addEventListener("click", () => {
		if (Scene.currentMenu == 1) return;
		Scene.setCurrentMenu(1);

		if (!Utils.scrolled) Scene.showScrollToExplore(false);

		Galaxy.showButtonUpDown(true);

		document.documentElement.style.height = "100%";
        window.scrollTo(0, 0);
		Scene.hideProgressBar();

		let galaxyModelPosition = galaxy.getGalaxyModelPosition();
		let finalPosition = new THREE.Vector3(galaxyModelPosition.x, 
			Galaxy.getGalaxyModelViewY(),
			galaxyModelPosition.z);
		let cameraLerp = Scene.setCameraLerp(finalPosition, null);
		cameraLerp.setLookQuaternion(new THREE.Quaternion().setFromEuler(
			new THREE.Euler(-Math.PI / 2, 0, 0)));
		cameraLerp.setEpsilons(0, 0);
	});

	menuAbout.addEventListener("mouseover", () => {
		if ((Scene.currentMenu == 0 && 
				!Scene.isDisplayingProject() &&
				(!Scene.isCameraLerping() || Scene.cameraFollowingObj) &&
				Scene.aboutSection != null) ||
			(Scene.currentMenu == 1 &&
				!Scene.isDisplayingProject() &&
				Scene.aboutSection != null)) {
			Scene.aboutSection.style.position = "absolute";
			Scene.aboutSection.style.top = "8px";
			Scene.aboutSectionTargetOpacity = 1;
			document.documentElement.style.height = "100%";
            window.scrollTo(0, 0);
		}

		if (Scene.currentMenu == 1 && !Scene.isDisplayingProject()) {
			Galaxy.showButtonUpDown(false);
		}
	});

	menuAbout.addEventListener("mouseout", () => {
		if (Scene.aboutSection != null) {
			let top = -window.scrollY + 8;
			Scene.aboutSection.style.position = "fixed";
			Scene.aboutSection.style.top = top + "px";
		}
		Scene.aboutSectionTargetOpacity = 0;
		if (!Scene.isDisplayingProject() && Scene.currentMenu == 0) {
			document.documentElement.style.height = MainInit.htmlHeight;
			window.scrollTo({
				top: (MainInit.i / MainInit.scrollLengthAdv) * MainInit.scrollHeight,
				behavior: 'auto'
			});
		}

		if (Scene.currentMenu == 1) {
			Galaxy.showButtonUpDown(true);
		}
	});

	menuAbout.addEventListener("click", () => {
		if (Scene.aboutSectionTargetOpacity == 1) return;
		 
		Scene.removeProjectDisplayer(false);
		if (Scene.isCameraLerping() && !Scene.cameraFollowingObj) {
			Scene.removeCameraLerp();
		}
		if (Scene.aboutSection != null) {
			Scene.aboutSection.style.position = "absolute";
			Scene.aboutSection.style.top = "8px";
			Scene.aboutSectionTargetOpacity = 1;
			document.documentElement.style.height = "100%";
			window.scrollTo(0, 0);
		}

		if (Scene.currentMenu == 1) {
			Galaxy.showButtonUpDown(false);
		}
	});
}

if (Galaxy.buttonUp != null && Galaxy.buttonDown != null) {
	Galaxy.buttonUp.addEventListener("click", () => {
		galaxy.zShiftMenuFlags(Galaxy.zShiftScrollLength);
	});

	Galaxy.buttonDown.addEventListener("click", () => {
		galaxy.zShiftMenuFlags(-Galaxy.zShiftScrollLength);
	});
}

// Main Loop
function animate() {
	requestAnimationFrame(animate);

	Utils.updateDt();

	TWEEN.update();

	galaxy.updateFrame();

	Scene.updateFrame();

	Utils.mouseWheel = false;
}

while (!MainInit.doneOneRound) {
	MainInit.moveForward(true);
}
LoadingScreen.updateCount();

while (LoadingScreen.currCount < LoadingScreen.maxCount) {
	LoadingScreen.updateLoadingScreen();

	await Utils.sleep(0);
}

let loadingScreen = document.getElementById("loadingScreen");
let bg = document.getElementById("bg");
let scrollToExplore = document.getElementById("scrollToExplore");
let socialIcons = document.getElementById("socialIcons");
let menu = document.getElementById("menu");
if (loadingScreen != null && bg != null && scrollToExplore != null &&
		socialIcons != null && menu != null) {
	bg.style.display = "";
	scrollToExplore.style.display = "";
	socialIcons.style.display = "";
	menu.style.display = "";
	for (LoadingScreen.preLoadCount = 0;
			LoadingScreen.preLoadCount < LoadingScreen.preLoadMaxCount;
			LoadingScreen.preLoadCount++) {
		Utils.updateDt();
		galaxy.updateFrame();
		Scene.updateFrame();
		LoadingScreen.updateLoadingScreen();
		await Utils.sleep(0);
	}
	Scene.camera.position.set(0, 2000, 0);
	loadingScreen.style.display = "none";
	document.documentElement.style.height = MainInit.htmlHeight;
	window.scrollTo(0, 0);
}

let music = new Audio("res/sfx/NimbleAsLightning.ogg");
music.loop = true;
music.play().then(() => {
	Scene.isPlayingSound = true;
}).catch(() => {
	Scene.isPlayingSound = false;
	Scene.muteSoundEqualizer();
});
let soundEqualizer = document.getElementById("soundEqualizer");
if (soundEqualizer != null) {
	soundEqualizer.addEventListener("click", () => {
		Scene.isPlayingSound = !Scene.isPlayingSound;
		if (Scene.isPlayingSound) music.play();
		else {
			music.pause();
			Scene.muteSoundEqualizer();
		}
	});
}

loaded = true;

animate();
