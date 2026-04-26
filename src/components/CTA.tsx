import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import type { ISourceOptions } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { useReveal } from '../hooks/useReveal';

const particlesOptions: ISourceOptions = {
  background: {
    color: {
      value: 'transparent',
    },
  },
  detectRetina: true,
  fpsLimit: 60,
  fullScreen: {
    enable: false,
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: 'grab',
      },
      resize: {
        enable: true,
      },
    },
    modes: {
      grab: {
        distance: 170,
        links: {
          opacity: 0.22,
        },
      },
    },
  },
  particles: {
    color: {
      value: '#1cbab2',
    },
    links: {
      color: '#1cbab2',
      distance: 150,
      enable: true,
      opacity: 0.12,
      width: 1,
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'bounce',
      },
      random: false,
      speed: 0.35,
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 42,
    },
    opacity: {
      value: 0.3,
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { min: 1, max: 3 },
    },
  },
};

export function CTA() {
  const { ref, isVisible } = useReveal();
  const [particlesReady, setParticlesReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setParticlesReady(true));
  }, []);

  return (
    <section className="cta-section" id="cta">
      {particlesReady && (
        <Particles
          className="cta-particles"
          id="cta-particles"
          options={particlesOptions}
        />
      )}
      <div className={`cta-inner reveal ${isVisible ? 'is-visible' : ''}`} ref={ref}>
        <span className="cta-eyebrow">Sessão Estratégica</span>
        <h2 className="cta-h">Eleve o padrão da sua governança.</h2>
        <p className="cta-sub">O Data Protection Score (DPS) mapeia sua exposição real. 45 minutos. Sem apresentação genérica. Entramos direto no seu contexto.</p>
        <div className="cta-actions">
          <a href="mailto:contato@allmo.co" className="btn-white-line">Iniciar Diagnóstico DPS</a>
          <a href="mailto:contato@allmo.co" className="cta-r-sec">Agendar Sessão Estratégica →</a>
        </div>
      </div>
    </section>
  );
}
