import { Link } from 'react-router-dom'
import heroBg from '../assets/hero-bg.png'
import carsImg from '../assets/cars.png'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero-landing">

      {/* Top strip */}
      <div className="hero-strip">
        <img className="hero-strip-bg" src={heroBg} alt="" />
        <div className="hero-strip-left">
          <div className="hero-headline">
            Tu próximo auto,<br /><em>a la puerta</em> de tu casa
          </div>
          <div className="hero-strip-meta">
            <div className="hs-badge">
              <div className="hs-dot" />
              Entrega en 48 horas · Sin costo adicional
            </div>
            <Link to="/car" className="hero-strip-cta">Comprar ahora →</Link>
          </div>
        </div>
      </div>

      {/* 3 panels */}
      <div className="hero-panels">

        <Link to="/car" className="hero-panel hp-1">
          <img src={carsImg} alt="Autos disponibles" className="panel-bg-img" />
          <svg className="panel-pattern" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="g1" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M40 0L0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="400" height="500" fill="url(#g1)" />
          </svg>
          <div className="panel-content">
            <div className="delivery-pill"><div className="delivery-pill-dot" />Entrega a domicilio</div>
            <div className="panel-num"><span>01</span> Venta de Autos</div>
            <div className="panel-title">Compra tu<br />auto hoy</div>
            <div className="panel-desc">Elige tu modelo, financia desde el 10% de enganche y recibe tu vehículo en la puerta de tu casa.</div>
            <div className="panel-features">
              <div className="panel-feat"><div className="panel-feat-dot" />Tasas desde 7.9% anual</div>
              <div className="panel-feat"><div className="panel-feat-dot" />Entrega garantizada en 48 h</div>
              <div className="panel-feat"><div className="panel-feat-dot" />Aprobación en minutos</div>
            </div>
            <div className="panel-cta-row">
              <span className="panel-link">Ver catálogo</span>
              <div className="panel-arrow">→</div>
            </div>
          </div>
        </Link>

        <Link to="/insurance" className="hero-panel hp-2">
          <svg className="panel-pattern" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="d2" width="28" height="28" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.06)" />
              </pattern>
            </defs>
            <rect width="400" height="500" fill="url(#d2)" />
          </svg>
          <div className="panel-content">
            <div className="panel-num"><span>02</span> Seguros</div>
            <div className="panel-title">Protección<br />total</div>
            <div className="panel-desc">Coberturas desde básica hasta amplia sin deducible. Hasta 30% de descuento al comprar tu auto.</div>
            <div className="panel-features">
              <div className="panel-feat"><div className="panel-feat-dot" />30% desc. al comprar con nosotros</div>
              <div className="panel-feat"><div className="panel-feat-dot" />Asistencia vial 24/7</div>
              <div className="panel-feat"><div className="panel-feat-dot" />Cotización instantánea</div>
            </div>
            <div className="panel-cta-row">
              <span className="panel-link">Ver planes</span>
              <div className="panel-arrow">→</div>
            </div>
          </div>
        </Link>

        <Link to="/after-sales" className="hero-panel hp-3">
          <svg className="panel-pattern" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="l3" width="22" height="22" patternUnits="userSpaceOnUse">
                <line x1="0" y1="22" x2="22" y2="0" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" />
              </pattern>
            </defs>
            <rect width="400" height="500" fill="url(#l3)" />
          </svg>
          <div className="panel-content">
            <div className="panel-num"><span>03</span> Productos Postventa</div>
            <div className="panel-title">Beneficios<br />duraderos</div>
            <div className="panel-desc">Garantía extendida, lealtad, mantenimiento y más. Tu relación con nosotros comienza al comprar.</div>
            <div className="panel-features">
              <div className="panel-feat"><div className="panel-feat-dot" />Garantía extendida hasta 5 años</div>
              <div className="panel-feat"><div className="panel-feat-dot" />Puntos AutoPoints en cada visita</div>
              <div className="panel-feat"><div className="panel-feat-dot" />Mantenimiento prepagado</div>
            </div>
            <div className="panel-cta-row">
              <span className="panel-link">Ver beneficios</span>
              <div className="panel-arrow">→</div>
            </div>
          </div>
        </Link>

      </div>
    </section>
  )
}
