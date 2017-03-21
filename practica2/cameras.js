//-----Personaje Gordito.
var sombreroForma1 = new THREE.CylinderGeometry(2, 5, 2);
var cabezaForma1 = new THREE.SphereGeometry(3);
var cuerpoForma1 = new THREE.SphereGeometry(5);
var soporteForma1 = new THREE.CylinderGeometry(1.5, 1.5, 5);
var baseForma1 = new THREE.CylinderGeometry(5, 5, 1);

soporteForma1.translate(0, -4, 0);
baseForma1.translate(0,-7,0);
cuerpoForma1.translate(0, 1.5, 0);
cabezaForma1.translate(0, 7, 0);
sombreroForma1.translate(0 ,10, 0);

var sombreroMalla1 = new THREE.Mesh(sombreroForma1);
var cabezaMalla1 = new THREE.Mesh(cabezaForma1);
var cuerpoMalla1 = new THREE.Mesh(cuerpoForma1);
var soporteMalla1 = new THREE.Mesh(soporteForma1);
var baseMalla1 = new THREE.Mesh(baseForma1);

var arbolForma1 = new THREE.Geometry();

arbolForma1.merge(sombreroMalla1.geometry, sombreroMalla1.matrix);
arbolForma1.merge(cabezaMalla1.geometry, cabezaMalla1.matrix);
arbolForma1.merge(cuerpoMalla1.geometry, cuerpoMalla1.matrix);
arbolForma1.merge(soporteMalla1.geometry, soporteMalla1.matrix);
arbolForma1.merge(baseMalla1.geometry, baseMalla1.matrix);

var material1 = new THREE.MeshNormalMaterial();
var arbolMalla1 = new THREE.Mesh(arbolForma1, material);
escena.add(arbolMalla1);
//---Personaje Flaquito

var PeloForma2 = new THREE.CylinderGeometry(5, 2, 3);
var cabezaForma2 = new THREE.SphereGeometry(2);
var soporteForma2 = new THREE.CylinderGeometry(0.5, 0.5, 8);
var baseForma2 = new THREE.CylinderGeometry(5, 5, 1);

soporteForma2.translate(20, 0, 0);
baseForma2.translate(20,-4,0);
cabezaForma2.translate(20, 4.5, 0);
PeloForma2.translate(20 ,5.5, 0);

var PeloMalla2 = new THREE.Mesh(PeloForma2);
var cabezaMalla2 = new THREE.Mesh(cabezaForma2);
var soporteMalla2 = new THREE.Mesh(soporteForma2);
var baseMalla2 = new THREE.Mesh(baseForma2);

var arbolForma2 = new THREE.Geometry();

arbolForma2.merge(PeloMalla2.geometry, PeloMalla2.matrix);
arbolForma2.merge(cabezaMalla2.geometry, cabezaMalla2.matrix);
arbolForma2.merge(soporteMalla2.geometry, soporteMalla2.matrix);
arbolForma2.merge(baseMalla2.geometry, baseMalla2.matrix);

var material2 = new THREE.MeshNormalMaterial();
var arbolMalla2 = new THREE.Mesh(arbolForma2, material2);

escena.add(arbolMalla2);

//---Plataforma

for (i=0; i<200; i+=10){
   for (j=0; j<200; j+=10){
var PisoGeometria = new THREE.PlaneGeometry(10,10);
//var PisoMaterial= new THREE.MeshBasicMaterial();
PisoGeometria.translate(-100+i,-100+j,0);


var PisoMaterial = new THREE.MeshBasicMaterial({ color: Math.random()*0xFFFFFF});
var Piso= new THREE.Mesh(PisoGeometria,PisoMaterial);
escena.add(Piso);
  }
}  
 //Piso.position.x=20;
var escena= new THREE.Scene();

//var camara= new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
//camara.position.set(0,-200,100);
//camara.lookAt(escena.position);

var camara= new THREE.OrthographicCamera();
camara.left=window.innerWidth/-2;
camara.right=window.innerWidth/2;
camara.top=window.innerHeight/2;
camara.bottom=window.innerHeight/-2;
camara.near=0.1;
camara.far=1000;
camara.updateProjectionMatrix();
camara.position.set(0,-200,100);
camara.lookAt(escena.position);

var renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
