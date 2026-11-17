import { useState } from 'react'
import { restricciones, recetas } from '../../data/recetas'
import FiltroBoton from '../../components/FiltroBoton/FiltroBoton'
import RecetaCard from '../../components/RecetaCard/RecetaCard'
import fotoCocina from '../../assets/cocina.jpg'
import './NutricionView.css'

function NutricionView() {
  // Filtros que el usuario tiene activos
  const [activos, setActivos] = useState([])
  // Datos estáticos guardados en estado local
  const [listaRecetas] = useState(recetas)

  // Agrega el filtro si no estaba activo, o lo quita si ya estaba
  function alternar(nombre) {
    if (activos.includes(nombre)) {
      setActivos(activos.filter((filtro) => filtro !== nombre))
    } else {
      setActivos([...activos, nombre])
    }
  }

  return (
    <main className="nutricion">
      <img src={fotoCocina} alt="" className="nutricion-banner" />
      <h1 className="nutricion-titulo">Filtros por restricción</h1>
      <p>Elige una o varias restricciones alimentarias.</p>

      <div className="nutricion-filtros">
        {restricciones.map((restriccion) => (
          <FiltroBoton
            key={restriccion}
            nombre={restriccion}
            activo={activos.includes(restriccion)}
            alClic={() => alternar(restriccion)}
          />
        ))}
      </div>

      <ul className="nutricion-recetas">
        {listaRecetas.map((receta) => (
          <li key={receta.id}>
            <RecetaCard receta={receta} />
          </li>
        ))}
      </ul>
    </main>
  )
}

export default NutricionView
