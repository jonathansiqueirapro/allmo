import { useReveal } from '../hooks/useReveal';

const stats = [
  { value: '84%', text: 'dos ataques têm fator humano' },
  { value: 'R$7,19 mi', text: 'custo médio por vazamento (IBM)' },
  { value: '72h', text: 'prazo legal para notificação à ANPD' },
];

export function Tension() {
  const { ref: leftRef, isVisible: leftVisible } = useReveal();
  const { ref: rightRef, isVisible: rightVisible } = useReveal();

  return (
    <section className="tension" id="tensao">
      <div className={`tensao-left reveal ${leftVisible ? 'is-visible' : ''}`} ref={leftRef}>
        <h2 className="tensao-h">
          Conformidade que sustenta a auditoria existe. A que evolui com o seu negócio, essa a maioria não tem.
        </h2>
        <p className="tensao-note">
          A maioria das organizações tem política de privacidade. Poucas têm uma operação que sustenta auditoria, protege contratos e evolui com o negócio.
        </p>
      </div>
      <div className={`tensao-right reveal delay-1 ${rightVisible ? 'is-visible' : ''}`} ref={rightRef}>
        {stats.map((stat) => (
          <div className="t-stat" key={stat.value}>
            <div className="t-num">{stat.value}</div>
            <div className="t-desc">{stat.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
