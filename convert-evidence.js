import { writeFile } from 'node:fs/promises'
import mammoth from 'mammoth'

const source = 'public/documentos/sara/sapa-caramelo.docx'
const output = 'public/documentos/sara/sapa-caramelo.html'

const result = await mammoth.convertToHtml(
  { path: source },
  {
    convertImage: mammoth.images.imgElement((image) =>
      image.read('base64').then((data) => ({
        src: `data:${image.contentType};base64,${data}`,
      })),
    ),
  },
)

const html = `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>La Sapa Caramelo</title>
  <style>
    * { box-sizing: border-box; }
    body { margin: 0; padding: 40px 20px; background: #f7f4ef; color: #292521; font: 17px/1.75 Georgia, serif; }
    main { max-width: 820px; margin: 0 auto; padding: clamp(28px, 7vw, 72px); background: #fffefa; border: 1px solid #e8e1d8; box-shadow: 0 12px 36px #382f2412; }
    h1, h2, h3 { color: #332a26; line-height: 1.25; }
    img { max-width: 100%; height: auto; }
    table { max-width: 100%; border-collapse: collapse; }
    td, th { padding: 8px; border: 1px solid #ddd; }
    p { margin: 0 0 1em; }
    a { color: #287b70; }
    @media (max-width: 600px) { body { padding: 12px; } main { padding: 24px 20px; } }
  </style>
</head>
<body>
  <main>${result.value}</main>
</body>
</html>`

await writeFile(output, html, 'utf8')
console.log(`Documento convertido: ${output}`)
for (const message of result.messages) {
  console.warn(message.message)
}