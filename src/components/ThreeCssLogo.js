import * as THREE from 'three';
import { useEffect, useRef } from 'react';

const ThreeCssLogo = () => {
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
        const scale = 0.12;
        const flip = -1;

        const outer = new THREE.Shape();
        outer.moveTo(108 * scale, 0 * scale * flip);
        outer.lineTo(98.958 * scale, 110 * scale * flip);
        outer.lineTo(54.7539 * scale, 125 * scale * flip);
        outer.lineTo(9.04199 * scale, 110 * scale * flip);
        outer.lineTo(0 * scale, 0 * scale * flip);
        outer.lineTo(108 * scale, 0 * scale * flip); // H 108

        const inner = new THREE.Path();
        inner.moveTo(21.5996 * scale, 34.5 * scale * flip);
        inner.lineTo(55.7578 * scale, 34.5 * scale * flip); // H
        inner.lineTo(23.1074 * scale, 49 * scale * flip);
        inner.lineTo(23.1074 * scale, 61.5 * scale * flip); // V
        inner.lineTo(70.8281 * scale, 61.5 * scale * flip); // H
        inner.lineTo(69.3213 * scale, 79 * scale * flip);
        inner.lineTo(54.251 * scale, 84 * scale * flip);
        inner.lineTo(38.6787 * scale, 79 * scale * flip);
        inner.lineTo(38.6787 * scale, 69.5 * scale * flip); // V
        inner.lineTo(25.1162 * scale, 69.5 * scale * flip); // H
        inner.lineTo(26.623 * scale, 89.5 * scale * flip);
        inner.lineTo(54.251 * scale, 99 * scale * flip);
        inner.lineTo(81.8789 * scale, 89.5 * scale * flip);
        inner.lineTo(85.8975 * scale, 49 * scale * flip);
        inner.lineTo(54.251 * scale, 49 * scale * flip); // H
        inner.lineTo(87.4043 * scale, 34.5 * scale * flip);
        inner.lineTo(88.4092 * scale, 22 * scale * flip);
        inner.lineTo(20.0928 * scale, 21.5 * scale * flip);
        inner.lineTo(21.5996 * scale, 34.5 * scale * flip); // 다시 처음으로

        outer.holes.push(inner);


        const geometry = new THREE.ExtrudeGeometry(outer, { depth: 2, bevelEnabled: false });
        const material = new THREE.MeshStandardMaterial({ color: 0x1073bb });
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

export default ThreeCssLogo;