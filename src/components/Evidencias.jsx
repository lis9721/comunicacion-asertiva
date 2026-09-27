import { useState } from 'react'
import { evidencias } from '../content.js'

export default function Evidencias({ onNavigate }) {
  const [open, setOpen] = useState(false)

  return (
    <section className="evidencias" id="evidencias">
      <div className="wrap">
        <h2>Evidencias</h2>

        <div className="evidencia-dropdown">
          <button
            type="button"
            className="evidencia-trigger"
            onClick={() => setOpen((value) => !value)}
          >
            Ver nombres
          </button>

          {open && (
            <div className="evidencia-mini-menu">
              {evidencias.map((ev) => (
                <button
                  key={ev.slug}
                  type="button"
                  className="mini-menu-item"
                  onClick={() => {
                    setOpen(false)
                    if (onNavigate) {
                      onNavigate(ev.link)
                    } else {
                      window.history.pushState({}, '', ev.link)
                      window.dispatchEvent(new PopStateEvent('popstate'))
                    }
                  }}
                >
                  {ev.nombre}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
