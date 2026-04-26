import { useReveal } from '../hooks/useReveal';

const comparisonData = [
  { dimension: 'Entrega', traditional: 'Documentos', allmo: 'Estrutura operação' },
  { dimension: 'Responsável', traditional: 'DPO isolado', allmo: 'Comissão de Privacidade ativa' },
  { dimension: 'Resposta', traditional: 'Reativo a incidentes', allmo: 'Processo contínuo' },
  { dimension: 'Maturidade', traditional: 'Adequação pontual', allmo: 'Evolui com o negócio' },
];

export function Comparison() {
  const { ref: headerRef, isVisible: headerVisible } = useReveal();
  const { ref: tableRef, isVisible: tableVisible } = useReveal();

  return (
    <section className="comparison" id="diferencial">
      <div className={`sec-header reveal ${headerVisible ? 'is-visible' : ''}`} ref={headerRef}>
        <div>
          <h2 className="sec-h">A conformidade no papel existe. A operação, não.</h2>
        </div>
        <p className="sec-p">Compliance tradicional entrega evidência estática. Privacy Ops Allmo instala rotina, governança e evolução contínua.</p>
      </div>
      <div className={`comparison-wrap reveal delay-1 ${tableVisible ? 'is-visible' : ''}`} ref={tableRef}>
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Critério</th>
              <th>Compliance Tradicional</th>
              <th>Privacy Ops · Allmo</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row) => (
              <tr key={row.dimension}>
                <td>{row.dimension}</td>
                <td>{row.traditional}</td>
                <td>{row.allmo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
