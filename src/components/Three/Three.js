// Threejs background. I learned how to use this through the documentation at https://threejs.org/ and https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene

import * as THREE from 'three';
import "./Three.css";
import { gsap } from 'gsap/all';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
// import {FirstPersonControls} from "three/examples/jsm/controls/FirstPersonControls"
import {RGBELoader} from "three/examples/jsm/loaders/RGBELoader";
import materials from './Materials';

window.onload = function(){

let camera, scene, renderer, spotLight, hemiLight;

let previousShadowMap = false;

// // ref for lumens: http://www.power-sure.com/lumens.htm
//   '110000 lm (1000W)': 110000,
//   '3500 lm (300W)': 3500,
//   '1700 lm (100W)': 1700,
//   '800 lm (60W)': 800,
//   '400 lm (40W)': 400,
//   '180 lm (25W)': 180,
//   '20 lm (4W)': 20,
//   'Off': 0


// // ref for solar irradiances: https://en.wikipedia.org/wiki/Lux
//   '0.0001 lx (Moonless Night)': 0.0001,
//   '0.002 lx (Night Airglow)': 0.002,
//   '0.5 lx (Full Moon)': 0.5,
//   '3.4 lx (City Twilight)': 3.4,
//   '50 lx (Living Room)': 50,
//   '100 lx (Very Overcast)': 100,
//   '350 lx (Office Room)': 350,
//   '400 lx (Sunrise/Sunset)': 400,
//   '1000 lx (Overcast)': 1000,
//   '18000 lx (Daylight)': 18000,
//   '50000 lx (Direct Sun)': 50000


init();
animate();

function init() {
scene = new THREE.Scene();

const hdrTextureURL = new URL("../img/studio.hdr", import.meta.url);
const loadingManager = new THREE.LoadingManager();
camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, .01, 20 );

renderer = new THREE.WebGLRenderer({alpha: false, antialias: true});
renderer.physicallyCorrectLights = true;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.VSMShadowMap;
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping = THREE.ReinhardToneMapping;
renderer.toneMappingExposure = .5;
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener("resize", onWindowResize, false);

function onWindowResize(){
  let width = window.innerWidth;
  let height = window.innerHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

// const controls = new OrbitControls( camera, renderer.domElement );
// controls.minDistance = 5;
// controls.maxDistance = 20;
// controls.update();

function moveCamera (x, y, z) {
  gsap.to(camera.position,    {
    x,
    y, 
    z, 
    duration: 5
});}

function rotateCamera (x, y, z){
gsap.to(camera.rotation, {
  x,
  y,
  z,
  duration: 5
});}

document.getElementById("work").addEventListener("click", function(){
  moveCamera(1.705767645472689, .92, 0.8242832549970878);
  rotateCamera(0, -1.8, 0);
});
  document.getElementById("rs").addEventListener("click", function(){
    moveCamera(-.2, 1.500, 4);
    rotateCamera(-.2, 0, 0);
});
document.getElementById("about").addEventListener("click", function(){
  moveCamera(-.200, 1.700, 0);
  rotateCamera(0, 0, 0);
  function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }
        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
  }
  waitForElm('.aboutDiv').then((elm) => {
    elm.style.opacity= 1;
  });
});
document.getElementById("designwork").addEventListener("click", function(){
  moveCamera(-1, 1.300, 1.5);
  rotateCamera(0, 1.5, 0);
});



// document.getElementById("city").addEventListener("click", function(){
//   moveCamera(-.2, 1.6, 0)
//   rotateCamera(0, 0, 0)
//   camera.lookAt(london)
// });


// window.addEventListener("mouseover", function() {
//   console.log(camera.position);
// })


camera.position.set(-.2, 1.500, 4);
rotateCamera(-.1,0,0);
// controls.update();
// stats = Stats()
// document.body.appendChild(stats.dom)

// Loading models

