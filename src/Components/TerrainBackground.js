import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FirstPersonControls } from 'three/addons/controls/FirstPersonControls.js';
import { ImprovedNoise } from 'three/addons/math/ImprovedNoise.js';

const TerrainBackground = () => {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);

  useEffect(() => {
    let camera, scene, renderer, controls, mesh, texture;
    const worldWidth = 256, worldDepth = 256;
    const clock = new THREE.Clock();

    const init = () => {
      const container = containerRef.current;
      if (!container) return;

      // Camera setup
      camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000);
      camera.position.set(100, 800, -800);
      camera.lookAt(-100, 810, -800);
      cameraRef.current = camera;

      // Scene setup
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0xefd1b5);
      scene.fog = new THREE.FogExp2(0xefd1b5, 0.0025);

      // Generate terrain data
      const data = generateHeight(worldWidth, worldDepth);
      const geometry = new THREE.PlaneGeometry(7500, 7500, worldWidth - 1, worldDepth - 1);
      geometry.rotateX(-Math.PI / 2);

      const vertices = geometry.attributes.position.array;
      for (let i = 0, j = 0, l = vertices.length; i < l; i++, j += 3) {
        vertices[j + 1] = data[i] * 10;
      }

      // Generate texture
      texture = new THREE.CanvasTexture(generateTexture(data, worldWidth, worldDepth));
      texture.wrapS = THREE.ClampToEdgeWrapping;
      texture.wrapT = THREE.ClampToEdgeWrapping;

      // Mesh setup
      mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: texture }));
      scene.add(mesh);

      // Renderer setup
      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setAnimationLoop(animate);
      container.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      // Controls setup
      controls = new FirstPersonControls(camera, renderer.domElement);
      controls.movementSpeed = 150;
      controls.lookSpeed = 0.1;
      controlsRef.current = controls;

      // Handle resizing
      window.addEventListener('resize', onWindowResize);
    };

    const onWindowResize = () => {
      if (cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      }
    };

    const generateHeight = (width, height) => {
      let seed = Math.PI / 4;
      window.Math.random = function () {
        const x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
      };

      const size = width * height;
      const data = new Uint8Array(size);
      const perlin = new ImprovedNoise();
      const z = Math.random() * 0;

      let quality = 1;
      for (let j = 0; j < 4; j++) {
        for (let i = 0; i < size; i++) {
          const x = i % width;
          const y = ~~(i / width);
          data[i] += Math.abs(perlin.noise(x / quality, y / quality, z) * quality * 1.75);
        }
        quality *= 5;
      }
      return data;
    };

    const generateTexture = (data, width, height) => {
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext('2d');
      const image = context.getImageData(0, 0, canvas.width, canvas.height);
      const imageData = image.data;
      const sun = new THREE.Vector3(1, 1, 1).normalize();
      const vector3 = new THREE.Vector3();

      for (let i = 0, j = 0, l = imageData.length; i < l; i += 4, j++) {
        vector3.x = data[j - 2] - data[j + 2];
        vector3.y = 2;
        vector3.z = data[j - width * 2] - data[j + width * 2];
        vector3.normalize();

        const shade = vector3.dot(sun);
        imageData[i] = (96 + shade * 128) * (0.5 + data[j] * 0.007);
        imageData[i + 1] = (32 + shade * 96) * (0.5 + data[j] * 0.007);
        imageData[i + 2] = shade * 96 * (0.5 + data[j] * 0.007);
      }

      context.putImageData(image, 0, 0);
      return canvas;
    };

    const animate = () => {
      if (controlsRef.current) {
        controlsRef.current.update(clock.getDelta());
      }
      if (rendererRef.current && cameraRef.current) {
        rendererRef.current.render(scene, cameraRef.current);
      }
    };

    init();

    return () => {
      window.removeEventListener('resize', onWindowResize);
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        backdropFilter : 'blur (10px)', /* Apply blur effect */
        transform: "scaleX(-1)", /* Mirror the effect horizontally */
        overflow: 'hidden',
      }}
    />
  );
};

export default TerrainBackground;
