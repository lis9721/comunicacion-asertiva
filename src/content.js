// Todo el contenido "editable" del sitio vive aquí como datos.
// Para actualizar la página, edita estos arrays — no hace falta tocar los componentes.

export const temas = [
  {
    titulo: 'Introducción a la comunicación',
    descripcion:
      'Es la base del curso. Se trabajan cuatro pilares para comunicarse bien: observar, escuchar, analizar y percibir o expresar. También se estudian las emociones y la intención, porque la intención genera emociones y estas hacen que la comunicación sea subjetiva.',
  },
  {
    titulo: 'Reglas de convivencia y entrega de trabajos',
    descripcion:
      'Las normas del curso son el respeto, presentar argumentos y explicar el porqué de las ideas, además de cumplir con puntualidad las entregas.',
  },
  {
    titulo: 'Comunicación subjetiva vs. información objetiva',
    descripcion:
      'La comunicación es subjetiva: es personal y parcial, parte del yo y está cargada de emociones. La información es objetiva: es común y colectiva, imparcial y basada en razones; se expresa como un informe y en tercera persona.',
  },
  {
    titulo: 'Tipos, formas y estilos de comunicación',
    descripcion:
      'Los tipos, según la emoción, son agresiva, pasiva, pasivo-agresiva, agresivo-pasiva y asertiva. Las formas, según la necesidad, son verbal, no verbal, escrita, corporal, auditiva, visual y virtual. Los estilos, según la situación, son formal e informal.',
  },
  {
    titulo: 'Tipos de comunicación y sus consecuencias',
    descripcion:
      'La comunicación agresiva busca imponer el yo y puede causar heridas emocionales. La pasiva es sumisa, prioriza al otro y genera frustración. La pasivo-agresiva usa sarcasmo, ironía, indirectas, sátira, burla y puyas, y puede derivar en bullying y depresión. La agresivo-pasiva actúa por impulso y puede terminar en autoflagelación. La asertiva es el punto de equilibrio entre todas las anteriores.',
  },
  {
    titulo: 'Funciones del lenguaje (Roman Jakobson)',
    descripcion:
      'Se estudian el lenguaje amplio, la estratificación y las palabras homófonas y homónimas. Algunos ejemplos son baya, valla y vaya, además de café como bebida y como color.',
  },
  {
    titulo: 'Proceso comunicativo: modelo tradicional vs. Jakobson',
    descripcion:
      'El modelo tradicional incluye emisor, receptor, mensaje, código, canal y contexto. En el modelo de Jakobson, cada elemento cumple una función: emotiva, cuando el emisor expresa emociones; apelativa, cuando se busca influir en el receptor; referencial, cuando el contexto aporta información objetiva y verificable; fática, cuando el canal inicia, mantiene o verifica el contacto; poética, cuando se embellece el mensaje; y metalingüística, cuando el código explica el propio lenguaje.',
  },
  {
    titulo: 'Comunicación asertiva',
    descripcion:
      'Es clara, directa y empática, y se apoya en el respeto y la inteligencia emocional. El respeto se refleja en la palabra correcta y concisa, la entonación precisa y unas acciones coherentes y congruentes.',
  },
  {
    titulo: 'Comunicación no verbal (CNV)',
    descripcion:
      'El lenguaje verbal representa un 7% y el no verbal un 93%. La CNV incluye kinesia, emblemas, adaptadores, proxemia, paralenguaje, microexpresiones y otros elementos como la vestimenta, la prosodia y el saludo. Las microexpresiones revelan emociones básicas como alegría, tristeza, ira, asco, sorpresa, desagrado y miedo.',
  },
  {
    titulo: 'La Sapa Caramela',
    descripcion:
      'Un cuento que dejó pensando a muchos por lo dicho en clase. Todos escribimos algo de acuerdo con nuestra vida o nuestro pasado, ya que, en realidad, no habíamos hablado de nada más. A partir de esta historia trabajamos los 4 pilares de la comunicación: observar, escuchar, analizar y percibir o expresar.',
    pilares: true,
  },
]

