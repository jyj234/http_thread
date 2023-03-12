
import{AmbientLight,PointLight} from './js/three.module.js'


export let directionalLight;
export let ambientLight;
export function directionalLightLoad(){
    // let directionalLightColor = "#ffffff";
    // directionalLight = new DirectionalLight(directionalLightColor);
    // directionalLight.autoUpdate=false;
    // directionalLight.position.set(0,300,0);
    // directionalLight.castShadow = true;
    // directionalLight.shadow.camera.near = 0.1;
    // directionalLight.shadow.camera.far = 200;
    // directionalLight.shadow.camera.left = -100;
    // directionalLight.shadow.camera.right = 100;
    // directionalLight.shadow.camera.top = 50;
    // directionalLight.shadow.camera.bottom = -50;
    // directionalLight.shadow.mapSize.height = 512;
    // directionalLight.shadow.mapSize.width = 512;
    // directionalLight.shadow.bias=-0.001;
    // //directionalLight.target=plane;
    // directionalLight.intensity = 10;
    // scene.add(directionalLight);
    ambientLight = new AmbientLight("#ffffff");
    //scene.add(ambientLight);

    let pointLight = new PointLight("#ffffff");
    pointLight.position.set(15, 300, 10);

    //告诉平行光需要开启阴影投射
    //pointLight.castShadow = true;

    //scene.add(pointLight);
}