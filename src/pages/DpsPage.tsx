import { useReveal } from '../hooks/useReveal';

const deliverables = [
  {
    title: 'Score de maturidade',
    description: 'Uma leitura objetiva de onde sua organização está hoje em relação à operação de privacidade.',
  },
  {
    title: 'Mapa de riscos',
    description: 'Os pontos críticos que expõem sua instituição — jurídicos, operacionais e reputacionais.',
  },
  {
    title: 'Plano de ação prioritário',
    description: 'As três iniciativas de maior retorno para o seu contexto específico.',
  },
];

const audiences = [
  'Institutos de previdência que precisam de mais do que uma DPO de prateleira.',
  'Conselhos regionais com obrigações legais e estrutura enxuta.',
  'Startups de IA construindo privacidade desde o início, não depois do problema.',
];

export function DpsPage() {
  const { ref: heroRef, isVisible: heroVisible } = useReveal();
  const { ref: deliverablesRef, isVisible: deliverablesVisible } = useReveal();
  const { ref: audienceRef, isVisible: audienceVisible } = useReveal();
  const { ref: ctaRef, isVisible: ctaVisible } = useReveal();

  return (
    <main id="main" className="internal-page">
      <section className="internal-hero dps-hero">
        <div className={`internal-hero-copy reveal ${heroVisible ? 'is-visible' : ''}`} ref={heroRef}>
          <span className="hero-eyebrow">DPS — Data Protection Score</span>
          <h1 className="internal-hero-h">Você sabe onde a sua operação de dados está falhando?</h1>
        </div>
        <div className="internal-hero-aside">
          <p className="internal-lead">
            O DPS é um diagnóstico estruturado de 45 minutos. Saímos com um mapa claro do seu estado atual — riscos, lacunas e as três ações de maior impacto imediato.
          </p>
          <p className="internal-note">Sem compromisso. Sem consultoria disfarçada de bate-papo.</p>
          <a href="mailto:contato@allmo.co" className="hero-cta">Agende o seu DPS</a>
        </div>
      </section>

      <section className="internal-section">
        <div className={`internal-section-head reveal ${deliverablesVisible ? 'is-visible' : ''}`} ref={deliverablesRef}>
          <span className="sec-eyebrow">O que você recebe</span>
          <h2 className="sec-h">Resultado concreto em uma conversa objetiva.</h2>
        </div>
        <div className={`deliverable-grid reveal delay-1 ${deliverablesVisible ? 'is-visible' : ''}`}>
          {deliverables.map((item, index) => (
            <article className="deliverable-card" key={item.title}>
              <span className="phase-number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="internal-split audience-section">
        <div className={`internal-split-left reveal ${audienceVisible ? 'is-visible' : ''}`} ref={audienceRef}>
          <span className="sec-eyebrow">Para quem é</span>
          <h2 className="sec-h">Instituições que precisam operar privacidade com clareza.</h2>
        </div>
        <div className={`internal-split-right reveal delay-1 ${audienceVisible ? 'is-visible' : ''}`}>
          <ul className="audience-list">
            {audiences.map((audience, index) => (
              <li key={audience}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{audience}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="internal-dark">
        <div className={`internal-dark-inner reveal ${ctaVisible ? 'is-visible' : ''}`} ref={ctaRef}>
          <span className="cta-eyebrow">DPS gratuito</span>
          <h2 className="cta-h">Agende o seu DPS.</h2>
          <p className="cta-sub">Gratuito. 45 minutos. Resultado concreto.</p>
          <a href="mailto:contato@allmo.co" className="btn-white-line">Agende o seu DPS</a>
        </div>
      </section>
    </main>
  );
}
