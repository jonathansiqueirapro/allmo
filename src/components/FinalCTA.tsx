import { useReveal } from '../hooks/useReveal';

export function FinalCTA() {
  const { ref, isVisible } = useReveal();

  return (
    <section className="final-cta" id="sessao">
      <div className="container">
        <div className={`section-center reveal ${isVisible ? 'is-visible' : ''}`} ref={ref}>
          <p className="eyebrow">Sessão estratégica</p>
          <h2>Eleve o padrão da sua governança.</h2>
          <p className="lead">Uma sessão de 45 minutos com especialistas da Allmo para mapear o estado real da sua operação de privacidade e identificar o próximo passo de evolução.</p>
          <div className="cta-actions">
            <a className="btn btn-light" href="mailto:contato@allmo.co">Agendar Sessão Estratégica</a>
            <a className="btn btn-outline-light" href="#diagnostico">Iniciar Diagnóstico (DPS)</a>
          </div>
        </div>
      </div>
    </section>
  );
}
