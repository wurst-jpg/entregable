import './FiltroBoton.css'

function FiltroBoton({ nombre, activo, alClic }) {
  // Si el filtro está activo se agrega la clase extra y la marca ✓
  let clase = 'nutricion-filtro-btn'
  let texto = nombre
  if (activo) {
    clase = 'nutricion-filtro-btn nutricion-filtro-btn-activo'
    texto = '✓ ' + nombre
  }

  return (
    <button type="button" className={clase} aria-pressed={activo} onClick={alClic}>
      {texto}
    </button>
  )
}

export default FiltroBoton
