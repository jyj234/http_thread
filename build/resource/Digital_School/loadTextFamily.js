import * as THREE from './js/three.module.js';
    export function loadTextFamily () {
        var textLoader = new THREE.FontLoader()
        textLoader.load(
          './fonts/汉鼎繁行楷_Regular.json',
          function (font) {
            let fontFamily = font;
            console.log(font);
          }
        );
      }
  