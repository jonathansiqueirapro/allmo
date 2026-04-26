import { useEffect, useRef } from 'react';
import { useReveal } from '../hooks/useReveal';
import * as THREE from 'three';

const TEAL = 0x1cbab2;
const POINTS_PER_AXIS = 8;
const SPACING = 28;
const MAX_DIST = 45;

export function Hero() {
  const { ref: copyRef, isVisible: copyVisible } = useReveal();
  const { ref: visualRef, isVisible: visualVisible } = useReveal();
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const w = container.clientWidth;
    const h = container.clientHeight;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 1000);
    camera.position.set(0, 0, 120);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambient);

    const spot = new THREE.SpotLight(0xffffff, 1);
    spot.position.set(0, 80, 60);
    spot.distance = 200;
    scene.add(spot);

    const group = new THREE.Group();
    scene.add(group);

    const dotGeo = new THREE.SphereGeometry(0.8, 8, 8);
    const dotMat = new THREE.MeshLambertMaterial({ color: TEAL });
    const dots: THREE.Mesh[] = [];

    const half = Math.floor(POINTS_PER_AXIS / 2);
    for (let i = -half; i <= half; i++) {
      for (let j = -half; j <= half; j++) {
        for (let k = -1; k <= 1; k++) {
          const dot = new THREE.Mesh(dotGeo, dotMat);
          const ox = i * SPACING + (Math.random() - 0.5) * 10;
          const oy = j * SPACING + (Math.random() - 0.5) * 10;
          const oz = k * 18 + (Math.random() - 0.5) * 8;
          dot.position.set(ox, oy, oz);
          dot.userData = { ox, oy, oz, phase: Math.random() * Math.PI * 2, speed: 0.3 + Math.random() * 0.4 };
          group.add(dot);
          dots.push(dot);
        }
      }
    }

    const maxLines = dots.length * dots.length;
    const linePositions = new Float32Array(maxLines * 6);
    const lineColors = new Float32Array(maxLines * 6);
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeo.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));
    const lineMat = new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.7 });
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    group.add(lines);

    let mouseX = 0;
    let mouseY = 0;

    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    container.addEventListener('mousemove', onMove);

    let t = 0;
    const animate = () => {
      animRef.current = requestAnimationFrame(animate);
      t += 0.008;

      group.rotation.y = mouseX * 0.15;
      group.rotation.x = mouseY * 0.1;

      for (const dot of dots) {
        const { ox, oy, oz, phase, speed } = dot.userData;
        dot.position.x = ox + Math.sin(t * speed + phase) * 3;
        dot.position.y = oy + Math.cos(t * speed * 0.7 + phase) * 3;
        dot.position.z = oz + Math.sin(t * speed * 0.5 + phase) * 2;
      }

      let idx = 0;
      const teal = new THREE.Color(TEAL);
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const a = dots[i].position;
          const b = dots[j].position;
          const d = a.distanceTo(b);
          if (d < MAX_DIST) {
            const alpha = 1 - d / MAX_DIST;
            linePositions[idx * 6] = a.x;
            linePositions[idx * 6 + 1] = a.y;
            linePositions[idx * 6 + 2] = a.z;
            linePositions[idx * 6 + 3] = b.x;
            linePositions[idx * 6 + 4] = b.y;
            linePositions[idx * 6 + 5] = b.z;
            lineColors[idx * 6] = teal.r * alpha;
            lineColors[idx * 6 + 1] = teal.g * alpha;
            lineColors[idx * 6 + 2] = teal.b * alpha;
            lineColors[idx * 6 + 3] = teal.r * alpha;
            lineColors[idx * 6 + 4] = teal.g * alpha;
            lineColors[idx * 6 + 5] = teal.b * alpha;
            idx++;
          }
        }
      }
      lineGeo.setDrawRange(0, idx * 2);
      lineGeo.attributes.position.needsUpdate = true;
      lineGeo.attributes.color.needsUpdate = true;

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      const nw = container.clientWidth;
      const nh = container.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animRef.current);
      container.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', onResize);
      container.removeChild(renderer.domElement);
      renderer.dispose();
      dotGeo.dispose();
      dotMat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
    };
  }, []);

  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className={`hero-copy reveal ${copyVisible ? 'is-visible' : ''}`} ref={copyRef}>
          <p className="eyebrow">Consultoria de Privacy Ops</p>
          <h1 className="display">Privacidade estruturada para fortalecer o seu negócio.</h1>
          <p className="lead">Transformamos a LGPD em um ativo para as empresas. Integramos compliance contínuo, alinhamos autoridade técnica e levamos rigor à operação.</p>
          <div className="hero-actions">
            <a className="btn btn-solid" href="#diagnostico">Iniciar Diagnóstico (DPS)</a>
            <a className="btn btn-outline" href="#sessao">Sessão Estratégica →</a>
          </div>
        </div>
        <div className={`hero-visual reveal ${visualVisible ? 'is-visible' : ''}`} ref={visualRef}>
          <div ref={containerRef} className="vanta-canvas" />
        </div>
      </div>
    </section>
  );
}
