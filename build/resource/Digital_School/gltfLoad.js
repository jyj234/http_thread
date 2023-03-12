import {GLTFLoader} from './js/GLTFLoader.js'
import {scene} from './scene.js'
import {render } from './render.js'
import {addGui} from './addGui.js'
import { camera } from './camera.js';


const progress = document.querySelector('.progress-done');
export let loadProcess=0.0;
export let gltf;
export function gltfLoad(){
    var gltfloader=new GLTFLoader();
    gltfloader.load(
        './models/1.glb',
        function (gltf) {
            scene.add(gltf.scene);
            render();
            camera.target=gltf;
            document.getElementById("showPage").style.display = 'block';
            document.getElementById("loadPage").style.display = 'none';
            addGui();
    gltf.scene.traverse( function ( node ) {

    if ( node.isMesh ) {
    node.castShadow=true;
    node.receiveShadow=true;
    }
     });
    },
    function ( xhr ) {
        // console.log((xhr.loaded / xhr.total*100) + '%');
        loadProcess=xhr.loaded / xhr.total;
        progress.style.width = (xhr.loaded / xhr.total*100) + '%';
        progress.innerText=(xhr.loaded / xhr.total*100).toFixed(2)+'%';
	},
	function ( error ) {

		console.log( 'An error happened' );

	});
}