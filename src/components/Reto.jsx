import { retos } from '../content.js'

export default function Reto() {
  return (
    <section className="reto" id="reto">
      <div className="wrap">
        <h2>Lo que nos dejó el reto</h2>
        <p className="sub">
          El reto sobre tipos de comunicación pidió identificar, de forma individual, si una
          interacción del equipo era pasiva, agresiva, pasivo-agresiva o asertiva, y proponer
          cómo reformularla. Esto fue lo que cada quien se llevó.
        </p>

        <div className="reto-individual-grid">
          {retos.map((r) => (
            <article className="reto-box reto-individual" key={r.nombre}>
              <header className="reto-individual-header">
                <img src={r.foto} alt={r.nombre} className="reto-individual-foto" />
                <div>
                  <p className="reto-individual-etiqueta">Reto individual</p>
                  <h3 className="quien">{r.nombre}</h3>
                </div>
              </header>
              <p className="texto">{r.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
