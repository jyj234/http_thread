import {onWindowResize} from './onWindowResize.js'
import {ControlPerspectiveByMouse} from './ControlPerspectiveByMouse.js'
import {setRenderer} from './setRenderer.js'
import {genHDR} from './genHDR.js'
import {genFPSDetector} from "./genFPSDetector.js";
import {gltfLoad} from "./gltfLoad.js";
import{ray}from'./ray.js'
import * as THREE from './js/three.module.js';


export let cube;
export function inite(){

        setRenderer();
        gltfLoad();
        //planeLoad();
        //directionalLightLoad();
        //lightSphereLoad();
    
        genHDR();
        //genHDR2();
        genFPSDetector();
        ControlPerspectiveByMouse();
    
        window.addEventListener( 'resize', onWindowResize );

        addEventListener('click',ray);// 监听窗口鼠标单击事件
    
}