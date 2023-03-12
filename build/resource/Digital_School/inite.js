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
        var loader = new THREE.FontLoader();
loader.load( './fonts/1.json', function ( font ) {
	var geometry = new THREE.TextGeometry( '尚大楼', {
		font: font,
		size: 20,
		height: 2,
		curveSegments: 12,
		bevelEnabled: true,
		bevelThickness: 1,
		bevelSize: 1,
		bevelSegments: 10
	} );
        var material = new THREE.MeshBasicMaterial( { color: 0x999999 } );  // 一种材料，设置集合体颜色
        cube = new THREE.Mesh( geometry, material );  // 网格，也就是几何体
        cube.translateY(430);
        cube.translateX(-50);
        cube.translateZ(50);
        cube.rotateY(Math.PI/2);
        //scene.add( cube );  // 几何体创建好后添加到场景中
        //cube.visible=false;
} );
    
        window.addEventListener( 'resize', onWindowResize );

         addEventListener('click',ray);// 监听窗口鼠标单击事件
        // genTree();
        // while(!isLoaded);
         //document.getElementById("show_Page").style.display = 'block';
         //document.getElementById("load_Page").style.display = 'none';
        // addGui();
    
}