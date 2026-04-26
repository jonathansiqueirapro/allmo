import { useReveal } from '../hooks/useReveal';

const solutions = [
  {
    stage: '01 · Fundação',
    title: 'Programa de Privacidade',
    forWhom: 'Para organizações que precisam construir a estrutura de governança desde o início.',
    text: 'Governança estruturada desde a base: processos, responsabilidades, evidências e rotina operacional.',
  },
  {
    stage: '02 · Operação diária',
    title: 'DPO Core',
    forWhom: 'Terceirização da operação diária com suporte direto à Comissão de Privacidade.',
    text: 'DPO operando no cotidiano da organização, com rotina, consenso executivo e apoio técnico contínuo.',
  },
  {
    stage: '03 · Inovação',
    title: 'DPO for AI Builders',
    forWhom: 'Para times de inovação que lidam com IA e dados sensíveis.',
    text: 'Privacidade by design para produtos, modelos e operações que precisam avançar sem acumular risco regulatório.',
  },
  {
    stage: '04 · Retaguarda',
    title: 'DPO Consultivo',
    forWhom: 'Retaguarda técnica para PMOs e DPOs internos.',
    text: 'Apoio especializado para decisões críticas, revisão de fluxos, contratos e condução de temas sensíveis.',
  },
  {
    stage: '05 · Evidência',
    title: 'AllAudit',
    forWhom: 'Diagnóstico de conformidade para contratos B2B e due diligence.',
    text: 'Auditoria orientada a prova, risco e maturidade para operações que precisam demonstrar conformidade com clareza.',
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
          <article className={`solution-card${solution.title === 'AllAudit' ? ' solution-card-allaudit' : ''}`} key={solution.title}>
            <span className="sol-n">{solution.stage}</span>
            <h3 className="sol-h">{solution.title}</h3>
            <p className="sol-for">{solution.forWhom}</p>
            <p className="sol-p">{solution.text}</p>
            <a href="#cta" className="sol-lnk">Conhecer →</a>
          </article>
        ))}
      </div>
    </section>
  );
}
