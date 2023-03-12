
const ldrUrls = [ 'px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png' ];
ldrCubeMap = new THREE.CubeTextureLoader()
    .setPath( './textures/cube/pisa/' )
    .load( ldrUrls, function () {

        ldrCubeMap.encoding = THREE.sRGBEncoding;

        ldrCubeRenderTarget = pmremGenerator.fromCubemap( ldrCubeMap );

    } );