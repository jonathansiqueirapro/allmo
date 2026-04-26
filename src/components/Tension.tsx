import { useReveal } from '../hooks/useReveal';

const dataCards = [
  { value: '84%', text: 'dos ataques cibernéticos na América Latina têm o Brasil como alvo' },
  { value: 'R$7,19mi', text: 'custo médio por incidente de dados no Brasil (IBM)' },
  { value: '72h', text: 'prazo legal para comunicar incidente à ANPD' },
];

export function Tension() {
  const { ref: headlineRef, isVisible: headlineVisible } = useReveal();
  const { ref: cardsRef, isVisible: cardsVisible } = useReveal();

  return (
    <section className="tension">
      <div className="container tension-grid">
        <div className={`reveal ${headlineVisible ? 'is-visible' : ''}`} ref={headlineRef}>
          <h2>Conformidade que sustenta a auditoria existe. A que evolui com o seu negócio, essa a maioria não tem.</h2>
        </div>
        <div className={`reveal ${cardsVisible ? 'is-visible' : ''}`} ref={cardsRef}>
          <div className="data-stack">
            {dataCards.map((card, index) => (
              <article className="data-card" key={index}>
                <p className="data-value">{card.value}</p>
                <p className="data-text">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
