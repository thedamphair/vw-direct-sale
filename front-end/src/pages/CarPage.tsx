import { Link } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import carsImg from '../assets/cars.png'
import './Page.css'

const models = [
  { id: 1, brand: 'Volkswagen', type: 'SUV Premium',   name: 'Tiguan Allspace', price: '$689,900', monthly: '$8,200/mes',  badge: null,   specs: [{ val: '2.0T', key: 'Motor' }, { val: '220hp', key: 'Potencia' }, { val: '7', key: 'Plazas' }, { val: 'DSG', key: 'Trans.' }] },
  { id: 2, brand: 'Volkswagen', type: 'Sedán',          name: 'Jetta GLi',       price: '$492,500', monthly: '$5,800/mes',  badge: 'hot',  specs: [{ val: '1.4T', key: 'Motor' }, { val: '150hp', key: 'Potencia' }, { val: '5', key: 'Plazas' }, { val: 'DSG', key: 'Trans.' }] },
  { id: 3, brand: 'Volkswagen', type: 'Hatchback',      name: 'Golf GTI',        price: '$558,000', monthly: '$6,600/mes',  badge: null,   specs: [{ val: '2.0T', key: 'Motor' }, { val: '245hp', key: 'Potencia' }, { val: '5', key: 'Plazas' }, { val: 'DSG', key: 'Trans.' }] },
  { id: 4, brand: 'Volkswagen', type: 'Eléctrico',      name: 'ID.4 Pro',        price: '$841,000', monthly: '$9,900/mes',  badge: 'elec', specs: [{ val: 'Eléc.', key: 'Motor' }, { val: '204hp', key: 'Potencia' }, { val: '5', key: 'Plazas' }, { val: 'Auto', key: 'Trans.' }] },
  { id: 5, brand: 'Volkswagen', type: 'SUV Compacta',   name: 'T-Cross',         price: '$398,900', monthly: '$4,700/mes',  badge: null,   specs: [{ val: '1.0T', key: 'Motor' }, { val: '110hp', key: 'Potencia' }, { val: '5', key: 'Plazas' }, { val: 'AT',  key: 'Trans.' }] },
  { id: 6, brand: 'Audi',       type: 'Hatchback',      name: 'A3 Sedan',        price: '$629,900', monthly: '$7,400/mes',  badge: null,   specs: [{ val: '1.4T', key: 'Motor' }, { val: '150hp', key: 'Potencia' }, { val: '5', key: 'Plazas' }, { val: 'S-Tronic', key: 'Trans.' }] },
  { id: 7, brand: 'Audi',       type: 'SUV',            name: 'Q5',              price: '$1,049,900','monthly': '$12,300/mes', badge: null, specs: [{ val: '2.0T', key: 'Motor' }, { val: '249hp', key: 'Potencia' }, { val: '5', key: 'Plazas' }, { val: 'S-Tronic', key: 'Trans.' }] },
  { id: 8, brand: 'Seat',       type: 'Hatchback',      name: 'Leon',            price: '$479,900', monthly: '$5,600/mes',  badge: null,   specs: [{ val: '1.5T', key: 'Motor' }, { val: '150hp', key: 'Potencia' }, { val: '5', key: 'Plazas' }, { val: 'DSG', key: 'Trans.' }] },
  { id: 9, brand: 'Seat',       type: 'SUV Compacta',   name: 'Arona',           price: '$429,900', monthly: '$5,000/mes',  badge: 'new',  specs: [{ val: '1.0T', key: 'Motor' }, { val: '110hp', key: 'Potencia' }, { val: '5', key: 'Plazas' }, { val: 'AT',  key: 'Trans.' }] },
]

export default function CarPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <div className="page-hero" style={{ backgroundImage: `url(${carsImg})` }}>
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <div className="page-breadcrumb"><Link to="/">Inicio</Link> / Venta de Autos</div>
          <div className="page-label">01 — Venta de Autos</div>
          <h1 className="page-title">Encuentra tu<br /><em>vehículo ideal</em></h1>
          <p className="page-subtitle">Financia desde el 10% de enganche · Tasas desde 7.9% · Entrega en 48 h</p>
        </div>
      </div>

      {/* Financing bar */}
      <div className="page-fin-bar">
        <div className="fin-bar-item"><span className="fin-bar-val">7.9%</span><span className="fin-bar-key">Tasa anual</span></div>
        <div className="fin-bar-sep" />
        <div className="fin-bar-item"><span className="fin-bar-val">84</span><span className="fin-bar-key">Meses máx.</span></div>
        <div className="fin-bar-sep" />
        <div className="fin-bar-item"><span className="fin-bar-val">10%</span><span className="fin-bar-key">Enganche mín.</span></div>
        <div className="fin-bar-sep" />
        <a href="#catalogo" className="fin-bar-cta">Calcular mensualidad →</a>
      </div>

      {/* Catalog */}
      <section className="page-section" id="catalogo">
        <div className="page-section-header">
          <div className="section-label">Catálogo completo</div>
          <div className="section-title">Todos los modelos</div>
        </div>
        <div className="product-grid">
          {models.map(car => (
            <div key={car.id} className="product-card">
              <div className="product-img">
                {car.badge === 'hot'  && <span className="car-badge-tag hot">Más vendido</span>}
                {car.badge === 'elec' && <span className="car-badge-tag elec">Eléctrico</span>}
                {car.badge === 'new'  && <span className="car-badge-tag new">Nuevo</span>}
                <div className="product-img-placeholder"><span className="img-label">{car.brand} · {car.type}</span></div>
              </div>
              <div className="product-info">
                <div className="product-brand">{car.brand}</div>
                <div className="product-name">{car.name}</div>
                <div className="product-price-row">
                  <span className="product-price">{car.price}</span>
                  <span className="product-currency">MXN</span>
                </div>
                <div className="product-monthly">{car.monthly}</div>
                <div className="product-specs">
                  {car.specs.map(s => (
                    <div key={s.key} className="spec">
                      <div className="spec-val">{s.val}</div>
                      <div className="spec-key">{s.key}</div>
                    </div>
                  ))}
                </div>
                <button className="product-cta">Cotizar este modelo</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  )
}
