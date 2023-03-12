import {scene} from './scene.js'
import {TextureLoader,PlaneGeometry,MeshPhysicalMaterial,Mesh} from './three.js-dev/build/three.module.js'

export let plane;
export function planeLoad(){
    var texLoader = new TextureLoader()
    let planeGeometry = new PlaneGeometry(200, 200);
    let planeMaterial = new MeshPhysicalMaterial({
        map:texLoader.load('./textures/grey_plaste/grey_plaster_diff_4k.jpg'),
        normalMap:texLoader.load('./textures/grey_plaste/grey_plaster_nor_gl_4k.jpg'),
        roughnessMap:texLoader.load('./textures/grey_plaste/grey_plaster_rough_4k.jpg'),
    })
    plane = new Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.set(0,0,0);
    plane.receiveShadow =true;
    scene.add(plane);
}