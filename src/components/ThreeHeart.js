import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

let cachedGLTF = null;

const loadGLTF = () => {
    if (cachedGLTF) return Promise.resolve(cachedGLTF);

    const loader = new GLTFLoader();
    return new Promise((resolve) => {
        loader.load('/models/ruby_heart_gem.glb', (gltf) => {
        cachedGLTF = gltf;
        resolve(gltf);
        });
    });
};

const createHalfHeart = (gltf, colorHex, clipDirection) => {
    const gem = gltf.scene.clone(true); // 깊은 복사

    gem.traverse((child) => {
        if (child.isMesh) {
        child.material = new THREE.MeshPhysicalMaterial({
            color: Number(`0x${colorHex}`),
            metalness: 0.6,
            roughness: 0,
            transmission: 0.3,
            ior: 2.4,
            thickness: 1.5,
            clearcoat: 1,
            clearcoatRoughness: 0,
            clippingPlanes: [new THREE.Plane(new THREE.Vector3(clipDirection, 0, 0), 0)],
            clipShadows: true,
        });
        }
    });

    return gem;
};

const ThreeHeart = ({ color1, color2 }) => {
    const mountRef = useRef(null);
    const rendererRef = useRef(null);
    const animationIdRef = useRef(null);

    useEffect(() => {
        if (!mountRef.current || rendererRef.current) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
        camera.position.z = 3;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.localClippingEnabled = true;
        if (mountRef) {
            mountRef.current.appendChild(renderer.domElement);
        }

        rendererRef.current = renderer;

        // 조명
        scene.add(new THREE.AmbientLight(0xffffff, 6));
        const light = new THREE.DirectionalLight(0xffffff, 6);
        light.position.set(10, 10, 10);
        scene.add(light);

        // ✅ 캐싱된 GLTF 불러와서 clone & color 적용
        Promise.all([
            loadGLTF().then((gltf) => createHalfHeart(gltf, color1, -1)),
            loadGLTF().then((gltf) => createHalfHeart(gltf, color2, 1)),
        ]).then(([leftGem, rightGem]) => {
            scene.add(leftGem);
            scene.add(rightGem);
        });

        // 애니메이션
        const animate = () => {
        animationIdRef.current = requestAnimationFrame(animate);
        const time = Date.now() * 0.002;
        scene.position.y = Math.sin(time) * 0.15;
        renderer.render(scene, camera);
        };
        animate();

        return () => {
            if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
            renderer.dispose();
            if (mountRef.current) mountRef.current.innerHTML = '';
            rendererRef.current = null;
        };
    }, [color1, color2]);

    return <div ref={mountRef} className="three-heart" />;
};

export default ThreeHeart;