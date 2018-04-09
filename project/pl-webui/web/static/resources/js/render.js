var container;
var camera, scene, renderer, controls;
var mouseX = 0, mouseY = 0;
var windowHalfX = window.innerWidth/2; var windowHalfY = window.innerHeight/2;

// Files to Load
var fbxObject = '/static/resources/model/liver_healthy.fbx';

init(); animate();

function init() {
  container = document.createElement('div'); document.body.appendChild(container);
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 6500);
  camera.position.set(0, 0, 650);

  // Build Scene & Lighting
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x263238);

  var pointLight = new THREE.PointLight(0xaaaaaa, 0.4); camera.add(pointLight); scene.add(camera);
    
  var hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444); hemiLight.position.set(0, 200, 0); scene.add(hemiLight);

  var dirLight = new THREE.DirectionalLight(0xffffff); dirLight.position.set(0, 200, 100); dirLight.castShadow = true;
  dirLight.shadow.camera.top = 180; dirLight.shadow.camera.bottom = -100; dirLight.shadow.camera.left = -120; dirLight.shadow.camera.right = 120;
  scene.add(dirLight);
  
  // Tracking of data
  var manager = new THREE.LoadingManager(); manager.onProgress = function (item, loaded, total) {
    console.log(item, loaded, total);
  };

  // Model
  var onProgress = function (xhr) {
    if (xhr.lengthComputable) {
      var percentComplete = xhr.loaded / xhr.total * 100; console.log(Math.round(percentComplete, 2) + '% downloaded');
    }
  };

  var onError = function (xhr) {
  };

  // Load model using FBXLoader
  var loader = new THREE.FBXLoader(manager);
  loader.load(fbxObject, function (object) {
	 scene.add(object); 
  }, undefined, function (error) {
	  console.error(error);
  });
  
  renderer = new THREE.WebGLRenderer(); 
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  // Control Setup
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enablePan = false; controls.enableZoom = true;
  controls.enableDamping = true; controls.dampingFactor = 1.0;
  controls.maxDistance = 6000; controls.minDistance = 350;
  controls.rotateSpeed = .5; controls.zoomSpeed = 0.5;

  window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
  windowHalfX = window.innerWidth / 2; windowHalfY = window.innerHeight / 2;

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);

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

function switchModel(model) {
	
//	renderer.clear(scene, camera);
	
	if(model == "healthy") {
		fbxObject = '/static/resources/model/liver_healthy.fbx'
	} else if(model == "fatty") {
		fbxObject = '/static/resources/model/liver_fatty.fbx'
	} else if(model == "fibrosis") {
		fbxObject = '/static/resources/model/liver_fibrosis.fbx'
	} else if(model == "cirrhosis") {
		fbxObject = '/static/resources/model/liver_cirrhosis.fbx'
	} else if(model == "benign") {
		fbxObject = '/static/resources/model/liver_benigntumor.fbx'
	} else if(model == "polycystic") {
		fbxObject = '/static/resources/model/liver_polycystic.fbx'
	} else {
		alert("JS Error: This should be unreachable.");
		fbxObject = '/static/resources/model/liver_healthy.fbx'
	}
	
	init(); animate();
}
