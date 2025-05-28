import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Inicio</Link> | 
        <Link to="/about">Nosotros</Link> | 
        <Link to="/cart">Carrito</Link>
      </nav>
    </header>
  )
}

export default Header
