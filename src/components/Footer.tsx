import { assetPath } from '../utils/asset';
import { routePath } from '../utils/routes';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <a className="brand" href={routePath()} aria-label="Allmo">
            <img
              className="brand-logo"
              src={assetPath('assets/logos/allmo-rgb.png')}
              alt="Allmo"
              width="112"
              height="auto"
            />
          </a>
          <p className="footer-brand-text">Governança além da Lei. Consultoria de Privacy Ops.</p>
          <p className="footer-contact">contato@allmo.co · Campo Grande / MS</p>
        </div>
        <div>
          <p className="footer-title">Soluções</p>
          <div className="footer-links">
            <a href={routePath('#solucoes')}>Programa de Privacidade</a>
            <a href={routePath('#solucoes')}>DPO Core</a>
            <a href={routePath('#solucoes')}>DPO for AI Builders</a>
            <a href={routePath('#solucoes')}>DPO Consultivo</a>
            <a href={routePath('#solucoes')}>AllAudit</a>
          </div>
        </div>
        <div>
          <p className="footer-title">Empresa</p>
          <div className="footer-links">
            <a href={routePath('metodologia')}>Metodologia</a>
            <a href={routePath('dps')}>Diagnóstico</a>
            <a href={routePath('#conteudo')}>Conteúdo</a>
          </div>
        </div>
        <div>
          <p className="footer-title">Utilidade pública</p>
          <div className="footer-links">
            <a href={routePath('#hero')}>Central do Titular</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Allmo · Governança além da Lei</span>
        <a href={routePath('#hero')}>Política de Privacidade</a>
      </div>
    </footer>
  );
}
