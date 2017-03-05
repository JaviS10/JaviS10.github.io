var sombreroForma = new THREE.CylinderGeometry(5, 2, 2);
var cabezaForma = new THREE.SphereGeometry(1.5);
var cuerpoForma = new THREE.SphereGeometry(2.5);
var soporteForma = new THREE.CylinderGeometry(1.5, 1.5, 10);
var baseForma = new THREE.CylinderGeometry(5, 5, 1);

soporteForma.rotateZ( Math.PI/4);
soporteForma.translate(0, -5, 0);
baseForma.translate(0,-10,0);
cuerpoForma.translate(0, 2.5, 0);
cabezaForma.translate(0, 4, 0);
sombreroForma.translate(0 ,5, 0);





