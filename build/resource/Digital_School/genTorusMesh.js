import {scene} from './scene.js'

export let torusMesh;
export function genTorusMesh(){
    let geometry = new THREE.TorusKnotGeometry( 18, 8, 150, 20 );
    // let geometry = new THREE.SphereGeometry( 26, 64, 32 );
    let material = new THREE.MeshStandardMaterial( {
        color: 0xffffff,
        metalness: 0,
        roughness: 0
    } );

    torusMesh = new THREE.Mesh( geometry, material );
    scene.add( torusMesh );
}