import {camera} from './camera.js'
import { render } from './render.js';
import {renderer} from './renderer.js'
import { OrbitControls } from './js/OrbitControls.js';

export function ControlPerspectiveByMouse(){
    let controls = new OrbitControls( camera, renderer.domElement );
    controls.addEventListener('change', render);
}