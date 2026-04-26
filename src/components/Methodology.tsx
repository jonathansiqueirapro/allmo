import { useReveal } from '../hooks/useReveal';

const pillars = [
  { title: 'Governança', description: 'Estrutura decisória clara, papéis definidos e responsabilidade institucional ativa.' },
  { title: 'Processos', description: 'Rotinas operacionais que sustentam auditoria, contratos, incidentes e evolução contínua.' },
  { title: 'Tecnologia', description: 'Controles, inventários e evidências conectados ao funcionamento real do negócio.' },
  { title: 'Jurídico', description: 'Rigor regulatório aplicado sem isolar a privacidade da operação e da estratégia.' },
  { title: 'Educacional', description: 'Cultura, treinamento e comunicação para transformar privacidade em prática recorrente.' },
];

export function Methodology() {
  const { ref: leftRef, isVisible: leftVisible } = useReveal();
  const { ref: rightRef, isVisible: rightVisible } = useReveal();

  return (
    <section className="methodology" id="meto">
      <div className={`meto-left reveal ${leftVisible ? 'is-visible' : ''}`} ref={leftRef}>
        <div>
          <span className="meto-eyebrow">Framework Allmo</span>
          <h2 className="meto-h">
            Pensamento aplicado em privacidade e governança.
          </h2>
          <p className="meto-p">Cinco pilares que transformam conformidade em capacidade operacional real — auditável, contínua e integrada ao negócio.</p>
          <a href="#diferencial" className="btn-teal">Conhecer a Metodologia →</a>
        </div>
      </div>
      <div className={`meto-right reveal delay-1 ${rightVisible ? 'is-visible' : ''}`} ref={rightRef}>
        <ul className="pilares">
          {pillars.map((pillar, index) => (
            <li className="pilar" key={pillar.title}>
              <span className="pilar-n">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <div className="pilar-name">{pillar.title}</div>
                <div className="pilar-desc">{pillar.description}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
