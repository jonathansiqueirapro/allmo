import { useReveal } from '../hooks/useReveal';

const solutions = [
  {
    title: 'Programa de Privacidade',
    description: 'Para organizações que precisam construir a estrutura de governança desde o início.',
    detail: 'Estruturamos sua operação de privacidade do zero: mapeamento, processos, treinamentos e comissão ativa.',
  },
  {
    title: 'DPO Core',
    description: 'Terceirização da operação diária com suporte direto à Comissão de Privacidade.',
    detail: 'Seu DPO operando com presença real. Decisões, consensos e execução integrada.',
  },
  {
    title: 'DPO for AI Builders',
    description: 'Para times de inovação que lidam com IA e dados sensíveis.',
    detail: 'Privacidade by design integrada ao ciclo de produto.',
  },
  {
    title: 'DPO Consultivo',
    description: 'Retaguarda técnica para PMOs e DPOs internos.',
    detail: 'Suporte especializado para quem já tem estrutura mas precisa de profundidade técnica em decisões críticas.',
  },
];

export function Solutions() {
  const { ref: introRef, isVisible: introVisible } = useReveal();
  const { ref: gridRef, isVisible: gridVisible } = useReveal();

  return (
    <section className="soft-section" id="solucoes">
      <div className="container">
        <div className={`solutions-intro reveal ${introVisible ? 'is-visible' : ''}`} ref={introRef}>
          <div>
            <p className="eyebrow">Soluções</p>
            <h2>Ambientes de Operação.</h2>
          </div>
          <p className="lead">Cada ambiente foi desenhado para um momento específico da jornada de maturidade em privacidade.</p>
        </div>
        <div className={`solutions-grid reveal ${gridVisible ? 'is-visible' : ''}`} ref={gridRef}>
          {solutions.map((solution, index) => (
            <article className="solution-card" key={index}>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
              <p>{solution.detail}</p>
              <a className="solution-link" href="#sessao">→ Conhecer solução</a>
            </article>
          ))}
          <article className="solution-card allaudit">
            <h3>AllAudit — Para quem precisa provar, não apenas afirmar.</h3>
            <p>Auditoria integrada de privacidade e cibersegurança para operações que tratam dados pessoais. Framework proprietário, especialistas integrados, resultado certificado.</p>
            <a className="solution-link" href="#sessao">→ Conhecer solução</a>
          </article>
        </div>
      </div>
    </section>
  );
}
