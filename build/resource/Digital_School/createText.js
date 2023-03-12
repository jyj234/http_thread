
    export function createText (text, pos) {
      
        var options = {
          size: 10,
          height: 0,
          font: fontFamily, // “引用js字体必须换成英文”
          bevelThickness: 1,
          bevelSize: 1,
          bevelSegments: 1,
          curveSegments: 50,
          steps: 1
        }
        var textGeo = new THREE.TextGeometry(text, options);
        var textMesh = new THREE.Mesh(textGeo, new THREE.MeshBasicMaterial())
         //... 省略设置文字position的代码。很简单 textMesh.positon.x ...明白了吗 ...
         
        scene.add(textMesh);
    }  