const loader = new GLTFLoader(loadingManager);
// loader.load( './gltf/ceiling.glb', function ( gltf ) {			
//   const newMat = new THREE.MeshStandardMaterial({
//     roughness: 1,
//     metalness: 0,
//     color: 0xffffff,
//   })
//   gltf.scene.traverse((o) => {
//     if (o.isMesh) o.material = newMat;
//   });
//   gltf.scene.traverse((o) => {
//     if (o.isMesh) {
//     o.castShadow = true;
//     o.receiveShadow = true;
//     }
//   });
//   scene.add( gltf.scene );
// 	},
// );

//loader.load( './gltf/fabric.glb', function ( gltf ) {			
//   gltf.scene.traverse((o) => {
//     if (o.isMesh) {
//     o.castShadow = true;
//     o.receiveShadow = true;
//     }
//   });
//   scene.add( gltf.scene );
// 	},
// );

loader.load( './gltf/screen.glb', function ( gltf ) {			
  gltf.scene.traverse((o) => {
    if (o.isMesh) o.material = materials[3];
  });
  gltf.scene.traverse((o) => {
    if (o.isMesh) {
    o.castShadow = true;
    o.receiveShadow = true;
    }
  });
  scene.add( gltf.scene );
	},
);

loader.load( './gltf/shelf.glb', function ( gltf ) {	
  gltf.scene.traverse((o) => {
    if (o.isMesh) o.material = materials[5];
  });		
  gltf.scene.traverse((o) => {
    if (o.isMesh) {
    o.castShadow = true;
    o.receiveShadow = true;
    }
  });
  scene.add( gltf.scene );
	},
);

// loader.load( './gltf/tree.glb', function ( gltf ) {			
//   gltf.scene.traverse((o) => {
//     if (o.isMesh) {
//     o.castShadow = true;
//     o.receiveShadow = true;
//     }
//   });
//   scene.add( gltf.scene );
// 	},
// );

loader.load( './gltf/archArt.glb', function ( gltf ) {			
  gltf.scene.traverse((o) => {
    if (o.isMesh) o.material = materials[9];
  });
  gltf.scene.traverse((o) => {
    if (o.isMesh) {
    o.castShadow = true;
    o.receiveShadow = true;
    }
  });
  scene.add( gltf.scene );
	},
);

loader.load( './gltf/la.glb', function ( gltf ) {			
  gltf.scene.traverse((o) => {
    if (o.isMesh) o.material = materials[8];
  });
  gltf.scene.traverse((o) => {
    if (o.isMesh) {
    o.castShadow = true;
    o.receiveShadow = true;
    }
  });
  scene.add( gltf.scene );
	},
);

loader.load( './gltf/marbella.glb', function ( gltf ) {			
  gltf.scene.traverse((o) => {
    if (o.isMesh) o.material = materials[7];
  });
  gltf.scene.traverse((o) => {
    if (o.isMesh) {
    o.castShadow = true;
    o.receiveShadow = true;
    }
  });
  scene.add( gltf.scene );
	},
);

loader.load( './gltf/wall.glb', function ( gltf ) {			
  gltf.scene.traverse((o) => {
    if (o.isMesh) o.material = materials[1];
  });
  gltf.scene.traverse((o) => {
    if (o.isMesh) {
    o.castShadow = true;
    o.receiveShadow = true;
    }
  });
  scene.add( gltf.scene );
	},
);

loader.load( './gltf/white.glb', function ( gltf ) {			
  const newMat = new THREE.MeshStandardMaterial({
    roughness: 1,
    metalness: 0,
    color: 0xf1f0ea,
    clearcoat: 1,
    clearcoatRoughness: .2,
  })
  gltf.scene.traverse((o) => {
    if (o.isMesh) o.material = newMat;
  });
  gltf.scene.traverse((x) => {
    if (x.isMesh) {
    x.castShadow = true;
    x.receiveShadow = true;
    x.geometry.computeVertexNormals();
    }
  });
  scene.add( gltf.scene );
	},
);	

