var container;
var camera, scene, renderer, controls;
var mouseX = 0, mouseY = 0;
var windowHalfX = window.innerWidth/2; var windowHalfY = window.innerHeight/2;

init(); animate();

function init() {
  container = document.createElement('div'); document.body.appendChild(container);
  camera = new THREE.PerspectiveCamera(45, window.innerWidth /
    window.innerHeight, 1, 2000); camera.position.z = 1600;

  // scene
  scene = new THREE.Scene();

  var ambientLight = new THREE.AmbientLight(0xcccccc, 0.4); scene.add(ambientLight);

  var pointLight = new THREE.PointLight(0xffffff, 0.8); camera.add(pointLight); scene.add(camera);

  // texture
  var manager = new THREE.LoadingManager(); manager.onProgress = function (item, loaded, total) {
    console.log(item, loaded, total);
  };

  var textureLoader = new THREE.TextureLoader(manager); var texture =
    textureLoader.load('resources/textures/backgrounddetailed6.jpg');

  // model
  var onProgress = function (xhr) {
    if (xhr.lengthComputable) {
      var percentComplete = xhr.loaded / xhr.total * 100; console.log(Math.round(percentComplete, 2) + '% downloaded');
    }
  };

  var onError = function (xhr) {
  };

  // Load using OBJLoader
  // var loader = new THREE.OBJLoader(manager); loader.load('resources/model/Liver.obj', function (object) {
  //
  //   object.traverse(function (child) {
  //     if (child instanceof THREE.Mesh) {
  //       child.material.map = texture;
  //     }
  //   } );
  //
  //   object.position.y = 0; scene.add(object);
  // }, onProgress, onError);

  // Load using JSONLoader
  var loader = new THREE.JSONLoader(manager);

  loader.load('resources/model/liverhealthy.json', function (geometry, materials) {
    var material = materials[0];
    var object = new THREE.Mesh(geometry, material);
    // object.scale.set(0.5,0.5,0.5);
    scene.add(object);
  }, );

  renderer = new THREE.WebGLRenderer(); renderer.setPixelRatio(
    window.devicePixelRatio); renderer.setSize(window.innerWidth,
      window.innerHeight); container.appendChild(renderer.domElement);

  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 1.0;
  controls.enableZoom = true;

  window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
  windowHalfX = window.innerWidth / 2; windowHalfY = window.innerHeight / 2;

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( indow.innerWidth, window.innerHeight);

}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  render();

}

function render() {
  camera.lookAt(scene.position);
  renderer.render(scene, camera);

}
