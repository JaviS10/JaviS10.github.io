var figura = new THREE.Shape();

figura.moveTo(20, 20);
figura.lineTo(40, 40);
figura.lineTo(60, 20);
figura.lineTo(53, 55);
figura.lineTo(60, 75);
figura.lineTo(47, 75);
figura.lineTo(40, 90);
figura.lineTo(33, 75);
figura.lineTo(20, 75);
figura.lineTo(27, 55);
figura.lineTo(20, 20);

figura.lineTo(60, 20);
figura.lineTo(60, 0);
figura.lineTo(20, 0);
figura.lineTo(20, 20);

var forma = new THREE.ExtrudeGeometry( figura,
                                       {amount: 10} );
var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );
malla.rotateY( Math.PI/8 );

var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 500;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
