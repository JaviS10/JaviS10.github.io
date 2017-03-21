function setup(){
escena = new THREE.Scene();

camara = new THREE.PerspectiveCamera(75,
                                      window.innerWidth/window.innerHeight,
                                      0.1,
                                      100);
camara.position.z=5;

render. new THREE.WebGLRendet();
render.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild()

//Aliasing
