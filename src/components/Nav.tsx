import { useEffect, useState } from 'react';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`site-nav${scrolled ? ' scrolled' : ''}`} aria-label="Navegação principal">
      <div className="nav-inner">
        <a className="brand" href="#top" aria-label="Allmo">
          <img
            className="brand-logo"
            src="/assets/logos/allmo-rgb.png"
            alt="Allmo"
            width="112"
            height="auto"
          />
        </a>
        <div className="nav-links" aria-label="Links principais">
          <a href="#metodologia">Metodologia</a>
          <a href="#solucoes">Soluções</a>
          <a href="#diagnostico">Diagnóstico</a>
          <a href="#conteudo">Conteúdo</a>
        </div>
        <a className="btn btn-solid" href="#diagnostico">Iniciar Diagnóstico</a>
      </div>
    </nav>
  );
}
