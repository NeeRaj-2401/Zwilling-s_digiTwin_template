<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";
  import { onMount } from "svelte";
  import * as THREE from "three";
  import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
  import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

  let scene: any, camera: any, renderer: any, controls: any,  modell: any;

  onMount(() => {
    // Create a scene
    scene = new THREE.Scene();
    const renderContainer: any = document.getElementById("model");

    // Create a camera
    camera = new THREE.PerspectiveCamera( 75,  renderContainer?.clientWidth / window.innerHeight,  0.1,  1000 );
    camera.position.set(0,0,5);

    // Create a WebGLRenderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderContainer.appendChild(renderer.domElement);
    renderer.setSize(renderContainer?.clientWidth, window.innerHeight);
    renderer.setClearColor(0x000f15);
    camera.updateProjectionMatrix();

    //border-radius to canvas element
    const canvas = renderer.domElement;
    canvas.style.borderRadius = "40px";

    // Create and adjust OrbitControls settings for smoother interaction
    controls = new OrbitControls(camera, renderer.domElement);
    controls.rotateSpeed = controls.zoomSpeed = 0.2;
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;

    // Load the GLB model
    const loader = new GLTFLoader();
    const url = "https://lab40.in/furnace/model/furnance-P.glb";

    loader.load(url, (gltf: any) => {
      modell = gltf.scene;
      const model = gltf.scene;
      model.scale.set(0.5, 0.5, 0.5);

      const boundingBox = new THREE.Box3().setFromObject(model);
      const center = boundingBox.getCenter(new THREE.Vector3());
      model.position.sub(center);
      model.glass = new THREE.MeshBasicMaterial({
        color: "cyan",
        transparent: true,
        opacity: 0.2,
      });
      scene.add(model.glass);

      scene.add(model);
    });

    // lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);
    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x000000, 3.0);
    scene.add(hemisphereLight);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      controls.update();
    };

    animate();

    // Handle window resize
    window.addEventListener("resize", () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    });
  });
</script>

<svelte:head>
  <title>Furnace</title>
  <!-- <link rel="icon" href='{favicon}'> -->
</svelte:head>

<div class="bg-black min-h-screen">
  <Navbar />

  <main class="px-11">
    <!-- Main section for 3D element -->
    <section class="h-max pt-6">
      <div id="model" class="w-full relative z-10"></div>
    </section>
  </main>
</div>