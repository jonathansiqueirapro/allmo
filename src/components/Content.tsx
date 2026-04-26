import { useRef, useState, useCallback } from 'react';
import { useReveal } from '../hooks/useReveal';

const contentCards = [
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = useCallback((container: HTMLDivElement) => {
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 1);
  }, []);

  const scroll = useCallback((direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = container.querySelector('.content-card')?.clientWidth || 300;
    const gap = 18;
    const scrollAmount = cardWidth + gap;

    const newPosition = direction === 'left'
      ? Math.max(0, container.scrollLeft - scrollAmount)
      : Math.min(container.scrollWidth - container.clientWidth, container.scrollLeft + scrollAmount);

    container.scrollTo({ left: newPosition, behavior: 'smooth' });
  }, []);

  return (
    <section className="soft-section" id="conteudo">
      <div className="container">
        <div className={`content-header reveal ${headerVisible ? 'is-visible' : ''}`} ref={headerRef}>
          <div>
            <p className="eyebrow">Conteúdo</p>
            <h2>Pensamento aplicado<br />em privacidade e governança.</h2>
          </div>
          <div className="content-nav">
            <button
              className="arrow-btn"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Anterior"
            >
              ←
            </button>
            <button
              className="arrow-btn"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Próximo"
            >
              →
            </button>
            <a className="view-all" href="#conteudo">Ver todos →</a>
          </div>
        </div>
        <div
          className={`content-grid reveal ${gridVisible ? 'is-visible' : ''}`}
          ref={gridRef}
          onScroll={(e) => updateScrollButtons(e.currentTarget)}
        >
          {contentCards.map((card, index) => (
            <article className="content-card" key={index}>
              <div className="content-image">
                <img src={card.image} alt={card.alt} />
              </div>
              <div className="content-body">
                <p className="tag">{card.tag}</p>
                <h3>{card.title}</h3>
                <p className="reading-time">{card.readingTime}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