loader.load( './gltf/arch.glb', function ( gltf ) {		
  const newMat = new THREE.MeshPhysicalMaterial({
    roughness: .5,
    metalness: .2,
    color: 0xb0b0a9,
    clearcoat: 1,
    clearcoatRoughness: .2,
  })	
  gltf.scene.traverse((o) => {
    if (o.isMesh) o.material = newMat;
  });
  gltf.scene.traverse((x) => {
    if (x.isMesh) {
    x.castShadow = true;
    x.receiveShadow = true;
    x.geometry.computeVertexNormals();
    }
  });
  scene.add( gltf.scene );
	},
);	

loader.load( './gltf/black.glb', function ( gltf ) {			
  const newMat = new THREE.MeshStandardMaterial({
    roughness: 1,
    metalness:0.8,
    color: 0x0e0e10,
  })
  gltf.scene.traverse((o) => {
    if (o.isMesh) o.material = newMat;
  });
  gltf.scene.traverse((x) => {
    if (x.isMesh) {
    x.castShadow = true;
    x.receiveShadow = true;
    x.geometry.computeVertexNormals();
    }
  });
  scene.add( gltf.scene );
	},
);	

loader.load( './gltf/floor.glb', function ( gltf ) {			
  gltf.scene.traverse((o) => {
    if (o.isMesh) {
      o.material = materials[0];
  }
  });
  gltf.scene.traverse((o) => {
    if (o.isMesh) {
    o.castShadow = true;
    o.receiveShadow = true;
    }
  });
  scene.add( gltf.scene );
	},
);	

// loader.load( './gltf/london.glb', function ( gltf ) {		
//   const newMat = new THREE.MeshStandardMaterial({
//     roughness: .6,
//     metalness: 0.2,
//     color: 0xf1f0ea,
//     clearcoat: 1,
//     clearcoatRoughness: .2,
//   })
//   gltf.scene.traverse((o) => {
//     if (o.isMesh) o.material = newMat;
//   });
//   gltf.scene.traverse((o) => {
//     if (o.isMesh) {
//     o.castShadow = true;
//     o.receiveShadow = true;
//     }
//   });
//   scene.add( gltf.scene );
// 	},
// );	

loader.load( './gltf/table.glb', function ( gltf ) {		
  gltf.scene.traverse((o) => {
    if (o.isMesh) o.material = materials[6];
  });
  gltf.scene.traverse((x) => {
    if (x.isMesh) {
    x.castShadow = true;
    x.receiveShadow = true;
    }
  });
	scene.add( gltf.scene );
	},
);	 

loader.load( './gltf/table2.glb', function ( gltf ) {		
  // materials[4].map.repeat.set(  2, 8  );
  // materials[4].bumpMap.repeat.set(  2, 8  );
  // materials[4].map.rotation =(Math.PI);
  // materials[4].bumpMap.rotation =(Math.PI);
  gltf.scene.traverse((o) => {
    if (o.isMesh) o.material = materials[4];
  });
  gltf.scene.traverse((x) => {
    if (x.isMesh) {
    x.castShadow = true;
    x.receiveShadow = true;
    x.geometry.computeVertexNormals();
    }
  });
	scene.add( gltf.scene );
	},
);	

loader.load( './gltf/metal.glb', function ( gltf ) {		
  const newMat = new THREE.MeshStandardMaterial({
    roughness: .2,
    metalness: .8,
    transparent: false,
    color: 0x2b2b2c	,
  })
  gltf.scene.traverse((o) => {
    if (o.isMesh) o.material = newMat;
  });
  gltf.scene.traverse((x) => {
    if (x.isMesh) {
    x.castShadow = true;
    x.receiveShadow = true;
    x.geometry.computeVertexNormals();
    }
  });
	scene.add( gltf.scene );
	},
);

loader.load( './gltf/flooredge.glb', function ( gltf ) {		
  gltf.scene.traverse((o) => {
    if (o.isMesh) o.material = materials[2];
  });
  gltf.scene.traverse((x) => {
    if (x.isMesh) {
    x.castShadow = true;
    x.receiveShadow = true;
    x.geometry.computeVertexNormals();
    }
  });
	scene.add( gltf.scene );
	},
);

