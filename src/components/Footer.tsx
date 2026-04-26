export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <a className="brand" href="#hero" aria-label="Allmo">
            <img
              className="brand-logo"
              src="/assets/logos/allmo-rgb.png"
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
            <a href="#solucoes">Programa de Privacidade</a>
            <a href="#solucoes">DPO Core</a>
            <a href="#solucoes">DPO for AI Builders</a>
            <a href="#solucoes">DPO Consultivo</a>
            <a href="#solucoes">AllAudit</a>
          </div>
        </div>
        <div>
          <p className="footer-title">Empresa</p>
          <div className="footer-links">
            <a href="#diferencial">Metodologia</a>
            <a href="#cta">Diagnóstico</a>
            <a href="#conteudo">Conteúdo</a>
          </div>
        </div>
        <div>
          <p className="footer-title">Utilidade pública</p>
          <div className="footer-links">
            <a href="#hero">Central do Titular</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Allmo · Governança além da Lei</span>
        <a href="#hero">Política de Privacidade</a>
      </div>
    </footer>
  );
}
