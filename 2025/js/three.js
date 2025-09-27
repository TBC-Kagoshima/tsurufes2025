import * as THREE from "three";
import { GLTFLoader } from "https://unpkg.com/three@0.175.0/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "https://unpkg.com/three@0.175.0/examples/jsm/controls/OrbitControls.js";

const canvas = document.querySelector("#map");
const container = document.querySelector(".innerwrap")
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setClearColor(0xFFFFFF); 


// シーン
const scene = new THREE.Scene();

// カメラ
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
camera.position.set(0, 10, 30); // X:0, Y:200, Z:400

// ライト
const dirLight = new THREE.DirectionalLight(0xffffff, 2);
dirLight.position.set(500, 1000, 500); 
scene.add(dirLight);
scene.add(new THREE.AmbientLight(0xffffff, 1.5)); // 全体を明るく

// キャンバス比率を定義
const canvasRatio = { width: 2.5, height: 2 };

function setRendererSize() {
  // canvas 幅は画面幅に合わせ、最大 800px
  const width = container.clientWidth;   // 親要素の幅に合わせる
  // 高さは画面高さに合わせつつ、最大 600px に制限
  const height = Math.min(window.innerHeight, 600);

  // CSS で canvas のサイズも設定
  renderer.domElement.style.width = width + 'px';
  renderer.domElement.style.height = height + 'px';

  // レンダラーの内部サイズを設定（falseでCSSと同じサイズに）
  renderer.setSize(width, height, false);
  renderer.setPixelRatio(window.devicePixelRatio);

  // カメラのアスペクト比を更新
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

// 最初のサイズ設定
setRendererSize();

// ウィンドウリサイズ時
window.addEventListener('resize', setRendererSize);




// GLB ロード
const loader = new GLTFLoader();
let model;
loader.load("img/schoolmap.glb",
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
controls.enableZoom = true; // ズーム有効

// パン移動の最大・最小制限（カメラ座標で）
controls.minDistance = 20;  // ズームの最小距離
controls.maxDistance = 200;  // ズームの最大距離

// パン範囲を制限
controls.maxPolarAngle = Math.PI/2;   // 上向き
controls.minPolarAngle = Math.PI/6;   // 下向き

// 上下の可動域（ラジアン）
// 0に近いほど下向き、πに近いほど上向き
controls.minPolarAngle = Math.PI/4;   // 下限（少し下）
controls.maxPolarAngle = Math.PI/2;   // 上限（ほぼ真上）

controls.target.set(80, -50, 0); // 注視するポイントを設定
controls.update();               // 反映

function animate() {
  requestAnimationFrame(animate);
  controls.update();  // OrbitControls を使う場合必須
  renderer.render(scene, camera);
}
animate();


// 画像のテクスチャを読み込み
const textureLoader = new THREE.TextureLoader()
// ベースのパスを定義
const basePath = '../img/3d/';

const tex11 = textureLoader.load(basePath + '11.svg');
const tex12 = textureLoader.load(basePath + '12.svg');
const tex13 = textureLoader.load(basePath + '13.svg');
const tex14 = textureLoader.load(basePath + '14.svg');
const tex15 = textureLoader.load(basePath + '15.svg');
const tex16 = textureLoader.load(basePath + '16.svg');
const tex18 = textureLoader.load(basePath + '18.svg');
const tex21 = textureLoader.load(basePath + '21.svg');
const tex22 = textureLoader.load(basePath + '22.svg');
const tex23 = textureLoader.load(basePath + '23.svg');
const tex24 = textureLoader.load(basePath + '24.svg');
const tex25 = textureLoader.load(basePath + '25.svg');
const tex26 = textureLoader.load(basePath + '26.svg');
const tex27 = textureLoader.load(basePath + '27.svg');

const texshodo     = textureLoader.load(basePath + '書道部.svg');
const texkagaku    = textureLoader.load(basePath + '化学部.svg');
const texeleve     = textureLoader.load(basePath + 'エレベーター.svg');
const texquiz      = textureLoader.load(basePath + 'クイズ研究会.svg');
const texstairs    = textureLoader.load(basePath + '階段.svg');
const texyama      = textureLoader.load(basePath + '山岳部.svg');
const texphoto     = textureLoader.load(basePath + '写真部.svg');
const texfemale    = textureLoader.load(basePath + '女子トイレ.svg');
const texmath      = textureLoader.load(basePath + '数学研究.svg');
const textamokuteki= textureLoader.load(basePath + '多目的.svg');
const texmale      = textureLoader.load(basePath + '男子トイレ.svg');
const texsado      = textureLoader.load(basePath + '茶道部.svg');
const texart       = textureLoader.load(basePath + '美術部.svg');
const texhyaku     = textureLoader.load(basePath + '百人一首部.svg');
const texcentence  = textureLoader.load(basePath + '文芸部.svg');
const texhospital  = textureLoader.load(basePath + '保健室.svg');

// …必要な分だけ load()

// スプライトを作る関数
function createSprite(texture, position) {
  const material = new THREE.SpriteMaterial({ map: texture, transparent: true })
  const sprite = new THREE.Sprite(material)
  sprite.position.set(position.x, position.y, position.z)
  sprite.scale.set(11, 11, 1) // 大きさ調整（横, 縦, 奥行き）
  return sprite
}

// スプライト作成
const sprite11       = createSprite(tex11,       new THREE.Vector3(65, 20, 48))//
const sprite12       = createSprite(tex12,       new THREE.Vector3(65, 20, 33))//
const sprite13       = createSprite(tex13,       new THREE.Vector3(65, 20, 18))//
const sprite14       = createSprite(tex14,       new THREE.Vector3(65, 20, 3))//
const sprite15       = createSprite(tex15,       new THREE.Vector3(65, 20, -29))//
const sprite16       = createSprite(tex16,       new THREE.Vector3(65, 20, -44))//
const sprite18       = createSprite(tex18,       new THREE.Vector3(65, 20, -74))//
const sprite21       = createSprite(tex21,       new THREE.Vector3(65, 33, 48))//
const sprite22       = createSprite(tex22,       new THREE.Vector3(65, 33, 33))//
const sprite23       = createSprite(tex23,       new THREE.Vector3(65, 33, 18))//
const sprite24       = createSprite(tex24,       new THREE.Vector3(65, 33, 3))//
const sprite25       = createSprite(tex25,       new THREE.Vector3(65, 33, -29))//
const sprite26       = createSprite(tex26,       new THREE.Vector3(65, 33, -44))//
const sprite27       = createSprite(tex27,       new THREE.Vector3(65, 33, -59))//
const spriteShodo    = createSprite(texshodo,    new THREE.Vector3(29, 7, -70))//
const spriteKagaku   = createSprite(texkagaku,   new THREE.Vector3(65, 7, 3))//
const spriteEleve    = createSprite(texeleve,    new THREE.Vector3(48, 16, -5))
const spriteQuiz     = createSprite(texquiz,     new THREE.Vector3(65, 33,105))//
const spriteStairs   = createSprite(texstairs,   new THREE.Vector3(54, 18, -5))
const spriteYama     = createSprite(texyama,     new THREE.Vector3(65, 20, 76))//
const spritePhoto    = createSprite(texphoto,    new THREE.Vector3(70, 7, 127))//
const spriteFemale   = createSprite(texfemale,   new THREE.Vector3(63, 21, -5))
const spriteMath     = createSprite(texmath,     new THREE.Vector3(65, 33, 65))//
const spriteTamokuteki = createSprite(textamokuteki, new THREE.Vector3(-111, 7, 134))//
const spriteMale     = createSprite(texmale,     new THREE.Vector3(72, 24, -5))
const spriteSado     = createSprite(texsado,     new THREE.Vector3(116, 7, 103))//
const spriteArt      = createSprite(texart,      new THREE.Vector3(70, 46, 127))//
const spriteHyaku    = createSprite(texhyaku,    new THREE.Vector3(100, 7, 72))//
const spriteCentence = createSprite(texcentence, new THREE.Vector3(75, 20, 84))//
const spriteHospital = createSprite(texhospital, new THREE.Vector3(-10, 7, -19))//



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


