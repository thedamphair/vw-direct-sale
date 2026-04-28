import { Link } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import './Page.css'

const products = [
  { id: 1, icon: '🔧', tag: 'Más solicitado',    tagBlue: true,  name: 'Garantía Extendida',  desc: 'Extiende la garantía de fábrica hasta 5 años adicionales. Más de 1,000 componentes cubiertos, sin deducible.', price: 'Desde $4,500', period: 'pago único' },
  { id: 2, icon: '🛞', tag: 'Ahorra 40%',         tagBlue: true,  name: 'Pack Mantenimiento',  desc: 'Servicio preventivo prepagado a precio fijo. Aceite, filtros, frenos y llantas sin sorpresas.', price: 'Desde $2,800', period: 'por servicio' },
  { id: 3, icon: '⭐', tag: 'Gratis al comprar',  tagBlue: false, name: 'Programa de Lealtad', desc: 'Acumula AutoPoints en cada servicio y pago. Canjéalos por descuentos y preventivos gratis.', price: 'Gratis', period: 'al comprar' },
  { id: 4, icon: '📱', tag: 'iOS & Android',      tagBlue: false, name: 'AutoConnect App',     desc: 'Gestiona tu crédito, programa servicios y contacta a tu asesor desde la app, en cualquier momento.', price: 'Gratis', period: 'descarga' },
  { id: 5, icon: '🔄', tag: 'Sin penalización',   tagBlue: false, name: 'Plan de Renovación',  desc: 'Cambia tu auto antes de terminar tu crédito. El valor de tu vehículo se aplica como enganche del siguiente.', price: 'Sin costo', period: 'adicional' },
  { id: 6, icon: '🎁', tag: 'MSI disponible',     tagBlue: true,  name: 'Accesorios Originales', desc: 'Personaliza tu vehículo con accesorios a meses sin intereses. Instalación certificada y garantía incluida.', price: 'Desde $800', period: 'por accesorio' },
]

export default function AfterSalesPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <div className="page-hero page-hero-aftersales">
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <div className="page-breadcrumb"><Link to="/">Inicio</Link> / Productos Postventa</div>
          <div className="page-label">03 — Productos Postventa</div>
          <h1 className="page-title">Beneficios que<br /><em>duran contigo</em></h1>
          <p className="page-subtitle">Garantía extendida · Programa de lealtad · Mantenimiento prepagado</p>
        </div>
      </div>

      {/* Products */}
      <section className="page-section">
        <div className="page-section-header">
          <div className="section-label">Servicios disponibles</div>
          <div className="section-title">Todo lo que necesitas<br />después de tu compra</div>
        </div>
        <div className="aftersales-grid">
          {products.map(p => (
            <div key={p.id} className="aftersales-card">
              <div className="as-top">
                <div className="as-icon">{p.icon}</div>
                <div className="as-name">{p.name}</div>
                <div className="as-desc">{p.desc}</div>
              </div>
              <div className="as-bottom">
                <div className="as-price-row">
                  <span className="as-price">{p.price}</span>
                  <span className="as-period">{p.period}</span>
                </div>
                <span className={`pv-tag${p.tagBlue ? ' blue' : ''}`}>{p.tag}</span>
              </div>
              <button className="product-cta">Contratar →</button>
            </div>
          ))}
        </div>
      </section>

      {/* Banner */}
      <div className="page-banner">
        <div>
          <h3>¿Ya tienes tu auto?</h3>
          <p>Activa tus beneficios postventa en cualquier momento. Un asesor te guiará en el proceso.</p>
        </div>
        <div className="page-banner-actions">
          <Link to="/car" className="btn-primary">Ver vehículos</Link>
          <Link to="/insurance" className="btn-outline">Ver seguros</Link>
        </div>
      </div>
    </PageLayout>
  )
}
