import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three-stdlib';
import { useEffect, useRef } from 'react';

const ThreeReactLogo = () => {
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
        directional.position.set(10, 10, 100);
        scene.add(directional);

        // 하늘색 큐브 (Rounded 처리 대신 bevel로 표현)
        const cubeGeometry = new RoundedBoxGeometry(30, 30, 8, 10, 3);
        const cubeMaterial = new THREE.MeshStandardMaterial({
            color: 0x61dafb,      // 하늘색
            metalness: 0,       // 금속성: 0~1 (0: 플라스틱, 1: 금속)
            roughness: 0.4        // 표면 거칠기: 0~1 (0: 매끈, 1: 거칠)
        });
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        scene.add(cube);

        // 1. Shape 정의
        const logoGroup = new THREE.Group();

        const nucleus = new THREE.Mesh(
            new THREE.CylinderGeometry(3, 3, 1.5, 32),
            new THREE.MeshStandardMaterial({ color: 0xffffff })
        );

        nucleus.rotation.x = Math.PI / 2;
        nucleus.position.z = 8;
        logoGroup.add(nucleus);

        // 타원 궤도 3개
        const ellipseCurve = (rotationZ) => {
            const ellipse = new THREE.EllipseCurve(0, 0, 13, 6.5, 0, 2 * Math.PI);
            const points = ellipse.getPoints(100);
            const curvePath = new THREE.CatmullRomCurve3(
                points.map((p) => new THREE.Vector3(p.x, p.y, 0)),
                true
            );
            const tubeGeometry = new THREE.TubeGeometry(curvePath, 100, 0.8, 8, true);
            const tubeMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
            const tube = new THREE.Mesh(tubeGeometry, tubeMaterial);

            tube.rotation.z = rotationZ;
            tube.position.z = 8;
            logoGroup.add(tube);
        };

        ellipseCurve(0);
        ellipseCurve(Math.PI / 3);
        ellipseCurve(-Math.PI / 3);

        logoGroup.scale.set(0.7, 0.7, 0.7);
        scene.add(logoGroup);

        // 애니메이션
        let angle = 0;

        const animate = () => {
            angle += 0.01;
            cube.rotation.x = Math.sin(angle) * 0.2; // 앞뒤로 기울임
            cube.rotation.y = Math.cos(angle) * 0.3;
            logoGroup.rotation.copy(cube.rotation);

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();

        return () => {
            renderer.dispose();
            if (mountRef.current) {
                mountRef.current.innerHTML = '';
            }
        };
    }, []);

    return <div ref={mountRef} />;
};

export default ThreeReactLogo;