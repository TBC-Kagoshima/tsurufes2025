import * as THREE from "three";
import { GLTFLoader } from "https://unpkg.com/three@0.175.0/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "https://unpkg.com/three@0.175.0/examples/jsm/controls/OrbitControls.js";

const canvas = document.querySelector("#map");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
const canvasWidth = window.innerWidth / 2.1;
const canvasHeight = window.innerHeight / 2; 
renderer.setSize(canvasWidth, canvasHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0xFFFFFF); 

// シーン
const scene = new THREE.Scene();

// カメラ
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
camera.position.set(0, 150, 50);
camera.lookAt(0, 100, 0);

// ライト
const dirLight = new THREE.DirectionalLight(0xffffff, 2);
dirLight.position.set(500, 1000, 500); 
scene.add(dirLight);
scene.add(new THREE.AmbientLight(0xffffff, 1.5)); // 全体を明るく

// GLB ロード
const loader = new GLTFLoader();
let model;
loader.load("schoolmap.glb",
  (gltf) => {
    model = gltf.scene;
    model.scale.set(25,25,25); // 大きさ調整（必要に応じて変更）
    model.position.set(0, 0, 0);
    scene.add(model);
    console.log(model);
  },
  undefined,
  (err) => console.error(err)
);

const axesHelper = new THREE.AxesHelper(1000); // 100 は長さ
scene.add(axesHelper);


// controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enablePan = false; // 平行移動は不可
controls.enableZoom = false; // ズームはOK

// 上下の可動域（ラジアン）
// 0に近いほど下向き、πに近いほど上向き
controls.minPolarAngle = Math.PI/4;   // 下限（少し下）
controls.maxPolarAngle = Math.PI/2;   // 上限（ほぼ真上）

controls.target.set(0, 0, 0); // 注視するポイントを設定
controls.update();               // 反映

function animate() {
  requestAnimationFrame(animate);
  controls.update();  // OrbitControls を使う場合必須
  renderer.render(scene, camera);
}
animate();

// aタグのクリックで注視点変更
document.querySelectorAll("#location").forEach(a => {
  a.addEventListener("click", e => {
    e.preventDefault();

    const x = parseFloat(a.dataset.x);
    const y = parseFloat(a.dataset.y);
    const z = parseFloat(a.dataset.z);

    // target をアニメーションで移動
    gsap.to(controls.target, {
      duration: 1,
      x, y, z,
      onUpdate: () => controls.update()
    });

        gsap.to(camera.position, {
      duration: 1,
      x: x + 5,
      y: y + 150,
      z: z + 5,
      onUpdate: () => controls.update()
    });
  });
});

// 画像のテクスチャを読み込み
const textureLoader = new THREE.TextureLoader()
const tex11 = textureLoader.load('img/11.svg')
const tex12 = textureLoader.load('img/12.svg')
const tex13  = textureLoader.load('img/13.svg')
const tex14  = textureLoader.load('img/14.svg')
const tex15  = textureLoader.load('img/15.svg')
const tex16  = textureLoader.load('img/16.svg')
const tex18  = textureLoader.load('img/18.svg')
const tex21  = textureLoader.load('img/21.svg')
const tex22 = textureLoader.load('img/22.svg')
const tex23 = textureLoader.load('img/23.svg')
const tex24 = textureLoader.load('img/24.svg')
const tex25 = textureLoader.load('img/25.svg')
const tex26 = textureLoader.load('img/26.svg')
const tex27 = textureLoader.load('img/27.svg')
const texshodo = textureLoader.load('img/書道部.svg')
const texkagaku = textureLoader.load('img/化学部.svg')
const texeleve = textureLoader.load('img/エレベーター.svg')
const texquiz = textureLoader.load('img/クイズ研究会.svg')
const texstairs = textureLoader.load('img/階段.svg')
const texyama = textureLoader.load('img/山岳部.svg')
const texphoto = textureLoader.load('img/写真部.svg')
const texfemale = textureLoader.load('img/女子トイレ.svg')
const texmath = textureLoader.load('img/数学研究.svg')
const textamokuteki = textureLoader.load('img/多目的.svg')
const texmale = textureLoader.load('img/男子トイレ.svg')
const texsado = textureLoader.load('img/茶道部.svg')
const texart = textureLoader.load('img/美術部.svg')
const texhyaku = textureLoader.load('img/百人一首部.svg')
const texcentence = textureLoader.load('img/文芸部.svg')
const texhospital = textureLoader.load('img/保健室.svg')

