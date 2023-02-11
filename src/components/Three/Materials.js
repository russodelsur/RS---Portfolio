//Seperate file to store my materials

import * as THREE from 'three';

const loadingManager = new THREE.LoadingManager();
// Materials
const textureLoader = new THREE.TextureLoader(loadingManager);
//Floor maps
const mapFloor = new URL("../img/AChevron.jpg", import.meta.url);
const roughFloor = new URL("../img/AChevron_normal.jpg", import.meta.url);
const bumpFloor = new URL("../img/AChevron_bump.jpg", import.meta.url);

// Wall maps
const mapWall = new URL("../img/Plaster.jpg", import.meta.url);
const roughWall = new URL("../img/Plaster_normal.jpg", import.meta.url);
const bumpWall = new URL("../img/Plaster_bump.jpg", import.meta.url);

// Arch maps
const mapArch = new URL("../img/Ash.jpg", import.meta.url);
const roughArch = new URL("../img/Ash_normal.jpg", import.meta.url);
const bumpArch = new URL("../img/Ash_bump.jpg", import.meta.url);
let rotate = (Math.PI);

// walnut maps
const mapWalnut = new URL("../img/Walnut-Architextures.jpg", import.meta.url);
const roughWalnut = new URL("../img/Walnut_normal.jpg", import.meta.url);
const bumpWalnut = new URL("../img/Walnut_bump.jpg", import.meta.url);

// marble maps
const mapMarble = new URL("../img/Calacatta_Gold_Architextures.jpg", import.meta.url);
const roughMarble = new URL("../img/Calacatta-Gold-Architextures_rough.jpg", import.meta.url);
const bumpMarble = new URL("../img/Calacatta-Gold-Architextures_bump.jpg", import.meta.url);

// Work Logos
const coffee = new URL("../img/mycoffee.png", import.meta.url);
const nforma = new URL("../img/nforma.png", import.meta.url);
const byrusso = new URL("../img/byrusso.png", import.meta.url);
// const table = new URL("../img/table.png", import.meta.url);
const madeFor = new URL("../img/logo M4L-04.png", import.meta.url);
const hyperionDev = new URL("../img/HyperionDev.png", import.meta.url);

//artworks
const mapMarbella = new URL("../img/Marbella.png", import.meta.url);
const mapArt = new URL("../img/arch.jpg", import.meta.url);
const mapLA = new URL("../img/la.png", import.meta.url);

let floorMat = new THREE.MeshStandardMaterial( {
  roughness: 0.7,
  color: 0xffffff,
  metalness: 0.2,
  bumpScale: 0.05,
} );

let archMat = new THREE.MeshStandardMaterial( {
  roughness: 0.6,
  color: 0xffffff,
  metalness: 0.2,
  bumpScale: 0.05,
} );

let wallMat = new THREE.MeshStandardMaterial( {
    roughness: 0.6,
    color: 0xffffff,
    bumpScale: 0.001,
  } );

  let walnut = new THREE.MeshStandardMaterial( {
    roughness: 0.6,
    metalness: .2,
    color: 0xffffff,
    bumpScale: 0.001,
  } );

  let marble = new THREE.MeshStandardMaterial( {
    roughness: 0.3,
    metalness: 0.4,
    color: 0xffffff,
    bumpScale: 0.001,
  } );

  let marbleTable = new THREE.MeshStandardMaterial( {
    roughness: 0.3,
    metalness: 0.4,
    color: 0xffffff,
    bumpScale: 0.001,
  } );

  let marbella = new THREE.MeshStandardMaterial( {
    roughness: .2,
    metalness: 0,
    color: 0xffffff,
  } );

  let la = new THREE.MeshStandardMaterial( {
    roughness: .2,
    metalness: 0,
    color: 0xffffff,
  } );

  let artworkArch = new THREE.MeshStandardMaterial( {
    roughness: .2,
    metalness: 0.4,
    color: 0xffffff,
  } );

  //Arch
  textureLoader.load( mapArch, function ( map ) {
    map.wrapS = THREE.RepeatWrapping;
    map.wrapT = THREE.RepeatWrapping;
    map.anisotropy = 4;
    map.repeat.set(  15,15  );
    map.rotation =rotate;
    map.encoding = THREE.sRGBEncoding;
    archMat.map = map;
    archMat.needsUpdate = true;
  } );
  
  textureLoader.load( bumpArch, function ( map ) {
    map.wrapS = THREE.RepeatWrapping;
    map.wrapT = THREE.RepeatWrapping;
    map.anisotropy = 4;
    map.repeat.set(  15,15  );
    map.rotation =rotate;
    archMat.bumpMap = map;
    archMat.needsUpdate = true;
  } );
  
  textureLoader.load( roughArch, function ( map ) {
    map.wrapS = THREE.RepeatWrapping;
    map.wrapT = THREE.RepeatWrapping;
    map.anisotropy = 4;
    map.repeat.set(  15,15  );
    map.rotation =rotate;
    archMat.roughnessMap = map;
    archMat.needsUpdate = true;
  } );
  
  //Wall
  textureLoader.load( mapWall, function ( map ) {
    map.wrapS = THREE.RepeatWrapping;
    map.wrapT = THREE.RepeatWrapping;
    map.anisotropy = 4;
    map.repeat.set(  14, 14  );
    map.encoding = THREE.sRGBEncoding;
    wallMat.map = map;
    wallMat.needsUpdate = true;
  } );
  
  textureLoader.load( bumpWall, function ( map ) {
    map.wrapS = THREE.RepeatWrapping;
    map.wrapT = THREE.RepeatWrapping;
    map.anisotropy = 4;
    map.repeat.set(  14, 14  );
    wallMat.bumpMap = map;
    wallMat.needsUpdate = true;
  } );
  
  textureLoader.load( roughWall, function ( map ) {
    map.wrapS = THREE.RepeatWrapping;
    map.wrapT = THREE.RepeatWrapping;
    map.anisotropy = 4;
    map.repeat.set(  14, 14  );
    wallMat.roughnessMap = map;
    wallMat.needsUpdate = true;
  } );

