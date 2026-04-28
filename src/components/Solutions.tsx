import { useReveal } from '../hooks/useReveal';

const solutions = [
  {
    pillar: 'Governança de dados',
    text: 'Estruture responsabilidade, processos e evidências para sustentar decisões sobre dados com clareza.',
    items: [
      {
        title: 'Programa de Privacidade',
        description: 'Governança estruturada desde a base: processos, responsabilidades, evidências e rotina operacional.',
      },
    ],
  },
  {
    pillar: 'Data Protection Officer (DPO)',
    text: 'Operação diária, retaguarda técnica e privacidade by design para organizações em diferentes estágios.',
    items: [
      {
        title: 'DPO Core',
        description: 'DPO operando no cotidiano da organização, com rotina, consenso executivo e apoio técnico contínuo.',
      },
      {
        title: 'DPO for AI Builders',
        description: 'Privacidade by design para produtos, modelos e operações que precisam avançar sem acumular risco regulatório.',
      },
      {
        title: 'DPO Consultivo',
        description: 'Apoio especializado para decisões críticas, revisão de fluxos, contratos e condução de temas sensíveis.',
      },
    ],
  },
  {
    pillar: 'Asseguração',
    text: 'Diagnóstico, prova e maturidade para operações que precisam demonstrar conformidade com segurança.',
    items: [
      {
        title: 'ALLMO AUDIT',
        description: 'Auditoria orientada a prova, risco e maturidade para contratos B2B e due diligence.',
      },
    ],
  },
];

export function Solutions() {
  const { ref: headerRef, isVisible: headerVisible } = useReveal();
  const { ref: gridRef, isVisible: gridVisible } = useReveal();

  return (
    <section className="solutions" id="solucoes">
      <div className={`sol-header reveal ${headerVisible ? 'is-visible' : ''}`} ref={headerRef}>
        <div>
          <span className="sec-eyebrow">Ambientes de Operação</span>
          <h2 className="sec-h">Uma solução para cada momento da sua jornada de governança.</h2>
        </div>
        <p className="sec-p">
          Cada ambiente foi desenhado para responder a uma etapa específica da maturidade em privacidade, do diagnóstico à operação contínua.
        </p>
      </div>
      <div className={`solutions-grid reveal delay-1 ${gridVisible ? 'is-visible' : ''}`} ref={gridRef}>
        {solutions.map((solution) => (
          <article className="solution-pillar" key={solution.pillar}>
            <div className="solution-pillar-head">
              <h3 className="sol-h">{solution.pillar}</h3>
              <p className="sol-p">{solution.text}</p>
            </div>
            <div className="solution-items">
              {solution.items.map((item) => (
                <a href="#cta" className="solution-item" key={item.title}>
                  <span>
                    <strong>{item.title}</strong>
                    <small>{item.description}</small>
                  </span>
                  <span className="solution-item-plus" aria-hidden="true">→</span>
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
