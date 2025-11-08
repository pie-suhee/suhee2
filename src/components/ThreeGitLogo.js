import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';

const ThreeGitLogo = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // 기본 세팅
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.z = 180;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    // renderer.setSize(240, 240);
    if (mountRef) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // 조명
    scene.add(new THREE.AmbientLight(0xffffff, 1.2));
    const light = new THREE.DirectionalLight(0xffffff, 2);
    light.position.set(50, 50, 100);
    scene.add(light);

    const group = new THREE.Group();

    // SVG Path 데이터를 직접 작성 (한 Path)
    const svgPath = "M96.1518 44.6338L53.3641 1.84837C50.9014 -0.615797 46.9049 -0.615797 44.4392 1.84837L35.5541 10.7334L46.8252 22.0046C49.4444 21.1195 52.448 21.7133 54.5359 23.8011C56.6337 25.9024 57.2232 28.9316 56.3167 31.5592L67.179 42.4219C69.807 41.5165 72.8393 42.1022 74.9382 44.2047C77.8717 47.137 77.8717 51.8896 74.9382 54.8239C72.004 57.7585 67.2514 57.7585 64.3156 54.8239C62.109 52.615 61.5639 49.3745 62.681 46.6562L52.551 36.5262L52.5498 63.1841C53.2842 63.5472 53.9549 64.0268 54.5359 64.6044C57.4693 67.5367 57.4693 72.2897 54.5359 75.2263C51.6016 78.1594 46.8467 78.1594 43.9166 75.2263C40.9831 72.2897 40.9831 67.5371 43.9166 64.6047C44.6196 63.9014 45.4551 63.3444 46.3747 62.9659V36.0596C45.4537 35.6836 44.6178 35.1263 43.9166 34.4207C41.694 32.2012 41.1596 28.94 42.2985 26.2109L31.1877 15.099L1.84898 44.4359C-0.616328 46.9023 -0.616328 50.8993 1.84898 53.3638L44.6375 96.15C47.1009 98.6146 51.0967 98.6146 53.5631 96.15L96.1514 53.5625C98.616 51.0972 98.6163 47.098 96.1518 44.6338Z";

    const loader = new SVGLoader();
    const svgData = loader.parse(`<svg><path d="${svgPath}" /></svg>`);
    const paths = svgData.paths;

    paths.forEach((path) => {
      const shapes = SVGLoader.createShapes(path);
      shapes.forEach((shape) => {
        const geometry = new THREE.ExtrudeGeometry(shape, {
          depth: 4,
          bevelEnabled: false,
        });
        const material = new THREE.MeshStandardMaterial({
          color: 0xde4c36,
        });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(-49, -49, 0); // 중심 정렬
        group.add(mesh);
      });
    });

    scene.add(group);

    // 애니메이션
    let angle = 0;
    const animate = () => {
      angle += 0.01;
      group.rotation.x = Math.sin(angle) * 0.2;
      group.rotation.y = Math.cos(angle) * 0.3;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      renderer.dispose();
      if (mountRef.current) mountRef.current.innerHTML = '';
    };
  }, []);

  return <div className="skill-icon" ref={mountRef} />;
};

export default ThreeGitLogo;