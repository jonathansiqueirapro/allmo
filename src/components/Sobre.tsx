import { useReveal } from '../hooks/useReveal';

const diferenciais = [
  {
    title: 'DPO que opera, não assina',
    description: 'Comissão de Privacidade ativa, consensos executivos, integração entre jurídico e tecnologia.',
  },
  {
    title: 'Diagnóstico contínuo',
    description: 'Data Protection Score em 5 dimensões — não relatório pontual, mas inteligência de maturidade.',
  },
  {
    title: 'Alta complexidade regulatória',
    description: 'Previdências, Conselhos Regionais, Startups de IA — ambientes onde improvisar não é opção.',
  },
  {
    title: 'Sigilo absoluto',
    description: 'Operamos em ambientes de máximo sigilo. Nenhum logotipo de cliente é exibido.',
  },
];

export function Sobre() {
  const { ref: leftRef, isVisible: leftVisible } = useReveal();
  const { ref: rightRef, isVisible: rightVisible } = useReveal();

  return (
    <section className="sobre" id="sobre">
      <div className={`sobre-left reveal ${leftVisible ? 'is-visible' : ''}`} ref={leftRef}>
        <span className="eyebrow">A Allmo</span>
        <h2 className="sobre-h">
          A conformidade existe<br />no papel.<br /><em>A operação, não.</em>
        </h2>
        <p className="sobre-p">
          Somos uma consultoria especializada em estruturar a LGPD como processo contínuo de negócio. Adequação que se sustenta em auditorias, contratos e no dia a dia.
          <br /><br />
          <em>Não entregamos documentos. Implementamos operações de Privacy Ops.</em>
        </p>
        <a href="#diferencial" className="link-underline">Ver metodologia →</a>
      </div>
      <div className={`sobre-right reveal delay-1 ${rightVisible ? 'is-visible' : ''}`} ref={rightRef}>
        <ul className="diferencial-list">
          {diferenciais.map((item, index) => (
            <li key={item.title}>
              <span className="d-num">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <div className="d-title">{item.title}</div>
                <div className="d-desc">{item.description}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
