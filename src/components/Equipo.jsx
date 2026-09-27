import { equipo } from '../content.js'

export default function Equipo() {
  return (
    <section className="equipo" id="equipo">
      <div className="wrap">
        <h2>Nuestro equipo</h2>
        <div className="equipo-grid">
          {equipo.map((persona, index) => (
            <div className="persona" key={`${persona.nombre}-${index}`}>
              <div className="avatar">
                {persona.foto ? (
                  <img
                    className="avatar-image"
                    src={persona.foto}
                    alt={persona.nombre}
                  />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              <h3>{persona.nombre}</h3>
              <span className="rol">{persona.rol}</span>
              <p className="bio">{persona.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