export const pilares = [
  {
    icono: '👀',
    titulo: 'Observar',
    descripcion:
      'Prestar atención a lo que pasa alrededor: gestos, contexto y señales, antes de reaccionar con palabras.',
  },
  {
    icono: '👂',
    titulo: 'Escuchar',
    descripcion:
      'Enfocarse en lo que dice la otra persona, sin interrumpir ni anticipar la respuesta, para entender el mensaje completo.',
  },
  {
    icono: '🧠',
    titulo: 'Analizar',
    descripcion:
      'Relacionar lo observado y escuchado con el contexto y las emociones en juego antes de sacar conclusiones.',
  },
  {
    icono: '💬',
    titulo: 'Percibir o expresar',
    descripcion:
      'Interpretar lo que se siente y comunicarlo con claridad, o abrir el espacio para que el otro exprese lo suyo.',
  },
]

export const evidencias = [
  {
    slug: 'ely-marquez',
    nombre: 'ELY MARQUEZ',
    etiqueta: 'Evidencia 1',
    descripcion:
      'Trabajo de comunicación y claridad en la resolución de conflictos durante la formación.',
    documentos: [
      { url: '/documentos/ely/taller-tipos-comunicacion.pdf', titulo: 'Taller: tipos de comunicación' },
      { url: '/documentos/ely/sapa-caramelo.pdf', titulo: 'La Sapa Caramelo' },
      { url: '/documentos/ely/funciones-del-lenguaje.pdf', titulo: 'Funciones del lenguaje' },
      { url: '/documentos/ely/microexpresiones-comunicacion-no-verbal.pdf', titulo: 'Microexpresiones y comunicación no verbal' },
      { url: '/documentos/ely/justificacion-pelicula.pdf', titulo: 'Justificación de película' },
    ],
    link: '/ely-marquez',
    layout: 'alternado',
    presentation: [
      { type: 'image', index: 0 },
      { type: 'text', index: 0 },
      { type: 'image', index: 1 },
      { type: 'text', index: 1 },
      { type: 'image', index: 2 },
      { type: 'text', index: 2 },
      { type: 'image', index: 3 },
    ],
    gallery: [
      '📸 Actividad 1',
      '🎨 Proceso creativo',
      '🧠 Reflexión grupal',
      '📝 Entrega final',
    ],
    textos: [
      'En esta evidencia se observa cómo ELY logró transformar una idea confusa en un mensaje entendible para todo el equipo.',
      'La clave fue separar lo que pasaba del impacto que generaba, para hablar con calma y sin tensión.',
      'Esto ayudó a que la retroalimentación fuera más útil, honesta y constructiva para el trabajo colaborativo.',
    ],
  },
  {
    slug: 'luisa-arias',
    nombre: 'LUISA ARIAS',
    etiqueta: 'Evidencia 2',
    descripcion:
      'Ejercicio centrado en feedback, escucha activa y coordinación entre integrantes.',
    documentos: [
      { url: '/documentos/luisa/sapa-caramelo.png', titulo: 'La Sapa Caramelo' },
      { url: '/documentos/luisa/taller-tipos-comunicacion.pdf', titulo: 'Taller: tipos de comunicación' },
      { url: '/documentos/luisa/funcion-referencial.pdf', titulo: 'Función referencial' },
      { url: '/documentos/luisa/ademanes.pdf', titulo: 'Ademanes' },
      { url: '/documentos/luisa/justificacion-pelicula.pdf', titulo: 'Justificación de película' },
    ],
    link: '/luisa-arias',
    layout: 'destacada',
    presentation: [
      { type: 'image', index: 1 },
      { type: 'text', index: 0 },
      { type: 'text', index: 1 },
      { type: 'image', index: 0 },
      { type: 'image', index: 2 },
      { type: 'text', index: 2 },
      { type: 'image', index: 3 },
    ],
    gallery: [
      '📷 Trabajo en equipo',
      '🎧 Escucha activa',
      '💬 Mensaje claro',
      '✅ Resultado final',
    ],
    textos: [
      'LUISA demostró que la comunicación asertiva no depende solo de hablar bien, sino de escuchar con atención y responder con criterio.',
      'En cada actividad, cuidó la forma de expresar sus ideas para que no sonaran como crítica ni imposición.',
      'Su proceso reflejó una forma más equilibrada de liderar conversaciones y tomar decisiones en grupo.',
    ],
  },
  {
    slug: 'sara-david',
    nombre: 'SARA DAVID',
    etiqueta: 'Evidencia 3',
    descripcion:
      'Recorrido de evidencia sobre claridad, empatía y mejora continua dentro del proyecto.',
    documentos: [
      { url: '/documentos/sara/tipos-comunicacion.pdf', titulo: 'Tipos de comunicación' },
      { url: '/documentos/sara/comunicacion-no-verbal.pdf', titulo: 'Comunicación no verbal' },
      { url: '/documentos/sara/cinesica-escenas-3-4.pdf', titulo: 'Cinésica: escenas 3 y 4' },
      { url: '/documentos/sara/sapa-caramelo.html', titulo: 'La Sapa Caramelo' },
      { url: '/documentos/sara/funcion-poetica.pptx', titulo: 'Función poética' },
    ],
    link: '/sara-david',
    layout: 'recorrido',
    presentation: [
      { type: 'text', index: 0 },
      { type: 'image', index: 0 },
      { type: 'image', index: 1 },
      { type: 'text', index: 1 },
      { type: 'text', index: 2 },
      { type: 'image', index: 2 },
      { type: 'image', index: 3 },
    ],
    gallery: [
      '🧩 Análisis del caso',
      '🤝 Diálogo abierto',
      '🪄 Reformulación del mensaje',
      '🌟 Resultado final',
    ],
    textos: [
      'SARA mostró cómo una buena comunicación puede convertir un conflicto en una conversación productiva.',
      'Tomó conciencia de que el tono, la intención y la estructura del mensaje son esenciales para ser entendida.',
      'La evidencia refleja un crecimiento claro hacia una comunicación más empática, precisa y colaborativa.',
    ],
  },
]

