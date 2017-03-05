var PeloForma = new THREE.CylinderGeometry(5, 2, 2);
var cabezaForma = new THREE.SphereGeometry(1.5);
var soporteForma = new THREE.CylinderGeometry(1.5, 1.5, 10);
var baseForma = new THREE.CylinderGeometry(5, 5, 1);

soporteForma.rotateZ( Math.PI/2);
soporteForma.translate(0, -5, 0);
baseForma.translate(0,-10,0);
cabezaForma.translate(0, 4, 0);
PeloForma.translate(0 ,5, 0);

var PeloMalla = new THREE.Mesh(PeloForma);
var cabezaMalla = new THREE.Mesh(cabezaForma);
var soporteMalla = new THREE.Mesh(soporteForma);
var baseMalla = new THREE.Mesh(baseForma);

var arbolForma = new THREE.Geometry();

arbolForma.merge(PeloMalla.geometry, PeloMalla.matrix);
arbolForma.merge(cabezaMalla.geometry, cabezaMalla.matrix);
arbolForma.merge(soporteMalla.geometry, soporteMalla.matrix);
arbolForma.merge(baseMalla.geometry, baseMalla.matrix);

var material = new THREE.MeshNormalMaterial();
var arbolMalla = new THREE.Mesh(arbolForma, material);

var escena = new THREE.Scene();
escena.add(arbolMalla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 50;

renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );




