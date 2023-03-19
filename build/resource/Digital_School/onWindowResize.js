import {camera} from './camera.js'
import {WebGLRenderer} from './js/three.module.js'
let renderer = new WebGLRenderer({ antialias: true });

export function onWindowResize() {

    var width = window.innerWidth;
    var height = window.innerHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize( width, height );

}