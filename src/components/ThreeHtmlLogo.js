import * as THREE from 'three';
import { useEffect, useRef } from 'react';

const ThreeHtmlLogo = () => {
    const mountRef = useRef(null);
    
    useEffect(() => {
        // 기본 세팅
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
        camera.position.z = 40;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        // renderer.setSize(200, 200);
        if (mountRef) {
            mountRef.current.appendChild(renderer.domElement);
        }

        // 조명
        const ambient = new THREE.AmbientLight(0xffffff, 1.5);
        scene.add(ambient);

        const directional = new THREE.DirectionalLight(0xffffff, 1);
        directional.position.set(10, 10, 100);
        scene.add(directional);

        // 1. Shape 정의
        const scale = 0.2;
        const flip = -1;

        const outer = new THREE.Shape();

        outer.moveTo(65.5 * scale, 0 * scale * flip);
        outer.lineTo(59.5 * scale, 66.5 * scale * flip);
        outer.lineTo(33 * scale, 75 * scale * flip);
        outer.lineTo(6 * scale, 66.5 * scale * flip);
        outer.lineTo(0 * scale, 0 * scale * flip);
        outer.lineTo(65.5 * scale, 0 * scale * flip);

        const inner = new THREE.Path(); // 구멍
        inner.moveTo(13 * scale, 14 * scale * flip);
        inner.lineTo(15 * scale, 38 * scale * flip);
        inner.lineTo(42.5 * scale, 38 * scale * flip); // H 42.5
        inner.lineTo(42.5 * scale, 48 * scale * flip); // V 48
        inner.lineTo(34 * scale, 51.5 * scale * flip);
        inner.lineTo(24.5 * scale, 48 * scale * flip);
        inner.lineTo(24.5 * scale, 43 * scale * flip); // V 43
        inner.lineTo(16 * scale, 43 * scale * flip);   // H 16
        inner.lineTo(16 * scale, 54.5 * scale * flip); // V 54.5
        inner.lineTo(34 * scale, 60 * scale * flip);
        inner.lineTo(50 * scale, 54.5 * scale * flip);
        inner.lineTo(52 * scale, 30 * scale * flip);
        inner.lineTo(22.5 * scale, 30 * scale * flip); // H 22.5
        inner.lineTo(21.5 * scale, 22.5 * scale * flip);
        inner.lineTo(53.5 * scale, 22.5 * scale * flip); // H 53.5
        inner.lineTo(53.5 * scale, 14 * scale * flip);   // V 14
        inner.lineTo(13 * scale, 14 * scale * flip);

        outer.holes.push(inner);

        const geometry = new THREE.ExtrudeGeometry(outer, { depth: 2, bevelEnabled: false });
        const material = new THREE.MeshStandardMaterial({ color: 0xff5722 });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(-6.5, 7, 8);
        scene.add(mesh);

        // 애니메이션
        let angle = 0;

        const animate = () => {
            angle += 0.01;
            mesh.rotation.x = Math.sin(angle) * 0.2; // 앞뒤로 기울임
            mesh.rotation.y = Math.cos(angle) * 0.3;

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

    return <div className="skill-icon" ref={mountRef} />;
};

export default ThreeHtmlLogo;