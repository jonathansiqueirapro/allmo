import { useReveal } from '../hooks/useReveal';
import { assetPath } from '../utils/asset';

const stats = [
  { value: '73%', text: 'das empresas sancionadas tinham políticas vigentes — mas sem operação real' },
  { value: 'R$4M', text: 'valor médio de contratos B2B travados por ausência de conformidade operacional' },
  { value: '6×', text: 'mais eficiente implementar Privacy Ops do que responder a incidentes' },
];

export function Hero() {
  const { ref: leftRef, isVisible: leftVisible } = useReveal();
  const { ref: rightRef, isVisible: rightVisible } = useReveal();

  return (
    <section className="hero" id="hero">
      <div className="hero-main">
        <div className={`hero-left reveal ${leftVisible ? 'is-visible' : ''}`} ref={leftRef}>
          <span className="hero-eyebrow">Consultoria de Privacy Ops</span>
          <h1 className="hero-h1">
            Privacidade estruturada para fortalecer o seu negócio.
          </h1>
          <div className="hero-meta">
            <p className="hero-sub">
              Transformamos a LGPD em um ativo para as empresas. Integramos compliance contínuo, alinhamos autoridade técnica e levamos rigor à operação.
            </p>
            <div className="hero-actions">
              <a href="#cta" className="hero-cta">Iniciar Diagnóstico (DPS)</a>
              <a href="#cta" className="hero-cta hero-cta-secondary">Sessão Estratégica →</a>
            </div>
          </div>
        </div>

        <div className={`hero-right reveal delay-1 ${rightVisible ? 'is-visible' : ''}`} ref={rightRef}>
          <img className="hero-image" src={assetPath('assets/imagens/hero.png?v=2')} alt="Visual institucional da Allmo" />
        </div>
      </div>

      <div className="hero-bottom">
        {stats.map((stat) => (
          <div className="hero-stat" key={stat.value}>
            <div className="hero-stat-n">{stat.value}</div>
            <div className="hero-stat-t">{stat.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
