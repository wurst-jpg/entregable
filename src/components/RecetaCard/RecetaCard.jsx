import './RecetaCard.css'

function RecetaCard({ receta }) {
  return (
    <article className="receta-card">
      <h2 className="receta-card-nombre">{receta.nombre}</h2>
      <p>{receta.descripcion}</p>
      <ul className="receta-card-etiquetas">
        {receta.restricciones.map((restriccion) => (
          <li key={restriccion} className="receta-card-etiqueta">
            {restriccion}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default RecetaCard
