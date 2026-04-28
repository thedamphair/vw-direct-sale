import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import InlineAgent from '../components/InlineAgent'
import './Page.css'

const plans = [
  {
    id: 1, tag: 'Más popular', highlighted: true,
    name: 'Cobertura Amplia Premium',
    desc: 'Protección total: daños propios, robo, RC ilimitada y asistencia vial sin costo.',
    price: '$1,890', period: 'por mes', annual: '$21,500 / año',
    features: [
      'Robo total y parcial cubierto',
      'Daños materiales sin deducible',
      'RC hasta $5,000,000 MXN',
      'Auto sustituto incluido',
      'Asistencia vial 24/7',
      'Gastos médicos ocupantes',
      'Defensa legal y fianza',
    ],
  },
  {
    id: 2, tag: 'Cobertura básica', highlighted: false,
    name: 'Plan Esencial',
    desc: 'Responsabilidad civil y asistencia básica en carretera. Ideal para uso urbano moderado.',
    price: '$620', period: 'por mes', annual: '$6,500 / año',
    features: [
      'RC hasta $1,500,000 MXN',
      'Asistencia vial básica',
      'Gastos médicos ocupantes',
      'Defensa legal incluida',
    ],
  },
  {
    id: 3, tag: 'Vehículos eléctricos', highlighted: false,
    name: 'Seguro Eléctrico+',
    desc: 'Diseñado para eléctricos e híbridos. Cubre batería, cargador y asistencia de carga 24/7.',
    price: '$1,340', period: 'por mes', annual: '$14,500 / año',
    features: [
      'Batería y cargador cubiertos',
      'Auto sustituto eléctrico',
      'Asistencia de carga 24/7',
      'RC hasta $3,000,000 MXN',
      'Daños materiales cubiertos',
      'Gastos médicos ocupantes',
    ],
  },
]

const compareFeatures = [
  { label: 'Responsabilidad Civil', esencial: '$1.5M', premium: '$5M', electrico: '$3M' },
  { label: 'Daños materiales', esencial: false, premium: true, electrico: true },
  { label: 'Robo total y parcial', esencial: false, premium: true, electrico: true },
  { label: 'Deducible', esencial: '10%', premium: 'Sin deducible', electrico: '5%' },
  { label: 'Auto sustituto', esencial: false, premium: true, electrico: true },
  { label: 'Asistencia vial', esencial: 'Básica', premium: '24/7 Premium', electrico: '24/7 + Carga' },
  { label: 'Gastos médicos', esencial: true, premium: true, electrico: true },
  { label: 'Defensa legal', esencial: true, premium: true, electrico: true },
  { label: 'Cobertura de batería', esencial: false, premium: false, electrico: true },
  { label: 'Asistencia de carga', esencial: false, premium: false, electrico: true },
]

const benefits = [
  { icon: '🛡️', title: 'Cobertura inmediata', desc: 'Tu póliza se activa al momento de la compra. Sin periodos de espera ni trámites adicionales.' },
  { icon: '💰', title: '30% de descuento', desc: 'Al adquirir tu auto con nosotros, obtienes hasta 30% de descuento en tu primera póliza anual.' },
  { icon: '🚗', title: 'Auto sustituto', desc: 'En planes Premium y Eléctrico+, recibe un auto sustituto mientras el tuyo está en reparación.' },
  { icon: '📞', title: 'Asistencia 24/7', desc: 'Línea directa de atención las 24 horas, los 365 días del año. Siempre estamos para ti.' },
  { icon: '⚡', title: 'Cotización instantánea', desc: 'Obtén tu cotización personalizada en menos de 2 minutos, sin compromisos ni buró de crédito.' },
  { icon: '🔄', title: 'Renovación automática', desc: 'Tu póliza se renueva automáticamente para que nunca te quedes sin protección.' },
]

const faqs = [
  { q: '¿Puedo contratar un seguro sin comprar el auto con ustedes?', a: 'Sí, nuestros planes de seguro están disponibles para cualquier vehículo Volkswagen, Audi o Seat, sin importar dónde lo hayas adquirido. Sin embargo, el descuento del 30% es exclusivo para compras realizadas con Volkswagen Financial Services.' },
  { q: '¿Qué pasa si tengo un siniestro?', a: 'Llama a nuestra línea de asistencia 24/7. Un ajustador será asignado en menos de 30 minutos. Si tu plan incluye auto sustituto, lo recibirás el mismo día.' },
  { q: '¿Puedo cambiar de plan después de contratar?', a: 'Sí, puedes cambiar de plan en cualquier momento. Si subes de nivel, solo pagas la diferencia proporcional. Si bajas, el cambio aplica en tu próxima renovación.' },
  { q: '¿El Seguro Eléctrico+ cubre la batería al 100%?', a: 'Sí, la batería de tracción y el cargador doméstico están cubiertos al 100% contra defectos, daños por sobretensión y degradación prematura durante la vigencia de la póliza.' },
  { q: '¿Cuánto tarda la cotización?', a: 'La cotización es instantánea. Solo necesitas el modelo de tu vehículo, año y código postal. En menos de 2 minutos tendrás tu precio personalizado.' },
]

