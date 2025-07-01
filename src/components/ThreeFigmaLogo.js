import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';

const ThreeFigmaLogo = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // 기본 세팅
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.z = 180;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(240, 240);
    mountRef.current.appendChild(renderer.domElement);

    // 조명
    scene.add(new THREE.AmbientLight(0xffffff, 1.2));
    const light = new THREE.DirectionalLight(0xffffff, 2);
    light.position.set(50, 50, 100);
    scene.add(light);

    const group = new THREE.Group();

    // SVG 전체 경로 데이터
    const svgString = `
      <svg xmlns="http://www.w3.org/2000/svg">
        <path d="M33.626 50.0117C33.626 40.99 40.95 33.666 49.9716 33.666C58.9932 33.666 66.3173 40.99 66.3173 50.0117C66.3173 59.0333 58.9932 66.3573 49.9716 66.3573C40.95 66.3573 33.626 59.0333 33.626 50.0117Z" fill="#1ABCFE"/>
        <path d="M0.98291 82.6543C0.98291 73.6327 8.30692 66.3087 17.3285 66.3087H33.6742V82.6543C33.6742 91.676 26.3502 99 17.3285 99C8.30692 99 0.98291 91.676 0.98291 82.6543Z" fill="#0ACF83"/>
        <path d="M33.626 1.02324V33.666H49.9716C58.9932 33.666 66.3173 26.342 66.3173 17.3204C66.3173 8.29875 58.9932 0.974731 49.9716 0.974731H33.626V1.02324Z" fill="#FF7262"/>
        <path d="M0.98291 17.3688C0.98291 26.3904 8.30692 33.7144 17.3285 33.7144H33.6742V1.07165H17.3285C8.30692 1.02315 0.98291 8.34715 0.98291 17.3688Z" fill="#F24E1E"/>
        <path d="M0.98291 50.0116C0.98291 59.0332 8.30692 66.3573 17.3285 66.3573H33.6742V33.7145H17.3285C8.30692 33.666 0.98291 40.99 0.98291 50.0116Z" fill="#A259FF"/>
      </svg>
    `;

    const loader = new SVGLoader();
    const svgData = loader.parse(svgString);
    const paths = svgData.paths;

    paths.forEach((path) => {
      const shapes = SVGLoader.createShapes(path);
      shapes.forEach((shape) => {
        const geometry = new THREE.ExtrudeGeometry(shape, {
          depth: 4,
          bevelEnabled: false,
        });
        const material = new THREE.MeshStandardMaterial({
          color: path.color ? new THREE.Color(path.color) : 0x000000,
        });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(-33, -50, 0); // 중심 정렬
        group.add(mesh);
      });
    });

    group.scale.y = -1
    scene.add(group);
    group.position.set(-10, 0, 0);

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

export default ThreeFigmaLogo;