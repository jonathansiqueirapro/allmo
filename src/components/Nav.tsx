import { assetPath } from '../utils/asset';
import { routePath } from '../utils/routes';

export function Nav() {
  return (
    <nav className="site-nav" aria-label="Navegação principal">
      <div className="nav-inner">
        <a className="brand" href={routePath()} aria-label="Allmo">
          <img
            className="brand-logo"
            src={assetPath('assets/logos/allmo-rgb.png')}
            alt="Allmo"
            width="112"
            height="auto"
          />
        </a>
        <div className="nav-links" aria-label="Links principais">
          <a href={routePath('metodologia')}>Metodologia</a>
          <a href={routePath('#solucoes')}>Soluções</a>
          <a href={routePath('dps')}>Diagnóstico</a>
          <a href={routePath('#conteudo')}>Conteúdo</a>
        </div>
        <a className="nav-cta" href={routePath('dps')}>Iniciar Diagnóstico</a>
      </div>
    </nav>
  );
}
