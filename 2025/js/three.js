import * as THREE from "three";
import { GLTFLoader } from "https://unpkg.com/three@0.175.0/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "https://unpkg.com/three@0.175.0/examples/jsm/controls/OrbitControls.js";

const canvas = document.querySelector("#map");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
const canvasWidth = window.innerWidth / 2.5;
const canvasHeight = window.innerHeight / 2; 
renderer.setSize(canvasWidth, canvasHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0xFFFFFF); 

// シーン
const scene = new THREE.Scene();

// カメラ
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
camera.position.set(0, 10, 30); // X:0, Y:200, Z:400
camera.lookAt(300, 100, 0);

// ライト
const dirLight = new THREE.DirectionalLight(0xffffff, 2);
dirLight.position.set(500, 1000, 500); 
scene.add(dirLight);
scene.add(new THREE.AmbientLight(0xffffff, 1.5)); // 全体を明るく

// GLB ロード
const loader = new GLTFLoader();
let model;
loader.load("./schoolmap.glb",
  (gltf) => {
    model = gltf.scene;
    model.scale.set(25,25,25); // 大きさ調整（必要に応じて変更）
    model.position.set(0, -100, 0);
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

controls.target.set(80, -50, 0); // 注視するポイントを設定
controls.update();               // 反映

const textureLoader = new THREE.TextureLoader();
const spriteMap = textureLoader.load('img/logo.png'); // 表示したい画像

const spriteMaterial = new THREE.SpriteMaterial({ map: spriteMap });
const sprite = new THREE.Sprite(spriteMaterial);

// 3D空間での位置指定
sprite.position.set(100, 50, 0); // X, Y, Z
sprite.scale.set(50, 50, 1);     // サイズ調整

scene.add(sprite);

function animate() {
  requestAnimationFrame(animate);
  controls.update();  // OrbitControls を使う場合必須
  renderer.render(scene, camera);
}
animate();
// リサイズ対応
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});