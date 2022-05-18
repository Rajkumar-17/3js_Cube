// Canvas
const canvas = document.querySelector('canvas.webgl')
 
//New Scene
const scene = new THREE.Scene();

//Camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
scene.add( camera );

//Geometry
const geometry = new THREE.BoxGeometry();

//Material
const material = new THREE.MeshBasicMaterial({color: 0x00ff00});

//3D-Cube
const cube =new THREE.Mesh( geometry, material);
scene.add( cube );

//Render
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(window.innerWidth, window.innerHeight );
renderer.render(scene, camera)

