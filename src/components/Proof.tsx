import { useReveal } from '../hooks/useReveal';

const proofCards = [
  {
    title: 'Institutos de Previdência',
    paragraphs: [
      'Gestão de dados de beneficiários em ambientes com obrigações públicas, controle externo e auditoria permanente.',
      'Operações com alto volume de dados sensíveis, múltiplos entes reguladores e exigência de rastreabilidade total.',
    ],
  },
  {
    title: 'Conselhos Regionais',
    paragraphs: [
      'Governança de dados de profissionais registrados em autarquias federais com escopo nacional e pressão regulatória constante.',
      'Ambientes com milhares de titulares ativos e estrutura de decisão distribuída.',
    ],
  },
  {
    title: 'Startups de Inteligência Artificial',
    paragraphs: [
      'Privacidade integrada ao ciclo de desenvolvimento de produtos que processam dados sensíveis em escala.',
      'Times de inovação que precisam avançar rápido sem comprometer conformidade regulatória ou a confiança dos usuários.',
    ],
  },
];

export function Proof() {
  const { ref: introRef, isVisible: introVisible } = useReveal();
  const { ref: gridRef, isVisible: gridVisible } = useReveal();

  return (
    <section>
      <div className="container">
        <div className={`proof-intro reveal ${introVisible ? 'is-visible' : ''}`} ref={introRef}>
          <h2>Especialistas em Governança de Dados.</h2>
          <p className="lead">A Allmo atua em ambientes onde a complexidade regulatória e política exige mais do que documentos. Atuamos com sigilo absoluto — a confiança dos nossos clientes é inegociável.</p>
        </div>
        <div className={`proof-grid reveal ${gridVisible ? 'is-visible' : ''}`} ref={gridRef}>
          {proofCards.map((card, index) => (
            <article className="proof-card" key={index}>
              <h3>{card.title}</h3>
              {card.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <span className="badge">Sigilo preservado</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