export const retos = [
  {
    nombre: 'ELY MARQUEZ',
    foto: '/fotos-perfil/elymarquez.png',
    texto:
      'Con esta competencia me di cuenta de que mi comportamiento o lo que digo a veces es una comunicación pasivo-agresiva, así como me di cuenta de que en mi casa no se usa la comunicación asertiva, que siempre termina siendo una comunicación agresiva o con sarcasmo e ironías. Siempre terminan en un problema más grande por la falta de comunicación, y es algo difícil de tratar, de entender y de llevar; para mí lo mejor es tratar de ignorar.',
  },
  {
    nombre: 'LUISA ARIAS',
    foto: '/fotos-perfil/luisaarias.png',
    texto:
      'Para mí, uno de los retos de este proceso ha sido aprender a ser más directa con mis papás. En mi casa somos reservados con lo que pensamos y sentimos, por lo que muchas veces las discusiones terminan en conflictos donde prefiero quedarme callada para evitar problemas, aunque eso me afecte. Con el tiempo, he entendido que no todo es responsabilidad mía y que también influye la forma en que ellos manejan las situaciones. Esto ha influido en mi manera de relacionarme con otras personas, ya que suelo ser cerrada y prefiero conocerlas antes de mostrar cómo soy realmente. Por eso, quiero aprender a expresar mis opiniones y sentimientos sin miedo a discutir, defender mis ideas sin pelear y entender que ser directa no significa ser irrespetuosa. Aunque todavía me cuesta, ahora soy más consciente de lo que necesito mejorar.',
  },
  {
    nombre: 'SARA DAVID',
    foto: '/fotos-perfil/saradavid.png',
    texto:
      'La persona con la que más tengo problemas de comunicación es mi papá. Ambos somos orgullosos y demasiado bruscos a la hora de discutir, lo que hace que cualquier desacuerdo se convierta rápido en un choque y no en una conversación. Siento que él ha puesto muchas reglas en nuestra relación. Algunas son correctas y las entiendo, pero otras parecen más un intento de imponerse como padre que una norma con sentido para mí. Eso me lleva muchas veces a negarme, y terminamos sin hablarnos por días, incluso semanas. Aun así, he querido mejorar. Gracias a lo trabajado en clase, he buscado la manera de entenderlo a él y de entenderme a mí, para poder llegar a un acuerdo. Sé que arreglar una relación tan rota y desequilibrada es difícil, pero no por eso voy a dejar de intentarlo.',
  },
]

