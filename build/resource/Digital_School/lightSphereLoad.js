import {scene} from './scene.js'
import {params} from './params.js'
import {SphereGeometry,MeshLambertMaterial,Mesh} from './js/three.module.js'

export let lightSphere;
export function lightSphereLoad(){
    let meshGrometry=new SphereGeometry(5,32,16);
    let meshMaterial=new MeshLambertMaterial({color:0xffff00});
    lightSphere=new Mesh(meshGrometry,meshMaterial);
    lightSphere.position.set(params.lightRadius,params.Height,0);
    scene.add(lightSphere);
}