// Floor
textureLoader.load( mapFloor, function ( map ) {
  map.wrapS = THREE.RepeatWrapping;
  map.wrapT = THREE.RepeatWrapping;
  map.anisotropy = 4;
  map.repeat.set(  8, 8  );
  map.encoding = THREE.sRGBEncoding;
  floorMat.map = map;
  floorMat.needsUpdate = true;
} );

textureLoader.load( bumpFloor, function ( map ) {
  map.wrapS = THREE.RepeatWrapping;
  map.wrapT = THREE.RepeatWrapping;
  map.anisotropy = 4;
  map.repeat.set(  8, 8  );
  floorMat.bumpMap = map;
  floorMat.needsUpdate = true;
} );

textureLoader.load( roughFloor, function ( map ) {
  map.wrapS = THREE.RepeatWrapping;
  map.wrapT = THREE.RepeatWrapping;
  map.anisotropy = 4;
  map.repeat.set(  8, 8  );
  floorMat.roughnessMap = map;
  floorMat.needsUpdate = true;
} );

// Walnut
textureLoader.load( mapWalnut, function ( map ) {
  map.wrapS = THREE.RepeatWrapping;
  map.wrapT = THREE.RepeatWrapping;
  map.anisotropy = 4;
  map.rotation =rotate;
  map.repeat.set(  6, 6  );
  map.encoding = THREE.sRGBEncoding;
  walnut.map = map;
  walnut.needsUpdate = true;
} );

textureLoader.load( roughWalnut, function ( map ) {
  map.wrapS = THREE.RepeatWrapping;
  map.wrapT = THREE.RepeatWrapping;
  map.anisotropy = 4;
  map.rotation =rotate;
  map.repeat.set(  6, 6  );
  walnut.roughnessMap = map;
  walnut.needsUpdate = true;
} );

textureLoader.load( bumpWalnut, function ( map ) {
  map.wrapS = THREE.RepeatWrapping;
  map.wrapT = THREE.RepeatWrapping;
  map.anisotropy = 4;
  map.rotation =rotate;
  map.repeat.set(  6, 6  );
  walnut.bumpMap = map;
  walnut.needsUpdate = true;
} );

//marble
textureLoader.load( mapMarble, function ( map ) {
  map.wrapS = THREE.RepeatWrapping;
  map.wrapT = THREE.RepeatWrapping;
  map.anisotropy = 4;
  map.repeat.set(  2, 2  );
  map.encoding = THREE.sRGBEncoding;
  marble.map = map;
  marble.needsUpdate = true;
} );

textureLoader.load( roughMarble, function ( map ) {
  map.wrapS = THREE.RepeatWrapping;
  map.wrapT = THREE.RepeatWrapping;
  map.anisotropy = 4;
  map.repeat.set(  2, 2  );
  marble.roughnessMap = map;
  marble.needsUpdate = true;
} );

textureLoader.load( bumpMarble, function ( map ) {
  map.wrapS = THREE.RepeatWrapping;
  map.wrapT = THREE.RepeatWrapping;
  map.anisotropy = 4;
  map.repeat.set(  2, 2  );
  marble.bumpMap = map;
  marble.needsUpdate = true;
} );

//marble Table
textureLoader.load( mapMarble, function ( map ) {
  map.wrapS = THREE.RepeatWrapping;
  map.wrapT = THREE.RepeatWrapping;
  map.anisotropy = 4;
  map.repeat.set(  6, 2  );
  map.encoding = THREE.sRGBEncoding;
  marbleTable.map = map;
  marbleTable.needsUpdate = true;
} );

textureLoader.load( roughMarble, function ( map ) {
  map.wrapS = THREE.RepeatWrapping;
  map.wrapT = THREE.RepeatWrapping;
  map.anisotropy = 4;
  map.repeat.set(  6, 2  );
  marbleTable.roughnessMap = map;
  marbleTable.needsUpdate = true;
} );

