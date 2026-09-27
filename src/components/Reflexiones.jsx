import { reflexiones } from '../content.js'

export default function Reflexiones() {
  return (
    <section className="reflexiones" id="reflexiones">
      <div className="wrap">
        <h2>Reflexión individual de cierre de trimestre</h2>
        <p className="sub">
          Qué aprendió significativamente cada aprendiz sobre la competencia de comunicación
          al finalizar el trimestre.
        </p>

        {reflexiones.map((r) => (
          <div className="refl-item" key={r.nombre}>
            <div className="quien">{r.nombre}</div>
            <p className="texto">{r.texto}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