export const equipo = [
  {
    nombre: 'ELY MARQUEZ',
    rol: 'Aprendiz de Análisis y Desarrollo de Software',
    bio: 'Soy una persona intensa, curiosa y sensible, aunque no siempre lo demuestro. Tengo un carácter fuerte, soy directa, sarcástica e irónica, y no me gusta que me impongan cosas ni que me mientan. Cuando algo me importa, me involucro mucho y lo siento de verdad. A veces soy impulsiva y pienso demasiado las cosas, pero intento aprender de mis errores y mejorar. Soy creativa y me gusta expresarme mediante la música, las palabras, la poesía y los diseños. También me gusta aprender y experimentar, especialmente con la programación, mientras voy construyendo mi camino y descubriendo lo que quiero para mi futuro. Tengo un lado cariñoso que no muestro con cualquiera y valoro mucho a las personas que quiero y los pequeños detalles. Sé que tengo cosas por mejorar, pero también tengo metas y ganas de crecer. Todavía estoy descubriendo quién soy, pero quiero construir una vida que se sienta realmente mía, sin perder mi personalidad, mi creatividad ni mi forma intensa de sentir las cosas.',
    foto: '/fotos-perfil/elymarquez.png',
  },
  {
    nombre: 'LUISA ARIAS',
    rol: 'Aprendiz de Análisis y Desarrollo de Software',
    bio: 'Me considero una persona bastante seria y reservada. No suelo contar todo lo que pienso o siento y muchas veces prefiero quedarme callada y observar. Me gusta tener mi propio espacio y estar tranquila. Siento que pienso demasiado las cosas y que a veces le doy muchas vueltas a situaciones que ya pasaron. También soy sensible, aunque no siempre lo demuestro, y cuando algo o alguien me importa suelo tomarlo bastante en serio. Soy directa y sincera; si algo me molesta puedo decirlo de una manera clara y sin muchos rodeos. A veces puedo parecer fría o distante, pero eso no significa que no me importen las cosas. Tengo el cabello largo y ligeramente ondulado, con un tono entre cobrizo y dorado, la piel clara y una expresión que hace que parezca más seria de lo que realmente estoy. Prefiero verme sencilla y arreglada sin llamar demasiado la atención. En general, me percibo como alguien tranquila y seria por fuera, pero que por dentro piensa y siente mucho más de lo que demuestra.',
    foto: '/fotos-perfil/luisaarias.png',
  },
  {
    nombre: 'SARA DAVID',
    rol: 'Aprendiz de Análisis y Desarrollo de Software',
    bio: 'Soy una persona bastante tímida, pero alegre cuando estoy rodeada de personas de confianza. Me gusta mucho jugar cosas de puzzles, sopas de letras y ese tipo de juegos, también escuchar música y preparar postres. Trabajando en equipo se me dificulta bastante cuando nadie toma la iniciativa y eso me genera estrés, porque suelo terminar participando muchísimo más que los demás. Pero cuando todo el equipo quiere ayudar, siempre trato de aportar en mi parte y en cualquier cosa que se necesite. Me cuesta no procrastinar, pero lo evito porque sé que varios estamos involucrados y si yo no hago mi parte, afecto a los demás. Los conflictos en grupo me generan mucho disgusto, porque soy muy pasiva para eso de discutir y prefiero solo concentrarme en lo mío. Durante las actividades de comunicación traté de participar y aportar en los trabajos grupales. A veces me cuesta organizar mi tiempo y puedo procrastinar un poco, pero intento colaborar en lo que puedo y cumplir con las actividades, ya que no hacerlo me genera inconformidad conmigo misma.',
    foto: '/fotos-perfil/saradavid.png',
  },
]