textureLoader.load( bumpMarble, function ( map ) {
  map.wrapS = THREE.RepeatWrapping;
  map.wrapT = THREE.RepeatWrapping;
  map.anisotropy = 4;
  map.repeat.set(  6, 2  );
  marbleTable.bumpMap = map;
  marbleTable.needsUpdate = true;
} );


// Marbella
 textureLoader.load( mapMarbella, function ( map ) {
  map.wrapS = THREE.ClampToEdgeWrapping;
  map.wrapT = THREE.MirroredRepeatWrapping;
  map.anisotropy = 4;
  map.rotation = Math.PI/2;
  map.offset.x = -15/16;
  map.repeat.set(  .97*2, .67*2  );
  map.encoding = THREE.sRGBEncoding;
  marbella.map = map;
  marbella.needsUpdate = true;
} );

// LA
textureLoader.load( mapLA, function ( map ) {
  map.wrapS = THREE.ClampToEdgeWrapping;
  map.wrapT = THREE.MirroredRepeatWrapping;
  map.anisotropy = 4;
  map.rotation = Math.PI/2;
  map.offset.x = 0/16;
  map.repeat.set(  .97*2, .67*2  );
  map.encoding = THREE.sRGBEncoding;
  la.map = map;
  la.needsUpdate = true;
} );

// Arch
textureLoader.load( mapArt, function ( map ) {
  map.wrapS = THREE.ClampToEdgeWrapping;
  map.wrapT = THREE.MirroredRepeatWrapping;
  map.anisotropy = 4;
  map.rotation = Math.PI/2;
  map.offset.x = 0/16;
  map.repeat.set(  .97*2, .67*2  );
  map.encoding = THREE.sRGBEncoding;
  artworkArch.map = map;
  artworkArch.needsUpdate = true;
} );

let screenMat = new THREE.MeshStandardMaterial( {
  roughness: 1,
  color: 0xffffff,
  metalness: 1,
} );


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
waitForElm('.coffee').then((elm) => {
  console.log("loaded");
  elm.addEventListener("mouseover", function(){ 
  console.log("listening");
  textureLoader.load( coffee, function ( map ) {
    map.anisotropy = 4;
    map.repeat.set(  2 ,2  );
    map.encoding = THREE.sRGBEncoding;
    map.offset.x = -4/16;
    screenMat.map = map;
    screenMat.color = 0x000000;
    screenMat.needsUpdate = true;
  });
  })
});
waitForElm('.made').then((elm) => {
  elm.addEventListener("mouseover", function(){ 
  textureLoader.load( madeFor, function ( map ) {
    map.anisotropy = 4;
    map.repeat.set(  12/8 ,12  );
    map.offset.x = -1/16;
    map.offset.y = -35/16;
    map.encoding = THREE.sRGBEncoding;
    screenMat.map = map;
    screenMat.needsUpdate = true;
  });
  })
});

waitForElm('.forma').then((elm) => {
  elm.addEventListener("mouseover", function(){ 
  textureLoader.load( nforma, function ( map ) {
    map.anisotropy = 4;
    map.repeat.set(  2 ,2  );
    map.encoding = THREE.sRGBEncoding;
    map.offset.x = -4/16;
    screenMat.map = map;
    screenMat.needsUpdate = true;
  });
  })
});

waitForElm('.designbyruso').then((elm) => {
  elm.addEventListener("mouseover", function(){ 
  textureLoader.load( byrusso, function ( map ) {
    map.anisotropy = 4;
    map.repeat.set(  2 ,2/1.3  );
    map.encoding = THREE.sRGBEncoding;
    map.offset.x = -4/16;
    map.offset.y = 3.5/16;
    screenMat.map = map;
    screenMat.needsUpdate = true;
  });
  })
});

waitForElm('.periodic').then((elm) => {
  elm.addEventListener("mouseover", function(){ 
  textureLoader.load( hyperionDev, function ( map ) {
    map.anisotropy = 4;
    map.repeat.set(  7/4 ,7 );
    map.encoding = THREE.sRGBEncoding;
    map.offset.x = -3/16;
    map.offset.y = -15/16;
    screenMat.map = map;
    screenMat.needsUpdate = true;
  });
  })
});
// waitForElm('.employ').then((elm) => {
//   console.log("loaded");
//   elm.addEventListener("mouseover", function(){ 
//   console.log("listening");
//   textureLoader.load( hyperionDev, function ( map ) {
//     map.anisotropy = 4;
//     map.repeat.set(  2 ,2/1.3  );
//     map.encoding = THREE.sRGBEncoding;
//     map.offset.x = -4/16;
//     map.offset.y = 3.5/16;
//     screenMat.map = map;
//     // screenMat.color = 0x75bffe;
//     screenMat.needsUpdate = true;
//   });
//   })
// });

let materials = [];

materials.push(floorMat, wallMat, archMat, screenMat, walnut, marble, marbleTable, marbella, la, artworkArch);

export default materials;