import { scene } from "./scene.js";
import { RGBELoader } from './js/RGBELoader.js';
import {FloatType,EquirectangularReflectionMapping} from './js/three.module.js'
//import { javascript } from "webpack";

export let hdrtxu;
export function genHDR2(){
    new RGBELoader()
    .setDataType( FloatType )
    .setPath( './cubemap/' )
    .load( 'abandoned_hopper_terminal_04_4k.hdr', function ( texture ) {

        texture.mapping = EquirectangularReflectionMapping;
        hdrtxu=texture;
        scene.background = texture;
        scene.environment = texture;
}
)}
