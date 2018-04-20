THREE.Cache.enabled = true;

var container;
var camera, scene, renderer, controls;
var mouseX = 0, mouseY = 0;
var windowHalfX = window.innerWidth/2; var windowHalfY = window.innerHeight/2;
var loader;

// Files to Load
var fbxPathHealthy = '/static/resources/model/liver_healthy.fbx';
var fbxPathFatty = '/static/resources/model/liver_fatty.fbx';
var fbxPathFibrosis = '/static/resources/model/liver_fibrosis.fbx';
var fbxPathCirrhosis = '/static/resources/model/liver_cirrhosis.fbx';
var fbxPathBenign = '/static/resources/model/liver_benigntumor.fbx';
var fbxPathPoly = '/static/resources/model/liver_polycystic.fbx';
var fbxPathCancer = '/static/resources/model/liver_cancer.fbx';

var fbxObjectHealthy = null;
var fbxObjectFatty = null;
var fbxObjectFibrosis = null;
var fbxObjectCirrhosis = null;
var fbxObjectBenign = null;
var fbxObjectPoly = null;
var fbxObjectCancer = null;

var currentModel = null;

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
  var manager = new THREE.LoadingManager();
  manager.onProgress = function (item, loaded, total) {
    console.log(item, loaded, total);
  };

  // Model
  var onProgress = function (xhr) {
    if (xhr.lengthComputable) {
      var percentComplete = xhr.loaded / xhr.total * 100; console.log(Math.round(percentComplete, 2) + '% downloaded');
    } 
  };

  var onError = function (xhr) {
    console.error(xhr);
  };

  // Load model using FBXLoader
  loader = new THREE.FBXLoader(manager);
  // loadObj(fbxPath);

  loader.load(fbxPathHealthy, function (object) {
    object.name = 'healthy';
    fbxObjectHealthy = object;
    scene.add(object);
    currentModel = fbxObjectHealthy;
  }, onProgress, onError);

  loader.load(fbxPathFatty, function (object) {
    object.name = 'fatty';
    fbxObjectFatty = object;
  }, onProgress, onError);

  loader.load(fbxPathFibrosis, function (object) {
    object.name = 'fibrosis';
    fbxObjectFibrosis = object;
  }, onProgress, onError);

  loader.load(fbxPathCirrhosis, function (object) {
    object.name = 'cirrhosis';
    fbxObjectCirrhosis = object;
  }, onProgress, onError);

  loader.load(fbxPathBenign, function (object) {
    object.name = 'benign';
    fbxObjectBenign = object;
  }, onProgress, onError);

  loader.load(fbxPathPoly, function (object) {
    object.name = 'polycystic';
    fbxObjectPoly = object;
  }, onProgress, onError);

  loader.load(fbxPathCancer, function (object) {
    object.name = 'cancer';
    fbxObjectCancer = object;
  }, onProgress, onError);

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

	renderer.clear(scene, camera);
   	removeEntity(currentModel);

	switch(model) {
		case 'healthy':
			scene.add(fbxObjectHealthy);
			currentModel = fbxObjectHealthy;
			document.getElementById('slideDisease').innerHTML = 'Healthy Liver';
			updateDisease(1);
			break;
		case 'fatty':
			scene.add(fbxObjectFatty);
			currentModel = fbxObjectFatty;
			document.getElementById('slideDisease').innerHTML = 'Fatty Liver Disease';
			updateDisease(197315008);
			break;
		case 'fibrosis':
			scene.add(fbxObjectFibrosis);
			currentModel = fbxObjectFibrosis;
			document.getElementById('slideDisease').innerHTML = 'Liver Fibrosis';
			updateDisease(93469005);
			break;
		case 'cirrhosis':
			scene.add(fbxObjectCirrhosis);
			currentModel = fbxObjectCirrhosis;
			document.getElementById('slideDisease').innerHTML = 'Liver Cirrhosis';
			updateDisease(19943007);
			break;
		case 'benign':
			scene.add(fbxObjectBenign);
			currentModel = fbxObjectBenign;
			document.getElementById('slideDisease').innerHTML = 'Benign Tumors';
			updateDisease(93469006);
			break;
		case 'polycystic':
			scene.add(fbxObjectPoly);
			currentModel = fbxObjectPoly;
			document.getElementById('slideDisease').innerHTML = 'Polycystic Liver';
			updateDisease(716196007);
			break;
		case 'cancer':
			scene.add(fbxObjectCancer);
			currentModel = fbxObjectCancer;
			document.getElementById('slideDisease').innerHTML = 'Liver Cancer';
			updateDisease(93870000);
			break;
		default:
			console.log('JS Error: This should be unreachable.');;
			scene.add(fbxObjectHealthy);
			currentModel = fbxObjectHealthy;
			document.getElementById('slideDisease').innerHTML = 'Healthy Liver';
			updateDisease(1);
	}
}

function removeEntity(object){
    var selectedObject = scene.getObjectByName(object.name);
    scene.remove(selectedObject);
}

function updateDisease(snomed) {
	req = $.ajax({
		url : '/update_Disease',
		type : 'POST',
		data : { Patient_snomed_code : snomed }
	});
		
	req.done(function(data) {
		$('#Disease_name').text(data.Disease_name);
		$('#Disease_overview').text(data.Disease_overview);
		$('#Disease_symptoms').text(data.Disease_symptoms);
		$('#Disease_treatment').text(data.Disease_treatment);
		$('#Disease_causes').text(data.Disease_causes);
		$('#Disease_risk_factors').text(data.Disease_risk_factors);
		$('#Disease_complications').text(data.Disease_complications);
		$('#Disease_preventions').text(data.Disease_preventions);
		$('#Disease_resources').text(data.Disease_resources);
	});
}
