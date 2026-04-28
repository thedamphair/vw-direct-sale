import { Link } from 'react-router-dom'
import VWFSLogo from './VWFSLogo'
import './Nav.css'

export default function Nav() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-logo-link">
        <VWFSLogo className="nav-logo-svg" />
      </Link>
    </nav>
  )
}
