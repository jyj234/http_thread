import { scene } from "./scene.js";
import { RGBELoader } from './js/RGBELoader.js';
import {FloatType,EquirectangularReflectionMapping} from './js/three.module.js'
//import { javascript } from "webpack";

export let hdrtxu;
export function genHDR3(){
    new RGBELoader()
    .setDataType( FloatType )
    .setPath( './cubemap/' )
    .load( 'lilienstein_4k.hdr', function ( texture ) {

        texture.mapping = EquirectangularReflectionMapping;
        hdrtxu=texture;
        scene.background = texture;
        scene.environment = texture;
}
)}
