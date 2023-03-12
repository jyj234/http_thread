import {renderer} from './renderer.js'
import {container} from './container.js'
import {sRGBEncoding,PCFSoftShadowMap,ACESFilmicToneMapping,LinearToneMapping,NoToneMapping} from './js/three.module.js'


export function setRenderer(){
    renderer.physicallyCorrectLights = true;
     //renderer.toneMapping = ACESFilmicToneMapping;
     renderer.toneMapping = NoToneMapping;
   // renderer.shadowMap.type =NoToneMapping;
    // renderer.setPixelRatio( window.devicePixelRatio );
    renderer.shadowMapEnabled = true;//开启阴影，加上阴影渲染
    renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild( renderer.domElement );
    renderer.outputEncoding = sRGBEncoding;
}