export const reflexiones = [
  {
    nombre: 'SARA DAVID',
    texto:
      'En esta formación aprendí mucho más de lo que pensaba sobre la comunicación. Antes podía verla simplemente como la forma en que hablamos con otras personas, pero entendí que realmente comunicamos muchas cosas incluso sin querer hacerlo. Aprendí que cada persona puede comportarse de acuerdo con lo que ha vivido. Puede ser algo bueno, algo malo, algo pequeño o algo grande. También entendí que nosotros mismos podemos hacer cosas que afectan a otras personas sin darnos cuenta y que eso puede influir en la manera en que ellas actúan después. Algo que me llamó mucho la atención fue aprender sobre la comunicación no verbal. Entendí que no solamente nos expresamos con las palabras, sino también con cada movimiento, gesto, expresión o postura. Incluso la manera en que organizamos nuestras cosas, nuestro espacio privado o nuestro entorno público puede comunicar algo sobre nosotros. También aprendí sobre la comunicación asertiva. Para mí, no se trata solamente de decir las cosas de una manera tranquila, sino de aprender a atender a los demás y también a nosotros mismos. Aprendí la importancia de mantener una posición de calma cuando ocurre una situación difícil y de saber cuándo y cómo decir cosas que pueden llegar a herir a otra persona. Otra cosa que considero importante fue aprender a perdonar y comprender. Esto no significa decir que estuvo bien lo que alguien hizo, sino poder aceptar que una persona actuó mal y, al mismo tiempo, intentar comprender bajo qué circunstancias lo hizo. Así se puede evitar llevar una situación a una discusión más grande en la que cada persona solamente quiera imponerse. También aprendí cosas que pueden servirme en situaciones más específicas, como saber cómo enfrentar una entrevista, cómo actuar frente a un momento difícil y tener en cuenta que la comunicación puede cambiar dependiendo de la cultura o de las personas con las que estamos hablando. Al finalizar el trimestre, considero que aprendí que comunicarse no es solamente hablar. También es escuchar, observar, comprender y pensar en cómo nuestras palabras y acciones pueden afectar a otras personas. Creo que esto me puede servir tanto en mi vida personal como en mi formación y en un futuro ambiente laboral, especialmente al trabajar con otras personas y al tener que expresar mis ideas de una manera adecuada.',
  },
  {
    nombre: 'LUISA ARIAS',
    texto:
      'Durante este trimestre aprendí que la comunicación no es solamente hablar y decir lo que pensamos, sino también cómo expresamos lo que sentimos y cómo los demás entienden lo que queremos transmitir. Esto me hizo pensar en mi propia forma de comunicarme, porque soy una persona reservada y muchas veces prefiero quedarme callada, observar y pensar las cosas antes de decirlas. Aprendí que, aunque no digamos lo que sentimos directamente, nuestro cuerpo también puede hablar por nosotros. La mirada, los gestos, la postura, los movimientos y el tono de voz pueden mostrar cómo nos sentimos. También entendí que a veces es importante decir lo que pensamos o sentimos en lugar de guardárnoslo todo. Suelo pensar demasiado las cosas y darle vueltas a situaciones que ya pasaron, y creo que aprender a comunicar mejor lo que siento puede ayudarme a evitar malentendidos y a sentirme más tranquila. Otra cosa que aprendí fue que comunicarse también significa saber escuchar, prestar atención a la otra persona y tratar de entenderla, incluso cuando no expresa directamente lo que siente. Esta competencia me ayudó a conocer mejor mi forma de comunicarme y a entender que ser reservada no significa que no tenga nada que decir. Puedo seguir siendo yo misma y aprender poco a poco a expresar mejor lo que pienso y siento.',
  },
  {
    nombre: 'ELY MARQUEZ',
    texto:
      'Aprendí que la comunicación asertiva consiste en expresar lo que pienso y siento de manera clara y respetuosa, sin lastimar ni ignorar a los demás. También entendí que escuchar es tan importante como hablar, porque permite comprender diferentes puntos de vista y evitar malentendidos. Aprendí que puedo defender mis opiniones y poner límites sin necesidad de ser agresiva, y que hablar con respeto puede ayudarme a mejorar mis relaciones con las personas. Creo que aplicar la comunicación asertiva me ayudará a controlar mejor mis emociones, pensar antes de reaccionar y expresar lo que realmente quiero decir.',
  },
]
