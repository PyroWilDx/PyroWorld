import * as THREE from 'three';
import { Flag } from './Flag.ts';
import { RotatingObject } from './RotatingObject.ts';
import { Scene } from './Scene.ts';
import { Utils } from './Utils.ts';

export class Planet extends RotatingObject {

    private radius: number;
    private ringMeshes: RotatingObject[];
    private flag: Flag | null;

    constructor(imgPath: string, radius: number,
            position: THREE.Vector3, emissiveIntensity: number = 0,
            emissiveColor: THREE.ColorRepresentation = 0x0) {

        let nVerticles = Math.max(64, radius / 4);
        nVerticles = Math.min(160, nVerticles);
        let planetTexture = Utils.textureLoader.load(imgPath);

        super(new THREE.SphereGeometry(radius, nVerticles, nVerticles),
            new THREE.MeshStandardMaterial({
                map: planetTexture,
                side: THREE.FrontSide,
                emissiveIntensity: emissiveIntensity,
                emissive: emissiveColor,
                emissiveMap: planetTexture
            }),
            Utils.getRandomVector3Spread(0.0026)
        );
        this.position.copy(position);
        Scene.addEntity(this);

        this.radius = radius;

        this.ringMeshes = [];
        this.flag = null;
    }

    addRing(start: number, length: number, texturePath: string | null,
                colorV: number | null): void {
        let tStart = start + this.radius;

        let nVerticles = Math.max(64, (tStart + length) / 4);
        nVerticles = Math.min(160, nVerticles);
        let rSpeed = Utils.getRandomVector3Spread(0.004);
        let ringMesh: RotatingObject | null = null;
        if (colorV != null) {
            ringMesh = new RotatingObject(
                new THREE.RingGeometry(tStart, tStart + length, nVerticles),
                new THREE.MeshStandardMaterial({
                    color: colorV,
                    side: THREE.DoubleSide
                }),
                rSpeed
            ); 
        }
        if (texturePath != null) {
            ringMesh = new RotatingObject(
                new THREE.RingGeometry(tStart, tStart + length, nVerticles),
                new THREE.MeshStandardMaterial({
                    map: Utils.textureLoader.load(texturePath),
                    side: THREE.DoubleSide
                }),
                rSpeed
            );
        }

        if (ringMesh != null) {
            this.getWorldPosition(ringMesh.position);
            Scene.addEntity(ringMesh);
            this.ringMeshes.push(ringMesh);
        }
    }
    
    updateFrame(): void {
        this.rotate();
    
        for (const currRingMesh of this.ringMeshes) {
            currRingMesh.rotate();
        }

        if (this.flag != null) {
            this.flag.updateFrame();
        }
    }

    setFlag(flag: Flag): void {
        this.flag = flag;
        let flagPosition = this.position.clone();
        flagPosition.y += this.radius - 10;
        this.flag.setPositionFromDown(flagPosition);
    }

    getFlag(): Flag | null {
        return this.flag;
    }

}
