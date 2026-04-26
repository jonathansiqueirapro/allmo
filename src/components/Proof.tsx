import { useReveal } from '../hooks/useReveal';

const niches = [
  {
    tag: 'Regulação específica',
    title: 'Conselhos Regionais',
    text: 'Dezenas de milhares de profissionais sob regulação específica.',
  },
  {
    tag: 'Proteção em escala',
    title: 'Institutos de Previdência',
    text: 'Obrigações de proteção de dados em escala.',
  },
  {
    tag: 'Risco em tempo real',
    title: 'Startups de Inteligência Artificial',
    text: 'Times de inovação navegando risco regulatório em tempo real.',
  },
];

export function Proof() {
  const { ref: headerRef, isVisible: headerVisible } = useReveal();
  const { ref: gridRef, isVisible: gridVisible } = useReveal();

  return (
    <section className="proof" id="prova">
      <div className={`prova-header reveal ${headerVisible ? 'is-visible' : ''}`} ref={headerRef}>
        <div>
          <span className="sec-eyebrow">Atuação por nicho</span>
          <h2 className="prova-h">
            Atuamos onde<br />improvisar<br /><em>não é opção.</em>
          </h2>
        </div>
        <p className="prova-sub">
          Operamos em ambientes de alta complexidade regulatória, onde improvisar não é opção. Por discrição contratual, não divulgamos clientes.
        </p>
      </div>
      <div className={`proof-grid reveal delay-1 ${gridVisible ? 'is-visible' : ''}`} ref={gridRef}>
        {niches.map((niche) => (
          <article className="proof-card" key={niche.title}>
            <span className="niche-tag">{niche.tag}</span>
            <h3 className="niche-h">{niche.title}</h3>
            <p className="niche-p">{niche.text}</p>
          </article>
        ))}
      </div>
      <div className="prova-footer">
        <span className="lock">⟨/⟩</span>
        <span className="prova-footer-t">Todos os clientes operam sob sigilo contratual absoluto. Nenhum logotipo é exibido por compromisso de confidencialidade.</span>
      </div>
    </section>
  );
}
