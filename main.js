// main.js
import * as THREE from '/node_modules/three/build/three.module.js';
function init() {
    const scene = new THREE.Scene();

    scene.fog = new THREE.FogExp2(0xffffff, 0.2); // this will add fog to the scene 

    const box = getBox(1, 1, 1);
    box.name = 'box'; // this will give the box a name
    box.position.y = box.geometry.parameters.height/2; // this will make the box sit on the plane
    scene.add(box);
    const plane = getPlane(4); 
   scene.add(plane);
    plane.rotation.x = Math.PI/2;// this will rotate the plane 90 degrees

    //75 is the field of view, 2nd is aspect ratio, 3rd is near clipping plane , 4th is far clipping plane
    const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 3;
    camera.position.x = 1;
    camera.position.y = 1;

    camera.lookAt(new THREE.Vector3(0, 0, 0));

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor('rgb(255, 255, 255)'); // this will set the background color of the scene
    document.body.appendChild(renderer.domElement);
    
    update(renderer, scene, camera); // this will render the scene with the camera

    return scene;
}

var scene = init(); // this will call the init function

function getBox(w,h,d) {
    const geometry = new THREE.BoxGeometry(w, h, d);
    const material = new THREE.MeshBasicMaterial({color: "blue"});
    const mesh = new THREE.Mesh(geometry, material);
    return mesh;
}


function getPlane(size) {
    const geometry = new THREE.PlaneGeometry(size, size);
    const material = new THREE.MeshBasicMaterial({color: "red", side: THREE.DoubleSide});
    const mesh = new THREE.Mesh(geometry, material);
    return mesh;
}

function update(renderer, scene, camera) {
    renderer.render(scene, camera);

    var box = scene.getObjectByName('box');
    box.rotation.y += 0.01; // this will rotate the box
    //box.rotation.x += 0.01;

    requestAnimationFrame(function() {
        update(renderer, scene, camera);
    });
}
