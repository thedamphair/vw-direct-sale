import { useReveal } from '../hooks/useReveal'
import './PostventaSection.css'

const cards = [
  { num: '01', icon: '🔧', name: 'Garantía Extendida', desc: 'Extiende la garantía de fábrica hasta 5 años adicionales. Más de 1,000 componentes cubiertos, sin deducible.', cta: 'Contratar →', tag: 'Más solicitado', tagBlue: true, dark: false },
  { num: '02', icon: '⭐', name: 'Programa de Lealtad', desc: 'Acumula AutoPoints en cada servicio y pago. Canjéalos por descuentos y preventivos gratis.', cta: 'Ver mis puntos →', tag: 'Gratis al comprar', tagBlue: false, dark: true, loyalty: true },
  { num: '03', icon: '🛞', name: 'Pack Mantenimiento', desc: 'Servicio preventivo prepagado a precio fijo. Aceite, filtros, frenos y llantas sin sorpresas.', cta: 'Ver paquetes →', tag: 'Ahorra 40%', tagBlue: true, dark: false },
  { num: '04', icon: '📱', name: 'AutoConnect App', desc: 'Gestiona tu crédito, programa servicios y contacta a tu asesor desde la app, en cualquier momento.', cta: 'Descargar →', tag: 'iOS & Android', tagBlue: false, dark: false },
  { num: '05', icon: '🔄', name: 'Plan de Renovación', desc: 'Cambia tu auto antes de terminar tu crédito. El valor de tu vehículo se aplica como enganche del siguiente.', cta: 'Evaluar mi auto →', tag: 'Sin penalización', tagBlue: false, dark: false },
  { num: '06', icon: '🎁', name: 'Accesorios Originales', desc: 'Personaliza tu vehículo con accesorios a meses sin intereses. Instalación certificada y garantía incluida.', cta: 'Explorar tienda →', tag: 'MSI disponible', tagBlue: false, dark: false },
]

export default function PostventaSection() {
  const ref = useReveal()

  return (
    <section id="postventa" className="postventa-section" ref={ref}>
      <div className="section-header reveal">
        <div>
          <div className="section-label">03 — Productos Postventa</div>
          <div className="section-title">Beneficios que duran contigo</div>
        </div>
        <a href="#" className="section-link">Conocer todos →</a>
      </div>

      <div className="postventa-grid">
        {cards.map((c, i) => (
          <div key={c.num} className={`pv-card${c.dark ? ' dark' : ''} reveal${i % 3 !== 0 ? ` reveal-delay-${i % 3}` : ''}`}>
            <div className="pv-top">
              <div className="pv-num">{c.num}</div>
              <div className="pv-icon">{c.icon}</div>
              <div className="pv-name">{c.name}</div>
              <div className="pv-desc">{c.desc}</div>
              {c.loyalty && (
                <>
                  <div className="loyalty-dots">
                    {[...Array(7)].map((_, j) => <div key={j} className={`ld${j < 4 ? ' on' : ''}`} />)}
                  </div>
                  <div className="loyalty-label">4 de 7 beneficios desbloqueados</div>
                </>
              )}
            </div>
            <div className="pv-bottom">
              <a href="#" className="pv-cta">{c.cta}</a>
              <span className={`pv-tag${c.tagBlue ? ' blue' : ''}${c.dark ? ' dark-tag' : ''}`}>{c.tag}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="pv-banner reveal">
        <div>
          <h3>¿Listo para <span>comenzar</span>?</h3>
          <p>Un asesor especializado te acompañará desde la elección de tu vehículo hasta la activación de todos tus beneficios.</p>
        </div>
        <div className="pv-banner-actions">
          <a href="#venta" className="btn-primary">Ver vehículos</a>
          <a href="#" className="btn-outline">Hablar con un asesor</a>
        </div>
      </div>
    </section>
  )
}