const loaderHDR = new RGBELoader(loadingManager);
loaderHDR.load(hdrTextureURL, function(texture){
  texture.mapping = THREE.EquirectangularReflectionMapping;
  scene.background = texture;
  // scene.environment = texture;
});

//  Load Light

const ambientLight = new THREE.AmbientLight( 0xffffff, .6 );
scene.add( ambientLight );

hemiLight = new THREE.HemisphereLight(
  0xffeeb1, // bright sky color
  0x000000, // dim ground color
  1 // intensity
);
scene.add( hemiLight );
			
const directionalLight = new THREE.DirectionalLight( 0xfff5b6, 10 );
directionalLight.position.set( 5.000, 6.000, -1.00 );
directionalLight.shadow.bias = -0.001;
directionalLight.target.position.set(0, 0, 0);
directionalLight.shadow.mapSize = new THREE.Vector2(1024 * 2, 1024 * 2);
const frustumSize = 15;
directionalLight.shadow.camera = new THREE.OrthographicCamera(-frustumSize / 2, frustumSize / 2, frustumSize/2 , -frustumSize/2 , .100, 10.000);
directionalLight.shadow.camera.far = 20.000;

directionalLight.castShadow = true;
scene.add( directionalLight );	

spotLight = new THREE.SpotLight(0xffa95c, 3000);
spotLight.position.set( -1.000, 3.400, 0 );
spotLight.target.position.set(0, 0, -1.000);
spotLight.angle = Math.PI/2.5;
spotLight.penumbra = .5;
spotLight.power = 40;
spotLight.decay = 1;
spotLight.shadow.bias = -0.001;
spotLight.shadow.mapSize = new THREE.Vector2(1024 * 2, 1024 * 2);
spotLight.shadow.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10 );
spotLight.castShadow = true;
scene.add(spotLight);

for (let i = 0; i < 3; i++) {
  const light = spotLight.clone();
  light.position.set(-2, 3.4, i);
  light.target.position.set(-2, 0, 0);
  scene.add(light);
  //Light helper
  // let spotLightHelper = new THREE.SpotLightHelper(light);
  // scene.add(spotLightHelper);
  // let cameraHelper = new THREE.CameraHelper(light.shadow.camera);
  // scene.add(cameraHelper)
}
for (let i = 0; i < 3; i++) {
  const light = spotLight.clone();
  light.position.set(2, 3.4, i);
  light.target.position.set(2, 0, 0);
  scene.add(light);
  //Light helper
  // let spotLightHelper = new THREE.SpotLightHelper(light);
  // scene.add(spotLightHelper);
  // let cameraHelper = new THREE.CameraHelper(light.shadow.camera);
  // scene.add(cameraHelper)
}
//Light for London
// const light = spotLight.clone();
// light.position.set(-2, 2.4, -1);
// light.target.position.set(-0.5, 1, -1.5);
// light.power = 100;
// light.angle = Math.PI/10;
// light.penumbra = .5;
// scene.add(light);

//Light helper

// let spotLightHelper = new THREE.SpotLightHelper(light);
// scene.add(spotLightHelper);
// let cameraHelper = new THREE.CameraHelper(light.shadow.camera);
// scene.add(cameraHelper)

let progressBar, progressContainer;

progressBar = document.getElementById("progress")
progressContainer = document.querySelector(".progress-bar-container")
loadingManager.onProgress = function(url, loaded, total){
  progressBar.value = (loaded/ total)*100;
}
loadingManager.onLoad = function() {
  progressContainer.style.display = "none";
}

}

function animate() {
  requestAnimationFrame( animate );
  render();
}

function render() {
  renderer.toneMappingExposure = Math.pow( 0.9, 5.0 ); // to allow for very bright scenes.
  renderer.shadowMap.enabled = true;

  if ( true !== previousShadowMap ) {
    for (let i = 0; i < materials.length; i++) {
      materials[i].needsUpdate = true;
    }
    previousShadowMap = true;
  }
  // const time = Date.now() * 0.0005;
  // bulbLight.position.y = Math.cos( time ) * 0.75 + 1.25;
  renderer.render( scene, camera );
}

}