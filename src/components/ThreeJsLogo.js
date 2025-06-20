import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three-stdlib';
import { useEffect, useRef } from 'react';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

const ThreeJsLogo = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // 기본 세팅
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
        camera.position.z = 50;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        // renderer.setSize(200, 200);
        mountRef.current.appendChild(renderer.domElement);

        // 조명
        const ambient = new THREE.AmbientLight(0xffffff, 1.5);
        scene.add(ambient);

        const directional = new THREE.DirectionalLight(0xffffff, 1);
        directional.position.set(5, 10, 50);
        scene.add(directional);

        // 노란색 큐브 (Rounded 처리 대신 bevel로 표현)
        const cubeGeometry = new RoundedBoxGeometry(30, 30, 8, 10, 3);
        const cubeMaterial = new THREE.MeshStandardMaterial({
            color: 0xffe600,      // 노란색
            metalness: 0,       // 금속성: 0~1 (0: 플라스틱, 1: 금속)
            roughness: 0.4        // 표면 거칠기: 0~1 (0: 매끈, 1: 거칠)
        });
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        scene.add(cube);

        // JS 텍스트
        const loader = new FontLoader();
        loader.load('/fonts/helvetiker_bold.typeface.json', (font) => {
            const textGeometry = new TextGeometry('JS', {
                font: font,
                size: 8,
                height: 0,
                depth: 5,
                curveSegments: 12
            });

            textGeometry.computeBoundingBox();
            const bbox = textGeometry.boundingBox;

            const xMid = bbox.min.x + 2;
            const yMin = bbox.max.y + 2;
            const zMid = bbox.min.z;

            textGeometry.translate(-xMid, -yMin, -zMid);

            const textMaterial = new THREE.MeshStandardMaterial({ color: 0x222222 });
            const textMesh = new THREE.Mesh(textGeometry, textMaterial);
            scene.add(textMesh);

            // 애니메이션
            let angle = 0;

            const animate = () => {
                angle += 0.01;
                cube.rotation.x = Math.sin(angle) * 0.2; // 앞뒤로 기울임
                cube.rotation.y = Math.cos(angle) * 0.3;
                textMesh.rotation.copy(cube.rotation); // 텍스트도 함께 회전

                renderer.render(scene, camera);
                requestAnimationFrame(animate);
            };
            animate();
        });

        return () => {
            renderer.dispose();
            if (mountRef.current) {
                mountRef.current.innerHTML = '';
            }
        };
    }, []);

    return <div className="skill-icon" ref={mountRef} />;
};

export default ThreeJsLogo;
