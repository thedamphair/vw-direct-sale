import { useReveal } from '../hooks/useReveal'
import carsImg from '../assets/cars.png'
import './VentaSection.css'

const cars = [
  { id: 1, featured: true, type: 'SUV Premium', name: 'Tiguan Allspace', price: '$689,900', monthly: 'desde $8,200 / mes', specs: [{ val: '2.0T', key: 'Motor' }, { val: '220hp', key: 'Potencia' }, { val: '7', key: 'Plazas' }, { val: 'DSG', key: 'Trans.' }], badge: null },
  { id: 2, featured: false, type: 'Sedán', name: 'Jetta GLi', price: '$492,500', monthly: 'desde $5,800/mes', badge: 'hot' },
  { id: 3, featured: false, type: 'Hatchback', name: 'Golf GTI', price: '$558,000', monthly: 'desde $6,600/mes', badge: null },
  { id: 4, featured: false, type: 'Eléctrico', name: 'ID.4 Pro', price: '$841,000', monthly: 'desde $9,900/mes', badge: 'elec' },
  { id: 5, featured: false, type: 'SUV Compacta', name: 'T-Cross', price: '$398,900', monthly: 'desde $4,700/mes', badge: null },
]

export default function VentaSection() {
  const ref = useReveal()

  return (
    <section id="venta" className="venta-section" ref={ref}>
      <div className="section-header reveal">
        <div>
          <div className="section-label">01 — Venta de Autos</div>
          <div className="section-title">Encuentra tu<br />vehículo ideal</div>
        </div>
        <a href="#" className="section-link">Ver catálogo completo →</a>
      </div>

      <div className="cars-grid">
        {cars.map((car, i) => (
          <div key={car.id} className={`car-card ${car.featured ? 'featured' : 'small'} reveal${i > 0 ? ` reveal-delay-${Math.min(i, 3)}` : ''}`}>
            <div className="car-img">
              {car.featured
                ? <img src={carsImg} alt="Vehículos disponibles" className="car-featured-img" />
                : <>
                    {car.badge === 'hot'  && <span className="car-badge-tag hot">Más vendido</span>}
                    {car.badge === 'elec' && <span className="car-badge-tag elec">Eléctrico</span>}
                    {car.badge === 'new'  && <span className="car-badge-tag new">Nuevo</span>}
                    <div className="car-img-inner"><span className="img-label">foto modelo</span></div>
                  </>
              }
            </div>
            <div className="car-info">
              <div className="car-type">{car.type}</div>
              <div className="car-name">{car.name}</div>
              <div className="car-price-row">
                <div className="car-price">{car.price}</div>
                <div className="car-price-sub">MXN</div>
              </div>
              <div className="car-monthly">{car.monthly}</div>
              {car.specs && (
                <div className="car-specs">
                  {car.specs.map(s => (
                    <div key={s.key} className="spec">
                      <div className="spec-val">{s.val}</div>
                      <div className="spec-key">{s.key}</div>
                    </div>
                  ))}
                </div>
              )}
              <a href="#" className="car-cta">{car.featured ? 'Cotizar este modelo' : 'Ver oferta'}</a>
            </div>
          </div>
        ))}
      </div>

      <div className="financing-strip reveal">
        <div className="fin-text">
          <h3>Simulador de Financiamiento</h3>
          <p>Calcula tu mensualidad en segundos. Sin buró, sin compromisos.</p>
        </div>
        <div className="fin-rates">
          <div className="rate"><div className="rate-val">7.9%</div><div className="rate-label">Tasa anual</div></div>
          <div className="rate"><div className="rate-val">84</div><div className="rate-label">Meses máx.</div></div>
          <div className="rate"><div className="rate-val">10%</div><div className="rate-label">Enganche mín.</div></div>
        </div>
        <a href="#" className="fin-cta">Calcular mensualidad →</a>
      </div>
    </section>
  )
}
