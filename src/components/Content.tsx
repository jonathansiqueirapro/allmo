import { useReveal } from '../hooks/useReveal';

const articles = [
  {
    tag: 'LGPD Operacional',
    title: 'O que diferencia uma operação de privacidade de um documento de compliance',
    readingTime: 'Leitura: 5 min',
    image: '/assets/imagens/lgpd.png',
    alt: 'Referência visual para artigo sobre LGPD operacional',
  },
  {
    tag: 'IA & Privacidade',
    title: 'Privacy by Design para times de inteligência artificial: guia executivo',
    readingTime: 'Leitura: 7 min',
    image: '/assets/imagens/ia-privacidade.png',
    alt: 'Referência visual para artigo sobre IA e privacidade',
  },
  {
    tag: 'Governança',
    title: 'Como estruturar uma Comissão de Privacidade que gera consenso executivo',
    readingTime: 'Leitura: 6 min',
    image: '/assets/imagens/governanca.png',
    alt: 'Referência visual para artigo sobre governança de dados',
  },
];

export function Content() {
  const { ref: headerRef, isVisible: headerVisible } = useReveal();
  const { ref: gridRef, isVisible: gridVisible } = useReveal();

  return (
    <section className="content-section" id="conteudo">
      <div className={`content-header reveal ${headerVisible ? 'is-visible' : ''}`} ref={headerRef}>
        <div>
          <span className="sec-eyebrow">Conteúdo</span>
          <h2 className="sec-h">Pensamento aplicado em privacidade e governança.</h2>
        </div>
        <p className="sec-p">Leituras executivas para quem precisa transformar obrigação regulatória em capacidade operacional.</p>
      </div>
      <div className={`content-grid reveal delay-1 ${gridVisible ? 'is-visible' : ''}`} ref={gridRef}>
        {articles.map((article) => (
          <article className="content-card" key={article.title}>
            <div className="content-image">
              <img src={article.image} alt={article.alt} />
            </div>
            <div className="content-body">
              <span className="content-tag">{article.tag}</span>
              <h3 className="content-title">{article.title}</h3>
              <p className="content-time">{article.readingTime}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
