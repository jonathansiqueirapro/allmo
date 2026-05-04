import { useReveal } from '../hooks/useReveal';
import { routePath } from '../utils/routes';

const phases = [
  {
    title: 'Diagnóstico',
    description: 'Mapeamos o estado real da sua operação de dados. Não o que deveria ser — o que é.',
  },
  {
    title: 'Estruturação',
    description: 'Desenhamos os processos, papéis e controles necessários para que a privacidade funcione sem depender de esforço heroico.',
  },
  {
    title: 'Operação',
    description: 'Implementamos, treinamos e acompanhamos. A privacidade passa a fazer parte do fluxo normal de trabalho.',
  },
  {
    title: 'Evolução',
    description: 'Medimos, revisamos e ajustamos. A maturidade cresce junto com a organização.',
  },
];

export function MetodologiaPage() {
  const { ref: heroRef, isVisible: heroVisible } = useReveal();
  const { ref: introRef, isVisible: introVisible } = useReveal();
  const { ref: phasesRef, isVisible: phasesVisible } = useReveal();
  const { ref: finalRef, isVisible: finalVisible } = useReveal();

  return (
    <main id="main" className="internal-page">
      <section className="internal-hero">
        <div className={`internal-hero-copy reveal ${heroVisible ? 'is-visible' : ''}`} ref={heroRef}>
          <span className="hero-eyebrow">Metodologia</span>
          <h1 className="internal-hero-h">Privacidade não se adequa. Se opera.</h1>
        </div>
        <div className="internal-hero-aside">
          <p className="internal-lead">
            Compliance é reativo. Privacy Ops é contínuo — um sistema vivo que integra processos, pessoas e tecnologia para que a privacidade funcione de dentro para fora.
          </p>
          <a href={routePath('dps')} className="hero-cta">Iniciar Diagnóstico DPS</a>
        </div>
      </section>

      <section className="internal-split">
        <div className={`internal-split-left reveal ${introVisible ? 'is-visible' : ''}`} ref={introRef}>
          <span className="sec-eyebrow">O que é Privacy Ops</span>
          <h2 className="sec-h">Privacidade como capacidade organizacional.</h2>
        </div>
        <div className={`internal-split-right reveal delay-1 ${introVisible ? 'is-visible' : ''}`}>
          <p className="internal-copy">
            A maioria das organizações trata privacidade como um evento: uma adequação pontual, um checklist, um projeto com prazo. A Allmo opera diferente.
          </p>
          <p className="internal-copy">
            Privacy Ops é a disciplina de tornar a privacidade operacional — não como política, mas como capacidade organizacional. Algo que a sua instituição executa, mede e melhora continuamente.
          </p>
        </div>
      </section>

      <section className="internal-section">
        <div className={`internal-section-head reveal ${phasesVisible ? 'is-visible' : ''}`} ref={phasesRef}>
          <span className="sec-eyebrow">As fases</span>
          <h2 className="sec-h">Um ciclo contínuo de diagnóstico, operação e evolução.</h2>
        </div>
        <div className={`phase-grid reveal delay-1 ${phasesVisible ? 'is-visible' : ''}`}>
          {phases.map((phase, index) => (
            <article className="phase-card" key={phase.title}>
              <span className="phase-number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{phase.title}</h3>
              <p>{phase.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="internal-dark">
        <div className={`internal-dark-inner reveal ${finalVisible ? 'is-visible' : ''}`} ref={finalRef}>
          <span className="cta-eyebrow">Diferencial</span>
          <h2 className="cta-h">Não entregamos documentos. Entregamos capacidade.</h2>
          <p className="cta-sub">
            A Allmo não terceiriza a sua privacidade — constrói a operação dentro da sua organização.
          </p>
          <a href={routePath('dps')} className="btn-white-line">Agendar DPS</a>
        </div>
      </section>
    </main>
  );
}
