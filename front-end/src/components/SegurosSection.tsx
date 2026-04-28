import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import './SegurosSection.css'

export default function SegurosSection() {
  const ref = useReveal()

  return (
    <section id="seguros" className="seguros-section" ref={ref}>
      <div className="section-header reveal">
        <div>
          <div className="section-label">02 — Seguros</div>
          <div className="section-title">Protección sin límites</div>
        </div>
        <Link to="/insurance" className="section-link">Ver todos los planes →</Link>
      </div>

      <div className="seguros-layout">
        <div className="seguros-intro">
          <p>Ofrecemos cobertura integral adaptada a tu perfil. Desde protección básica hasta amplia sin deducible, con asistencia vial 24/7 y atención preferencial para clientes AutoFinance.</p>
          <div className="seguros-callout">
            <p>"Al adquirir tu auto con nosotros, obtienes hasta 30% de descuento en tu primera póliza."</p>
            <cite>Beneficio exclusivo AutoFinance</cite>
          </div>
          <div className="seguros-actions">
            <Link to="/insurance" className="btn-primary">Cotizar mi seguro</Link>
            <Link to="/insurance" className="btn-outline">Ver coberturas</Link>
          </div>
        </div>

        <div className="seguros-cards reveal">
          <div className="seguro-card highlighted">
            <div>
              <span className="seg-tag">Más popular</span>
              <div className="seg-name">Cobertura Amplia Premium</div>
              <div className="seg-desc">Protección total: daños propios, robo, RC ilimitada y asistencia vial sin costo.</div>
              <ul className="seg-features">
                <li>Robo total y parcial cubierto</li>
                <li>Daños materiales sin deducible</li>
                <li>RC hasta $5,000,000 MXN</li>
              </ul>
            </div>
            <div>
              <div className="seg-price">$1,890</div>
              <div className="seg-price-sub">por mes</div>
            </div>
          </div>

          <div className="seguro-card reveal reveal-delay-1">
            <span className="seg-tag">Cobertura básica</span>
            <div className="seg-name">Plan Esencial</div>
            <div className="seg-desc">Responsabilidad civil y asistencia básica en carretera. Ideal para uso urbano moderado.</div>
            <ul className="seg-features">
              <li>RC hasta $1,500,000 MXN</li>
              <li>Asistencia vial básica</li>
              <li>Gastos médicos ocupantes</li>
            </ul>
            <div className="seg-price-dark">$620 <span>/ mes</span></div>
          </div>

          <div className="seguro-card reveal reveal-delay-2">
            <span className="seg-tag">Vehículos eléctricos</span>
            <div className="seg-name">Seguro Eléctrico+</div>
            <div className="seg-desc">Diseñado para eléctricos e híbridos. Cubre batería, cargador y asistencia de carga 24/7.</div>
            <ul className="seg-features">
              <li>Batería y cargador cubiertos</li>
              <li>Auto sustituto eléctrico</li>
              <li>Asistencia de carga 24/7</li>
            </ul>
            <div className="seg-price-dark">$1,340 <span>/ mes</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
