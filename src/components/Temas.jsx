import { temas, pilares } from '../content.js'

export default function Temas() {
  return (
    <section className="temas" id="temas">
      <div className="wrap">
        <h2>Temática vista en la formación</h2>
        <p>
          Estos fueron los ejes centrales que trabajamos y que aplicamos después en el día a
          día del equipo.
        </p>
        <div className="tema-list">
          {temas.map((tema) => (
            <div className="tema-item" key={tema.titulo}>
              <h3>{tema.titulo}</h3>
              <p>{tema.descripcion}</p>

              {tema.pilares && (
                <div className="tema-pilares-grid">
                  {pilares.map((pilar, index) => (
                    <div className="tema-pilar-item" key={pilar.titulo}>
                      <span className="tema-pilar-numero">{index + 1}</span>
                      <span className="tema-pilar-icono" aria-hidden="true">
                        {pilar.icono}
                      </span>
                      <h4>{pilar.titulo}</h4>
                      <p>{pilar.descripcion}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