// …必要な分だけ load()

// スプライトを作る関数
function createSprite(texture, position) {
  const material = new THREE.SpriteMaterial({ map: texture, transparent: true })
  const sprite = new THREE.Sprite(material)
  sprite.position.set(position.x, position.y, position.z)
  sprite.scale.set(2, 2, 1) // 大きさ調整（横, 縦, 奥行き）
  return sprite
}

// スプライト作成
const sprite11       = createSprite(tex11,       new THREE.Vector3(0, 0, -5))
const sprite12       = createSprite(tex12,       new THREE.Vector3(3, 1, -5))
const sprite13       = createSprite(tex13,       new THREE.Vector3(6, 2, -5))
const sprite14       = createSprite(tex14,       new THREE.Vector3(9, 3, -5))
const sprite15       = createSprite(tex15,       new THREE.Vector3(12, 4, -5))
const sprite16       = createSprite(tex16,       new THREE.Vector3(15, 5, -5))
const sprite18       = createSprite(tex18,       new THREE.Vector3(18, 6, -5))
const sprite21       = createSprite(tex21,       new THREE.Vector3(21, 7, -5))
const sprite22       = createSprite(tex22,       new THREE.Vector3(24, 8, -5))
const sprite23       = createSprite(tex23,       new THREE.Vector3(27, 9, -5))
const sprite24       = createSprite(tex24,       new THREE.Vector3(30, 10, -5))
const sprite25       = createSprite(tex25,       new THREE.Vector3(33, 11, -5))
const sprite26       = createSprite(tex26,       new THREE.Vector3(36, 12, -5))
const sprite27       = createSprite(tex27,       new THREE.Vector3(39, 13, -5))
const spriteShodo    = createSprite(texshodo,    new THREE.Vector3(42, 14, -5))
const spriteKagaku   = createSprite(texkagaku,   new THREE.Vector3(45, 15, -5))
const spriteEleve    = createSprite(texeleve,    new THREE.Vector3(48, 16, -5))
const spriteQuiz     = createSprite(texquiz,     new THREE.Vector3(51, 17, -5))
const spriteStairs   = createSprite(texstairs,   new THREE.Vector3(54, 18, -5))
const spriteYama     = createSprite(texyama,     new THREE.Vector3(57, 19, -5))
const spritePhoto    = createSprite(texphoto,    new THREE.Vector3(60, 20, -5))
const spriteFemale   = createSprite(texfemale,   new THREE.Vector3(63, 21, -5))
const spriteMath     = createSprite(texmath,     new THREE.Vector3(66, 22, -5))
const spriteTamokuteki = createSprite(textamokuteki, new THREE.Vector3(69, 23, -5))
const spriteMale     = createSprite(texmale,     new THREE.Vector3(72, 24, -5))
const spriteSado     = createSprite(texsado,     new THREE.Vector3(75, 25, -5))
const spriteArt      = createSprite(texart,      new THREE.Vector3(78, 26, -5))
const spriteHyaku    = createSprite(texhyaku,    new THREE.Vector3(81, 27, -5))
const spriteCentence = createSprite(texcentence, new THREE.Vector3(84, 28, -5))
const spriteHospital = createSprite(texhospital, new THREE.Vector3(87, 29, -5))



scene.add(sprite11)
scene.add(sprite12)
scene.add(sprite13)
scene.add(sprite14)
scene.add(sprite15)
scene.add(sprite16)
scene.add(sprite18)
scene.add(sprite21)
scene.add(sprite22)
scene.add(sprite23)
scene.add(sprite24)
scene.add(sprite25)
scene.add(sprite26)
scene.add(sprite27)
scene.add(spriteShodo)
scene.add(spriteKagaku)
scene.add(spriteEleve)
scene.add(spriteQuiz)
scene.add(spriteStairs)
scene.add(spriteYama)
scene.add(spritePhoto)
scene.add(spriteFemale)
scene.add(spriteMath)
scene.add(spriteTamokuteki)
scene.add(spriteMale)
scene.add(spriteSado)
scene.add(spriteArt)
scene.add(spriteHyaku)
scene.add(spriteCentence)
scene.add(spriteHospital)



window.addEventListener('resize', () => {
  const width = window.innerWidth
  const height = window.innerHeight

  camera.aspect = width / height
  camera.updateProjectionMatrix()

  renderer.setSize(width, height)
})
