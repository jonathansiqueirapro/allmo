import { useReveal } from '../hooks/useReveal';

export function CTA() {
  const { ref, isVisible } = useReveal();

  return (
    <section className="cta-section" id="cta">
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