export default function InsurancePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

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
        <span className="callout-bar-badge">Beneficio exclusivo VW Financial Services</span>
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
              <div className="ins-annual">{plan.annual}</div>
              <button className="product-cta">Contratar este plan</button>
            </div>
          ))}
        </div>
      </section>

      {/* Agent */}
      <section className="page-section ins-agent-section">
        <div className="ins-agent-layout">
          <div className="ins-agent-intro">
            <div className="section-label">Asesor inteligente</div>
            <div className="section-title">¿Tienes dudas?<br />Pregúntale a nuestro asesor</div>
            <p className="ins-agent-desc">
              Nuestro asesor con inteligencia artificial puede ayudarte a elegir el plan ideal,
              comparar coberturas, cotizar tu seguro y resolver cualquier pregunta al instante.
            </p>
            <div className="ins-agent-features">
              <div className="ins-agent-feat"><div className="ins-agent-feat-dot" />Respuestas instantáneas</div>
              <div className="ins-agent-feat"><div className="ins-agent-feat-dot" />Comparación de planes</div>
              <div className="ins-agent-feat"><div className="ins-agent-feat-dot" />Cotización personalizada</div>
              <div className="ins-agent-feat"><div className="ins-agent-feat-dot" />Disponible 24/7</div>
            </div>
          </div>
          <div className="ins-agent-chat">
            <InlineAgent />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="page-section ins-benefits-section">
        <div className="page-section-header">
          <div className="section-label">¿Por qué elegirnos?</div>
          <div className="section-title">Beneficios exclusivos</div>
        </div>
        <div className="ins-benefits-grid">
          {benefits.map(b => (
            <div key={b.title} className="ins-benefit-card">
              <div className="ins-benefit-icon">{b.icon}</div>
              <div className="ins-benefit-title">{b.title}</div>
              <div className="ins-benefit-desc">{b.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="page-section ins-compare-section">
        <div className="page-section-header">
          <div className="section-label">Comparativa</div>
          <div className="section-title">Compara los planes</div>
        </div>
        <div className="ins-compare-table-wrap">
          <table className="ins-compare-table">
            <thead>
              <tr>
                <th>Cobertura</th>
                <th>Plan Esencial</th>
                <th className="ins-th-highlight">Amplia Premium</th>
                <th>Eléctrico+</th>
              </tr>
            </thead>
            <tbody>
              {compareFeatures.map(row => (
                <tr key={row.label}>
                  <td className="ins-compare-label">{row.label}</td>
                  <td>{renderCell(row.esencial)}</td>
                  <td className="ins-td-highlight">{renderCell(row.premium)}</td>
                  <td>{renderCell(row.electrico)}</td>
                </tr>
              ))}
              <tr className="ins-compare-price-row">
                <td className="ins-compare-label">Precio mensual</td>
                <td><strong>$620</strong></td>
                <td className="ins-td-highlight"><strong>$1,890</strong></td>
                <td><strong>$1,340</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="page-section">
        <div className="page-section-header">
          <div className="section-label">Preguntas frecuentes</div>
          <div className="section-title">Resolvemos tus dudas</div>
        </div>
        <div className="ins-faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className={`ins-faq-item${openFaq === i ? ' open' : ''}`}>
              <button
                className="ins-faq-question"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
              >
                <span>{faq.q}</span>
                <span className="ins-faq-toggle">{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && (
                <div className="ins-faq-answer">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Banner */}
      <div className="page-banner">
        <div>
          <h3>¿Listo para proteger tu auto?</h3>
          <p>Cotiza tu seguro en menos de 2 minutos. Sin compromisos, sin buró de crédito.</p>
        </div>
        <div className="page-banner-actions">
          <Link to="/car" className="btn-primary">Ver vehículos</Link>
          <Link to="/after-sales" className="btn-outline">Ver postventa</Link>
        </div>
      </div>
    </PageLayout>
  )
}

function renderCell(value: boolean | string) {
  if (value === true) return <span className="ins-check">✓</span>
  if (value === false) return <span className="ins-cross">—</span>
  return <span className="ins-cell-text">{value}</span>
}
