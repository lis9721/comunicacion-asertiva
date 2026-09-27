# Comunicación asertiva — versión React

Misma página, hecha con React + Vite.

## Estructura
```
proyecto-comunicacion-react/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx          → punto de entrada
│   ├── App.jsx           → ensambla todas las secciones
│   ├── index.css         → estilos globales (mismo sistema de diseño)
│   ├── content.js        → TODO el contenido editable (arrays de datos)
│   └── components/
│       ├── Nav.jsx
│       ├── Hero.jsx
│       ├── Intro.jsx
│       ├── Temas.jsx
│       ├── Reto.jsx
│       ├── Evidencias.jsx
│       ├── Equipo.jsx
│       ├── Reflexiones.jsx
│       └── Footer.jsx
```

## Cómo correrlo
```bash
npm install
npm run dev
```
Abre la URL que muestra la terminal (por defecto http://localhost:5173).

Para generar la versión final estática:
```bash
npm run build
```
Esto genera la carpeta `dist/` lista para desplegar.

## Qué editar
Casi todo el contenido real (temas, evidencias, integrantes, reflexiones)
vive en **`src/content.js`** como arrays de objetos — no hace falta tocar
los componentes para actualizar textos, agregar o quitar integrantes.

Los textos de `Intro.jsx` y `Reto.jsx` (introducción propia y reflexión
del reto) están directamente en el JSX de esos componentes; búscalos ahí.

## Colores y tipografía
Todo el sistema de color está en `:root` al inicio de `src/index.css`
(variables `--paper`, `--ink`, `--mustard`, `--sage`, etc.).
