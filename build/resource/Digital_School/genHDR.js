import { scene } from "./scene.js";
import { RGBELoader } from './js/RGBELoader.js';
import {FloatType,EquirectangularReflectionMapping} from './js/three.module.js'
//import { javascript } from "webpack";
import * as THREE from './js/three.module.js';
import { pmremGenerator } from "./genEnvMap.js";
//import{UnsignedByteType}from'./three.js-dev/build/three.js'

export let hdrCubeRenderTarget;
THREE.DefaultLoadingManager.onLoad = function ( ) {

    pmremGenerator.dispose();

};
export function genHDR(){
    new RGBELoader()
    .setDataType( FloatType )
    .setPath( './cubemap/' )
    .load( 'snowy_field_4k.hdr', function ( texture ) {
        texture.mapping = EquirectangularReflectionMapping;
        scene.background = texture;
        scene.environment = texture;
    });
    // const hdrUrls = [ 'px.hdr', 'nx.hdr', 'py.hdr', 'ny.hdr', 'pz.hdr', 'nz.hdr' ];
    // let hdrCubeMap = new HDRCubeTextureLoader()
    //     .setPath( './three.js-dev/examples/textures/cube/pisaHDR/' )
    //     .setDataType( THREE.UnsignedByteType )
    //     .load( hdrUrls, function () {
    //         hdrCubeRenderTarget = pmremGenerator.fromCubemap( hdrCubeMap );
    //         hdrCubeMap.magFilter = THREE.LinearFilter;
    //         hdrCubeMap.needsUpdate = true;

    //     } );
}
