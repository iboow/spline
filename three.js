import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import SplineLoader from '@splinetool/loader';

// Fonction pour créer et ajouter une scène à une div donnée
function createAndAddSceneToDiv(divId, splineCodeUrl) {
  const div = document.getElementById(divId);
  if (!div) {
    console.error(`Div avec l'ID ${divId} non trouvée.`);
    return;
  }

  // Créez une caméra et une scène spécifiques pour cette div
  const camera = new THREE.OrthographicCamera(-65, 65, 65, -65, -50000, 10000);
  const scene = new THREE.Scene();

  // Créez le renderer pour cette div
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(130, 130); // Taille spécifique pour chaque scène
  div.appendChild(renderer.domElement);

  // SplineLoader pour charger la scène
  const loader = new SplineLoader();
  loader.load(splineCodeUrl, (splineScene) => {
    scene.add(splineScene);
  });

  // Orbit controls pour cette caméra
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.125;

  // Redimensionnement de la scène lorsque la fenêtre est redimensionnée
  window.addEventListener('resize', () => {
    camera.left = -65;
    camera.right = 65;
    camera.top = 65;
    camera.bottom = -65;
    camera.updateProjectionMatrix();
    renderer.setSize(130, 130); // Taille spécifique pour chaque scène
  });

  // Fonction d'animation spécifique pour cette scène
  function animate(time) {
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();
}

// Appel de la fonction pour chaque div avec son URL splineCode spécifique
createAndAddSceneToDiv("3dEvent", "https://prod.spline.design/F1dzUxJwTlXMQOx4/scene.splinecode");
createAndAddSceneToDiv("3dDiscord", "https://prod.spline.design/sSUPxDUWy7XTBzAS/scene.splinecode");
createAndAddSceneToDiv("3dBook", "https://prod.spline.design/GN3xlMADe30nIM5W/scene.splinecode");
createAndAddSceneToDiv("3dEbook", "https://prod.spline.design/GN3xlMADe30nIM5W/scene.splinecode");
createAndAddSceneToDiv("3dVideo", "https://prod.spline.design/LulKwnrHdE5iMEuA/scene.splinecode");
createAndAddSceneToDiv("3dGarantie", "https://prod.spline.design/JJpPQXDiEuph9iF9/scene.splinecode");
