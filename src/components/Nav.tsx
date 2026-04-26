import { assetPath } from '../utils/asset';

export function Nav() {
  return (
    <nav className="site-nav" aria-label="Navegação principal">
      <div className="nav-inner">
        <a className="brand" href="#hero" aria-label="Allmo">
          <img
            className="brand-logo"
            src={assetPath('assets/logos/allmo-rgb.png')}
            alt="Allmo"
            width="112"
            height="auto"
          />
        </a>
        <div className="nav-links" aria-label="Links principais">
          <a href="#diferencial">Metodologia</a>
          <a href="#solucoes">Soluções</a>
          <a href="#cta">Diagnóstico</a>
          <a href="#conteudo">Conteúdo</a>
        </div>
        <a className="nav-cta" href="#cta">Iniciar Diagnóstico</a>
      </div>
    </nav>
  );
}
