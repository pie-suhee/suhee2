import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ThreeHeart = ({ color1, color2 }) => {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
        camera.position.z = 3;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.localClippingEnabled = true;
        mountRef.current.appendChild(renderer.domElement);

        // 조명
        scene.add(new THREE.AmbientLight(0xffffff, 6));
        const light = new THREE.DirectionalLight(0xffffff, 6);
        light.position.set(10, 10, 10);
        scene.add(light);

        // GLTF 로딩
        const loader = new GLTFLoader();

        // 왼쪽 하트: 빨간색 + 왼쪽 반만
        loader.load('/models/ruby_heart_gem.glb', (gltf) => {
            const leftGem = gltf.scene;

            leftGem.traverse((child) => {
                if (child.isMesh) {
                    child.material = new THREE.MeshPhysicalMaterial({
                        color: Number(`0x${color1}`),
                        metalness: 0.6,
                        roughness: 0,
                        transmission: 0.3,
                        ior: 2.4,
                        thickness: 1.5,
                        clearcoat: 1,
                        clearcoatRoughness: 0,
                        clippingPlanes: [new THREE.Plane(new THREE.Vector3(-1, 0, 0), 0)],
                        clipShadows: true,
                    });
                }
            });

            scene.add(leftGem);
        });

        // 오른쪽 하트: 파란색 + 오른쪽 반만
        loader.load('/models/ruby_heart_gem.glb', (gltf) => {
            const rightGem = gltf.scene;

            rightGem.traverse((child) => {
                if (child.isMesh) {
                    child.material = new THREE.MeshPhysicalMaterial({
                        color: Number(`0x${color2}`),
                        metalness: 0.6,
                        roughness: 0,
                        transmission: 0.3,
                        ior: 2.4,
                        thickness: 1.5,
                        clearcoat: 1,
                        clearcoatRoughness: 0,
                        clippingPlanes: [new THREE.Plane(new THREE.Vector3(1, 0, 0), 0)],
                        clipShadows: true,
                    });
                }
            });

            scene.add(rightGem);
        });
        
        const animate = () => {
            requestAnimationFrame(animate);

            // 천천히 위아래로 떠오르는 애니메이션
            const time = Date.now() * 0.002;
            scene.position.y = Math.sin(time) * 0.15; 

            renderer.render(scene, camera);
        };
        animate();

        return () => {
            if (mountRef.current) {
                mountRef.current.innerHTML = '';
            }
        };
    }, []);

    return <div ref={mountRef} />;
};

export default ThreeHeart;