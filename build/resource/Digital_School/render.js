import {camera} from './camera.js'
import {scene} from './scene.js'
import {renderer} from './renderer.js'
import {  params} from "./params.js";
import { genHDR } from './genHDR.js';
import { genHDR2 } from './genHDR2.js';
import { genHDR3 } from './genHDR3.js';

let x,y,z;
export function render() {
    if(params.HDR1){
    genHDR();
    params.HDR1=false;
    }
    else if(params.HDR2){
    genHDR2();
    params.HDR2=false;
    }
    else if(params.HDR3){
        genHDR3();
        params.HDR3=false;
    }
    //ambientLight.intensity=params.intensity;
     if (params.rotate){
     params.angle+=0.5;
     params.x=params.Radius*Math.cos(params.angle*Math.PI/180);
    params.y=params.Height;
    params.z=params.Radius*Math.sin(params.angle*Math.PI/180);
     camera.lookAt(0,160,0);
     camera.position.set(params.x,params.y,params.z);
     }
     if(params.in){
        // if(abs(params.inx-params.x)<=5)
        // flag=false;
         params.x+=(params.inx-params.x)/100;
         params.y+=(params.iny-params.y)/100;
         params.z+=(params.inz-params.z)/100;
         params.targetH-=(params.targetH-20)/10;
         camera.position.set(params.x,params.y,params.z);
     }
     else if(params.out){
        // if(abs(params.inx-params.x)<=5)
        // flag=false;
         params.x+=(params.outx-params.x)/100;
         params.y+=(params.outy-params.y)/100;
         params.z+=(params.outz-params.z)/100;
         params.targetH+=(175-params.targetH)/100;
         camera.position.set(params.x,params.y,params.z);
     }

     camera.lookAt(0,params.targetH,0);
     params.y=params.Height;
     if(!params.move)
     camera.position.set(params.x,params.y,params.z);
     renderer.toneMappingExposure = 5;
    //renderer.toneMappingExposure = params.exposure;

    renderer.render( scene, camera );
}