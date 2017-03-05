var sombreroForma = new THREE.CylinderGeometry(2, 5, 2);
var cabezaForma = new THREE.SphereGeometry(2);
var cuerpoForma = new THREE.SphereGeometry(5);
var soporteForma = new THREE.CylinderGeometry(1.5, 1.5, 5);
var baseForma = new THREE.CylinderGeometry(5, 5, 1);

//soporteForma.rotateZ( Math.PI/4);
soporteForma.translate(0, -4, 0);
baseForma.translate(0,-8,0);
cuerpoForma.translate(0, 1.5, 0);
cabezaForma.translate(0, 4, 0);
sombreroForma.translate(0 ,10, 0);

var sombreroMalla = new THREE.Mesh(sombreroForma);
var cabezaMalla = new THREE.Mesh(cabezaForma);
var cuerpoMalla = new THREE.Mesh(cuerpoForma);
var soporteMalla = new THREE.Mesh(soporteForma);
var baseMalla = new THREE.Mesh(baseForma);

var arbolForma = new THREE.Geometry();

arbolForma.merge(sombreroMalla.geometry, sombreroMalla.matrix);
arbolForma.merge(cabezaMalla.geometry, cabezaMalla.matrix);
arbolForma.merge(cuerpoMalla.geometry, cuerpoMalla.matrix);
arbolForma.merge(soporteMalla.geometry, soporteMalla.matrix);
arbolForma.merge(baseMalla.geometry, baseMalla.matrix);

var material = new THREE.MeshNormalMaterial();
var arbolMalla = new THREE.Mesh(arbolForma, material);

var escena = new THREE.Scene();
escena.add(arbolMalla);
//escena.add(troncoMalla);
//escena.add(esferaMalla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 50;

renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
