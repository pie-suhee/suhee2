import * as THREE from 'three';
import { useEffect, useRef } from 'react';

const ThreeLogo = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // 기본 세팅
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.z = 230;

    const currentMount = mountRef.current;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    // renderer.setSize(200, 200);
    if (mountRef) {
      currentMount.appendChild(renderer.domElement);
    }

    // 조명
    const ambient = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambient);

    const directional = new THREE.DirectionalLight(0xffffff, 1);
    directional.position.set(5, 10, 50);
    scene.add(directional);

    const group = new THREE.Group();

    const triangles = [
      [[34, 2], [2, 133], [132, 95]],
      [[67, 114], [83, 48], [18, 67]],
      [[51, 58.6], [43, 91.1], [75, 81.9]],
      [[34.7, 123.7], [43, 91.1], [10.5, 100.4]],
      [[99.1, 105.1], [107.1, 72.6], [74.9, 81.8]],
      [[51, 58.6], [58.8, 26], [26.6, 35.3]],
    ];

    const material = new THREE.MeshStandardMaterial({
      color: 0x000000,
      roughness: 0.3,
      metalness: 0.2,
    });

    triangles.forEach((points) => {
      const vectors = points.map(([x, y]) =>
        new THREE.Vector3(x - 67, -(y - 67), 0)
      );
      vectors.push(vectors[0]); // 닫힌 삼각형

      for (let i = 0; i < vectors.length - 1; i++) {
        const curve = new THREE.LineCurve3(vectors[i], vectors[i + 1]);
        const tube = new THREE.TubeGeometry(curve, 8, 2, 6, false);
        const mesh = new THREE.Mesh(tube, material);
        group.add(mesh);
      }
    });

    scene.add(group);

    group.position.set(20, 0, 0);

    // 애니메이션
    let angle = 0;

    const animate = () => {
        angle += 0.01;
        group.rotation.x = Math.sin(angle) * 0.2; // 앞뒤로 기울임
        group.rotation.y = Math.cos(angle) * 0.3;

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    };
    animate();

    return () => {
      renderer.dispose();
      if (currentMount) currentMount.innerHTML = '';
    };
  }, []);

  return <div className="skill-icon" ref={mountRef} />;
};

export default ThreeLogo;