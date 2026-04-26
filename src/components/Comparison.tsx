import { useReveal } from '../hooks/useReveal';

const comparisonData = [
  {
    criteria: 'Entrega',
    traditional: 'Documentos e relatórios',
    allmo: 'Operação estruturada e contínua',
  },
  {
    criteria: 'Responsável',
    traditional: 'DPO isolado apagando incêndios',
    allmo: 'Comissão de Privacidade com consenso executivo',
  },
  {
    criteria: 'Integração',
    traditional: 'Jurídico desconectado do negócio',
    allmo: 'Rigor jurídico + agilidade de tecnologia',
  },
  {
    criteria: 'Resultado',
    traditional: 'Conformidade de gaveta',
    allmo: 'Privacidade como ativo estratégico',
  },
  {
    criteria: 'Medição',
    traditional: 'Subjetiva ou ausente',
    allmo: 'Data Protection Score (DPS) — maturidade mensurável',
  },
];

export function Comparison() {
  const { ref, isVisible } = useReveal();

  return (
    <section>
      <div className="container">
        <div className={`section-center reveal ${isVisible ? 'is-visible' : ''}`} ref={ref}>
          <p className="eyebrow">O que nos diferencia</p>
          <h2>A conformidade no papel existe. A operação, não.</h2>
        </div>
        <div className={`comparison-wrap reveal ${isVisible ? 'is-visible' : ''}`}>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Critério</th>
                <th>Compliance Tradicional</th>
                <th>Privacy Ops Allmo</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index}>
                  <td>{row.criteria}</td>
                  <td>{row.traditional}</td>
                  <td>{row.allmo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
