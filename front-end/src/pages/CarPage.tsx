import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import { useCars } from '../context/CarContext'
import { getCarImage } from '../assets/carImages'
import type { Car } from '../types/car'
import carsImg from '../assets/cars.png'
import './Page.css'
import './CarPage.css'

// ── Helpers ──────────────────────────────────────────────────────────────────

function formatPrice(n: number) {
  return '$' + n.toLocaleString('es-MX')
}

function fuelLabel(f: string) {
  return { petrol: 'Gasolina', diesel: 'Diésel', electric: 'Eléctrico', hybrid: 'Híbrido' }[f] ?? f
}

function badgeFor(car: Car) {
  if (car.fuel_type === 'electric') return 'elec'
  if (car.condition === 'used') return 'used'
  return null
}

// ── Spotlight: shown when agent highlights a car ─────────────────────────────

function CarSpotlight({ car, onDismiss }: { car: Car; onDismiss: () => void }) {
  const img = getCarImage(car.product_id)
  return (
    <div className="car-spotlight">
      <div className="spotlight-badge">
        <div className="spotlight-dot" />
        Recomendado por tu asesor IA
      </div>
      <button className="spotlight-dismiss" onClick={onDismiss} aria-label="Cerrar">✕</button>

      <div className="spotlight-body">
        <div className="spotlight-img">
          <img src={img.url} alt={img.alt} className="spotlight-photo" />
          {car.inventory_status === 'sold' && <div className="spotlight-sold-overlay">No disponible</div>}
        </div>

        <div className="spotlight-info">
          <div className="spotlight-brand">{car.brand}</div>
          <h2 className="spotlight-name">{car.name}</h2>
          <p className="spotlight-desc">{car.description}</p>

          <div className="spotlight-tags">
            <span className="stag">{car.year}</span>
            <span className="stag">{fuelLabel(car.fuel_type)}</span>
            <span className="stag">{car.body_type}</span>
            <span className="stag">{car.color}</span>
            {car.condition === 'used' && <span className="stag used">{car.mileage.toLocaleString()} km</span>}
          </div>

          <div className="spotlight-price-row">
            <span className="spotlight-price">{formatPrice(car.unit_price)}</span>
            <span className="spotlight-currency">MXN</span>
          </div>

          <div className="spotlight-actions">
            {car.inventory_status === 'available'
              ? <button className="product-cta spotlight-cta">Cotizar este modelo</button>
              : <span className="spotlight-unavailable">Unidad no disponible — consulta opciones similares</span>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Car card ─────────────────────────────────────────────────────────────────

function CarCard({ car, highlighted }: { car: Car; highlighted: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const img = getCarImage(car.product_id)

  useEffect(() => {
    if (highlighted && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [highlighted])

  const badge = badgeFor(car)

  return (
    <div ref={ref} className={`product-card${highlighted ? ' card-highlighted' : ''}${car.inventory_status === 'sold' ? ' card-sold' : ''}`}>
      <div className="product-img">
        {badge === 'elec' && <span className="car-badge-tag elec">Eléctrico</span>}
        {badge === 'used' && <span className="car-badge-tag used">Seminuevo</span>}
        {car.inventory_status === 'sold' && <div className="card-sold-overlay">No disponible</div>}
        <img src={img.url} alt={img.alt} className="product-photo" loading="lazy" />
      </div>
      <div className="product-info">
        <div className="product-brand">{car.brand}</div>
        <div className="product-name">{car.model} <span className="product-color">{car.color}</span></div>
        <div className="product-price-row">
          <span className="product-price">{formatPrice(car.unit_price)}</span>
          <span className="product-currency">MXN</span>
        </div>
        <div className="product-tags">
          <span className="ptag">{car.year}</span>
          <span className="ptag">{fuelLabel(car.fuel_type)}</span>
          {car.condition === 'used' && <span className="ptag used">{car.mileage.toLocaleString()} km</span>}
        </div>
        <button className="product-cta" disabled={car.inventory_status === 'sold'}>
          {car.inventory_status === 'sold' ? 'No disponible' : 'Cotizar este modelo'}
        </button>
      </div>
    </div>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function CarPage() {
  const { cars, loading, error, highlightedCar, setHighlightedCar } = useCars()
  const spotlightRef = useRef<HTMLDivElement>(null)

  // Scroll to spotlight when a car is highlighted
  useEffect(() => {
    if (highlightedCar && spotlightRef.current) {
      spotlightRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [highlightedCar])

  const available = cars.filter(c => c.inventory_status === 'available')
  const sold      = cars.filter(c => c.inventory_status === 'sold')

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

      {/* ── Agent spotlight ── */}
      {highlightedCar && (
        <div ref={spotlightRef} className="spotlight-wrapper">
          <CarSpotlight car={highlightedCar} onDismiss={() => setHighlightedCar(null)} />
        </div>
      )}

      {/* ── Catalog ── */}
      <section className="page-section" id="catalogo">
        <div className="page-section-header">
          <div className="section-label">Catálogo completo</div>
          <div className="section-title">
            {loading ? 'Cargando vehículos…' : `${available.length} vehículos disponibles`}
          </div>
        </div>

        {error && (
          <div className="cars-error">
            No se pudo cargar el inventario. Por favor intenta de nuevo.
          </div>
        )}

        {loading && (
          <div className="cars-loading">
            {[...Array(6)].map((_, i) => <div key={i} className="car-skeleton" />)}
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="product-grid">
              {available.map(car => (
                <CarCard
                  key={car.product_id}
                  car={car}
                  highlighted={highlightedCar?.product_id === car.product_id}
                />
              ))}
            </div>

            {sold.length > 0 && (
              <>
                <div className="cars-divider">
                  <span>Unidades no disponibles</span>
                </div>
                <div className="product-grid product-grid-muted">
                  {sold.map(car => (
                    <CarCard
                      key={car.product_id}
                      car={car}
                      highlighted={highlightedCar?.product_id === car.product_id}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </section>
    </PageLayout>
  )
}
