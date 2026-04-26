import { useReveal } from '../hooks/useReveal';

const pillars = [
  { number: '01', title: 'Diagnóstico', description: 'Mapeamento de maturidade, gaps e riscos operacionais.' },
  { number: '02', title: 'Estruturação', description: 'Políticas, processos e comissão de privacidade ativada.' },
  { number: '03', title: 'Integração', description: 'Alinhamento jurídico, técnico e executivo em uma operação.' },
  { number: '04', title: 'Mensuração', description: 'Data Protection Score (DPS) como métrica de evolução contínua.' },
  { number: '05', title: 'Evolução', description: 'Ciclo contínuo de revisão, adaptação e crescimento de maturidade.' },
];

export function Methodology() {
  const { ref: introRef, isVisible: introVisible } = useReveal();
  const { ref: pillarsRef, isVisible: pillarsVisible } = useReveal();

  return (
    <section className="methodology" id="metodologia">
      <div className="container">
        <div className={`methodology-intro reveal ${introVisible ? 'is-visible' : ''}`} ref={introRef}>
          <div>
            <p className="eyebrow">Metodologia</p>
            <h2>Framework de Governança Allmo. Cinco pilares. Uma operação que mede sua própria evolução.</h2>
          </div>
          <p className="lead">Nossa metodologia não depende de pessoas específicas — depende de estrutura. Cada pilar alimenta o próximo, criando um ciclo de maturidade contínua e mensurável.</p>
        </div>
        <div className={`pillars reveal ${pillarsVisible ? 'is-visible' : ''}`} ref={pillarsRef}>
          {pillars.map((pillar, index) => (
            <article className="pillar" key={index}>
              <p className="pillar-number">{pillar.number}</p>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
