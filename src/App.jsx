import { useEffect, useState } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Intro from './components/Intro.jsx'
import Temas from './components/Temas.jsx'
import Reto from './components/Reto.jsx'
import Evidencias from './components/Evidencias.jsx'
import Equipo from './components/Equipo.jsx'
import Reflexiones from './components/Reflexiones.jsx'
import Footer from './components/Footer.jsx'
import { evidencias } from './content.js'

function getCurrentRoute() {
  const path = window.location.pathname || '/'
  const cleanPath = path.replace(/^\/+|\/+$/g, '')
  return cleanPath || 'home'
}

function BlogHeader({ onNavigate, activeRoute }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { href: '/intro', label: 'Introducción' },
    { href: '/temas', label: 'Temática' },
    { href: '/reto', label: 'Reto' },
    { href: '/evidencias', label: 'Evidencias' },
    { href: '/equipo', label: 'Equipo' },
    { href: '/reflexiones', label: 'Reflexiones' },
  ]

  return (
    <header className="blog-header">
      <div className="wrap">
        <p className="blog-kicker">Blog de aprendizaje</p>
        <h1 className="blog-title">Un Espacio para Comunicarnos</h1>
      </div>

      <div className="blog-nav-sticky">
        <nav className="blog-links wrap">
          {links.map((link) => {
            const isActive = activeRoute === link.href.replace('/', '')

            if (link.href === '/evidencias') {
              return (
                <div key={link.href} className="blog-evidencias-menu">
                  <button
                    type="button"
                    className={isActive ? 'blog-evidencias-trigger active' : 'blog-evidencias-trigger'}
                    onClick={() => setMenuOpen((value) => !value)}
                  >
                    {link.label}
                  </button>

                  {menuOpen && (
                    <div className="blog-evidencias-dropdown">
                      {evidencias.map((ev) => (
                        <button
                          key={ev.slug}
                          type="button"
                          className="blog-evidencias-item"
                          onClick={() => {
                            setMenuOpen(false)
                            onNavigate(ev.link)
                          }}
                        >
                          {ev.nombre}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )
            }

            return (
              <a
                key={link.href}
                href={link.href}
                className={isActive ? 'active' : undefined}
                onClick={(event) => {
                  event.preventDefault()
                  onNavigate(link.href)
                }}
              >
                {link.label}
              </a>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

function ScrollTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 480)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      className="scroll-top-btn"
      aria-label="Volver arriba"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      ↑
    </button>
  )
}

function DecorativeBackground() {
  return (
    <div className="decorative-layer" aria-hidden="true">      <div className="stars-layer">
        <span className="star star-1" />
        <span className="star star-2" />
        <span className="star star-3" />
        <span className="star star-4" />
        <span className="star star-5" />
        <span className="star star-6" />
        <span className="star star-7" />
        <span className="star star-8" />
        <span className="star star-9" />
        <span className="star star-10" />
        <span className="star star-11" />
        <span className="star star-12" />
      </div>
      <span className="decor decor-emoji decor-1">✨</span>
      <span className="decor decor-emoji decor-2">🍡</span>
      <span className="decor decor-emoji decor-3">🍭</span>
      <span className="decor decor-emoji decor-4">💫</span>
      <span className="decor decor-emoji decor-5">🍋</span>
      <span className="decor decor-emoji decor-6">🌸</span>
      <span className="decor decor-emoji decor-7">🧁</span>
      <span className="decor decor-emoji decor-8">🍬</span>
      <span className="decor decor-note decor-9">sweet</span>
      <span className="decor decor-note decor-10">calm</span>
      <span className="decor decor-note decor-11">joy</span>
      <span className="decor decor-note decor-12">smile</span>
    </div>
  )
}

function PageShell({ title, children, onNavigate, activeRoute }) {
  return (
    <>
      <DecorativeBackground />
      <BlogHeader onNavigate={onNavigate} activeRoute={activeRoute} />
      <section className="route-page">
        <div className="wrap">
          <button className="back-link" onClick={() => onNavigate('/')}>
            ← Volver al inicio
          </button>
          {title ? <h2 className="route-title">{title}</h2> : null}
          {children}
        </div>
      </section>
      <Footer />
      <ScrollTopButton />
    </>
  )
}

function EvidenceRoute({ onNavigate, item, activeRoute }) {
  if (!item) return null

  return (
    <PageShell title={item.nombre} onNavigate={onNavigate} activeRoute={activeRoute}>
      <div className={`route-card evidence-detail evidence-${item.layout}`}>
        <p className="route-label">{item.etiqueta}</p>
        <p className="evidence-summary">{item.descripcion}</p>
        <div className="document-list">
          <p className="document-list-title">Documentos de la evidencia</p>
          {item.documentos.map((documento, index) => {
            const url = typeof documento === 'string' ? documento : documento.url
            const titulo = typeof documento === 'string' ? `Abrir archivo ${index + 1}` : documento.titulo
            const extension = url.split('.').pop().toUpperCase()

            return (
              <a className="route-link" href={url} target="_blank" rel="noreferrer" key={url}>
                <span className="document-tipo">{extension}</span>
                {titulo} ↗
              </a>
            )
          })}
        </div>
      </div>
    </PageShell>
  )
}

export default function App() {
  const [route, setRoute] = useState(getCurrentRoute())

  useEffect(() => {
    const handleRouteChange = () => setRoute(getCurrentRoute())
    window.addEventListener('popstate', handleRouteChange)
    return () => window.removeEventListener('popstate', handleRouteChange)
  }, [])

  const navigate = (path) => {
    const cleanPath = path.startsWith('/') ? path : `/${path}`
    window.history.pushState({}, '', cleanPath)
    setRoute(getCurrentRoute())
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  switch (route) {
    case 'intro':
      return (
        <PageShell title="Introducción" onNavigate={navigate} activeRoute={route}>
          <Intro />
        </PageShell>
      )
    case 'temas':
      return (
        <PageShell title="Temática" onNavigate={navigate} activeRoute={route}>
          <Temas />
        </PageShell>
      )
    case 'reto':
      return (
        <PageShell title="Reto" onNavigate={navigate} activeRoute={route}>
          <Reto />
        </PageShell>
      )
    case 'equipo':
      return (
        <PageShell title="Equipo" onNavigate={navigate} activeRoute={route}>
          <Equipo />
        </PageShell>
      )
    case 'reflexiones':
      return (
        <PageShell title="Reflexiones" onNavigate={navigate} activeRoute={route}>
          <Reflexiones />
        </PageShell>
      )
    case 'home':
    default:
      const evidence = evidencias.find((item) => item.slug === route)
      if (evidence) {
        return <EvidenceRoute item={evidence} onNavigate={navigate} activeRoute={route} />
      }

      return (
        <>
          <DecorativeBackground />
          <BlogHeader onNavigate={navigate} activeRoute="home" />
          <Hero />
          <section className="home-summary">
            <div className="wrap">
              <div className="home-card">
                <p>
                  En este blog compartimos la forma en que aprendimos a comunicar ideas,
                  escuchar mejor y resolver conflictos con claridad, respeto y criterio.
                </p>
              </div>
            </div>
          </section>
          <ScrollTopButton />
          <Footer />
        </>
      )
  }
}
