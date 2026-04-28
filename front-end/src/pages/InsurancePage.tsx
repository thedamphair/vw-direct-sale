import { Link } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import './Page.css'

const plans = [
  {
    id: 1, tag: 'Más popular', highlighted: true,
    name: 'Cobertura Amplia Premium',
    desc: 'Protección total: daños propios, robo, RC ilimitada y asistencia vial sin costo.',
    price: '$1,890', period: 'por mes',
    features: ['Robo total y parcial cubierto', 'Daños materiales sin deducible', 'RC hasta $5,000,000 MXN', 'Auto sustituto incluido', 'Asistencia vial 24/7'],
  },
  {
    id: 2, tag: 'Cobertura básica', highlighted: false,
    name: 'Plan Esencial',
    desc: 'Responsabilidad civil y asistencia básica en carretera. Ideal para uso urbano moderado.',
    price: '$620', period: 'por mes',
    features: ['RC hasta $1,500,000 MXN', 'Asistencia vial básica', 'Gastos médicos ocupantes', 'Defensa legal incluida'],
  },
  {
    id: 3, tag: 'Vehículos eléctricos', highlighted: false,
    name: 'Seguro Eléctrico+',
    desc: 'Diseñado para eléctricos e híbridos. Cubre batería, cargador y asistencia de carga 24/7.',
    price: '$1,340', period: 'por mes',
    features: ['Batería y cargador cubiertos', 'Auto sustituto eléctrico', 'Asistencia de carga 24/7', 'RC hasta $3,000,000 MXN'],
  },
]

export default function InsurancePage() {
  return (
    <PageLayout>
      {/* Hero */}
      <div className="page-hero page-hero-insurance">
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <div className="page-breadcrumb"><Link to="/">Inicio</Link> / Seguros</div>
          <div className="page-label">02 — Seguros</div>
          <h1 className="page-title">Protección<br /><em>sin límites</em></h1>
          <p className="page-subtitle">Hasta 30% de descuento al comprar con tu auto · Cotización instantánea · Asistencia 24/7</p>
        </div>
      </div>

      {/* Callout */}
      <div className="page-callout-bar">
        <div className="callout-bar-icon">🛡️</div>
        <p>Al adquirir tu auto con nosotros, obtienes hasta <strong>30% de descuento</strong> en tu primera póliza.</p>
        <span className="callout-bar-badge">Beneficio exclusivo AutoFinance</span>
      </div>

      {/* Plans */}
      <section className="page-section">
        <div className="page-section-header">
          <div className="section-label">Planes disponibles</div>
          <div className="section-title">Elige tu cobertura</div>
        </div>
        <div className="insurance-grid">
          {plans.map(plan => (
            <div key={plan.id} className={`insurance-card${plan.highlighted ? ' highlighted' : ''}`}>
              <div className="ins-tag">{plan.tag}</div>
              <div className="ins-name">{plan.name}</div>
              <div className="ins-desc">{plan.desc}</div>
              <ul className="ins-features">
                {plan.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              <div className="ins-price-row">
                <span className="ins-price">{plan.price}</span>
                <span className="ins-period">{plan.period}</span>
              </div>
              <button className="product-cta">Contratar este plan</button>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  )
}
