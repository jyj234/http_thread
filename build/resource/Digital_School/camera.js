import {PerspectiveCamera} from './js/three.module.js'

export let camera = new PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set( 400, 30, 0 );
//camera.lookAt(0,150,0);