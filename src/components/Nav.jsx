export default function Nav({ onNavigate }) {
  const links = [
    { href: '/intro', label: 'Introducción' },
    { href: '/temas', label: 'Temática' },
    { href: '/reto', label: 'Reto' },
    { href: '/evidencias', label: 'Evidencias' },
    { href: '/equipo', label: 'Equipo' },
    { href: '/reflexiones', label: 'Reflexiones' },
  ]

  return (
    <nav>
      <div className="wrap">
        <div className="brand">Comunicación asertiva</div>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(event) => {
                  event.preventDefault()
                  if (onNavigate) {
                    onNavigate(link.href)
                  } else {
                    window.history.pushState({}, '', link.href)
                    window.dispatchEvent(new PopStateEvent('popstate'))
                  }
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
