import { useReveal } from '../hooks/useReveal';

const steps = ['01 · Resposta', '02 · Análise', '03 · Score', '04 · Recomendação', '05 · Sessão'];

export function DPS() {
  const { ref, isVisible } = useReveal();

  return (
    <section className="dps" id="diagnostico">
      <div className="container">
        <div className={`section-center reveal ${isVisible ? 'is-visible' : ''}`} ref={ref}>
          <p className="eyebrow">Diagnóstico executivo</p>
          <h2>Data Protection Score (DPS).</h2>
          <p className="lead">O rigor de uma auditoria, condensado em inteligência de dados. O DPS entrega um diagnóstico executivo de maturidade com clareza para decisão e rota de evolução para sua operação.</p>
        </div>
        <div className={`steps reveal ${isVisible ? 'is-visible' : ''}`}>
          {steps.map((step, index) => (
            <div className="step" key={index}>{step}</div>
          ))}
        </div>
        <div className={`dps-action reveal ${isVisible ? 'is-visible' : ''}`}>
          <a className="btn btn-solid" href="#sessao">Iniciar meu Diagnóstico</a>
        </div>
      </div>
    </section>
  );
}
