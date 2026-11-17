import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <span className="navbar-nombre">Sa·zón</span>
      <nav>
        <ul className="navbar-enlaces">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Recetas</a></li>
          <li><a href="#">Nutrición</a></li>
          <li><a href="#">Despensa</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
