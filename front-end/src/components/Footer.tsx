import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#" className="nav-logo">Auto<span>Finance</span></a>
          <p>Financiamiento automotriz inteligente. Tu aliado en cada etapa de tu vida sobre ruedas.</p>
        </div>
        <div className="footer-col">
          <h4>Venta de Autos</h4>
          <ul>
            <li><a href="#">Catálogo completo</a></li>
            <li><a href="#">SUV y Crossover</a></li>
            <li><a href="#">Sedanes</a></li>
            <li><a href="#">Eléctricos</a></li>
            <li><a href="#">Simulador de crédito</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Seguros</h4>
          <ul>
            <li><a href="#">Cobertura amplia</a></li>
            <li><a href="#">Cobertura básica</a></li>
            <li><a href="#">Seguro para eléctricos</a></li>
            <li><a href="#">Comparar planes</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Postventa</h4>
          <ul>
            <li><a href="#">Garantía extendida</a></li>
            <li><a href="#">Programa de lealtad</a></li>
            <li><a href="#">Mantenimiento</a></li>
            <li><a href="#">AutoConnect App</a></li>
            <li><a href="#">Accesorios</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 AutoFinance. Todos los derechos reservados.</span>
        <span>Aviso de privacidad · Términos y condiciones · CONDUSEF</span>
      </div>
    </footer>
  )
}
