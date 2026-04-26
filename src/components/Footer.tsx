export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <a className="brand" href="#top" aria-label="Allmo">
            <img
              className="brand-logo"
              src="/assets/logos/allmo-rgb.png"
              alt="Allmo"
              width="112"
              height="auto"
            />
          </a>
          <p className="footer-brand-text">Governança além da Lei. Consultoria de Privacy Ops.</p>
          <p className="footer-contact">contato@allmo.co<br />Campo Grande / MS</p>
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
            <a href="#metodologia">Metodologia</a>
            <a href="#conteudo">Conteúdo</a>
            <a href="#top">Sobre</a>
            <a href="#diagnostico">Iniciar Diagnóstico</a>
          </div>
        </div>
        <div>
          <p className="footer-title">Utilidade pública</p>
          <div className="footer-links">
            <a href="#top">Central do Titular</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>2026 Allmo — Governança além da Lei</span>
        <span className="footer-bottom-links">
          <a href="#top">Política de Privacidade</a>
          <a href="#top">Central do Titular</a>
        </span>
      </div>
    </footer>
  );
}
