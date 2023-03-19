import {camera} from './camera.js'
import {scene} from './scene.js'
import * as THREE from './js/three.module.js';
import{cube}from'./inite.js'
/**
 * 射线拾取函数
 * 选中的网格模型变为半透明效果
 */
let INTERSECTED;
export function ray(event) {
        var Sx = event.clientX;//鼠标单击位置横坐标
        var Sy = event.clientY;//鼠标单击位置纵坐标
        //屏幕坐标转标准设备坐标
        var x = ( Sx / window.innerWidth ) * 2 - 1;//标准设备横坐标
        var y = -( Sy / window.innerHeight ) * 2 + 1;//标准设备纵坐标ray

        var standardVector  = new THREE.Vector3(x, y, 0.5);//标准设备坐标
        //标准设备坐标转世界坐标
        var worldVector = standardVector.unproject(camera);
        //射线投射方向单位向量(worldVector坐标减相机位置坐标)
        var ray = worldVector.sub(camera.position).normalize();
        //创建射线投射器对象
        var raycaster = new THREE.Raycaster(camera.position, ray);
        //返回射线选中的对象
        var intersects = raycaster.intersectObjects(scene.children);
        if (intersects.length > 0) {
            console.log(intersects);
            intersects[0].object.material.transparent = true;
            intersects[0].object.material.opacity = 0.6;
        }
        //console.log(scene.children);
       // console.log(scene.children[0].children[77].children);
       // for(let i=0;i<=10;++i){
       // scene.children[0].children[77].children[i].material.emissive.setHex( 0xff0000 );
       // }
       console.log(scene.children[0]);
     intersects = raycaster.intersectObjects( scene.children[0].children[77].children );
     //intersects=intersects.parent;
      //console.log(intersects);
      console.log(document.getElementById("tag"));
				if ( intersects.length > 0 ) {
					if ( INTERSECTED != intersects[ 0 ].object ) {
                                 //document.getElementById("show_Page").style.display = 'block';
         document.getElementById("tag").style.display='block';
						//if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
                               for(let i=0;i<=10;++i){
                        scene.children[0].children[77].children[i].material.emissive.setHex( 0xff0000 );
                             }
						INTERSECTED = intersects[ 0 ].object.parent;
                        console.log(INTERSECTED);
                        scene.add(cube);
                        cube.visible=true;
                        //cube.visible=true;
						//INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
						//INTERSECTED.material.emissive.setHex( 0xff0000 );

					}

				} else {
                    document.getElementById("tag").style.display='none';
                    for(let i=0;i<=10;++i){
                        scene.children[0].children[77].children[i].material.emissive.setHex( 0 );
                             }
                        cube.visible=false;
					//INTERSECTED = null;

				}
}