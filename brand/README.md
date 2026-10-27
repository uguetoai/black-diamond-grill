# Black Diamond Grill · Brandbook / Manual de marca

**DRAFT v0.1 — pendiente de aprobación por la propiedad / pending owner approval.**

## Alcance y procedencia / Scope and provenance

Página estática bilingüe, español por defecto y cambio completo a inglés. No se ha publicado ni se ha añadido un enlace desde la portada o el sitemap. No se ha modificado el sitio principal.

Fuentes del contenido de marca: `../index.html` y archivos de `../img/` existentes en el repositorio. Los archivos tipográficos adicionales proceden de Google Fonts; se documentan aparte en `fonts/PROVENANCE.md`. No se utilizaron afirmaciones externas, precios, horarios, reseñas, premios, eventos o políticas como contenido de marca.

- Identidad descriptiva: nombre Black Diamond Grill; restaurante familiar italoamericano en Old Town Black Diamond, WA; chef Rudy Carrillo. Proceden del título, metadatos, hero y sección de historia del sitio. No se amplió la historia del restaurante.
- Colores observados: `:root` del `index.html`: `--paper #ffffff`, `--paper-2 #f7f4ef`, `--rule #e5ded3`, `--ink #181512`, `--soft #5f574d`, `--wine #a8202a`, `--wine-deep #7e161d`, `--basil #3e6a33`. No se derivan equivalencias CMYK/Pantone.
- Tipografías observadas en el sitio original: Libre Caslon Display, Libre Caslon Text y Schibsted Grotesk. La guía conserva las dos Caslon y propone sustituir la secundaria Schibsted Grotesk por **Quicksand (500, 600, 700)** para texto, navegación e interfaz: una dirección con geometría claramente redondeada, no infantil, **pendiente de aprobación**. Texto e interfaz usan peso 500 por defecto; toda la navegación usa 600. Las fuentes se alojan en `fonts/` y se cargan con `fonts/fonts.css`, sin depender de Google Fonts en tiempo de ejecución. Se conservan Libre Caslon Display 400 y Libre Caslon Text 400 normal/cursiva. Si faltan los archivos locales, hay fallbacks Georgia y fuentes del sistema. No se ha cambiado la portada del restaurante; no se incluye analítica ni widgets del sitio principal.

  Observed original website fonts: Libre Caslon Display, Libre Caslon Text and Schibsted Grotesk. The guide retains both Caslon families and proposes Quicksand (500/600/700), with clearly rounded geometry, instead of Schibsted for body text and interface. Body and UI default to weight 500; all navigation uses 600. All six font files are bundled locally through `fonts/fonts.css`, including Libre Caslon Display 400 and Libre Caslon Text 400 normal/italic. This warmer, rounder secondary type direction is pending owner approval, not an existing-site fact. The restaurant homepage is unchanged.
- Originales PNG, sin cambios: `../img/logo.png` (464 × 600 px), `../img/mark.png` (240 × 232 px). Las descargas apuntan a estos mismos archivos. No hay SVG, EPS, PDF vectorial ni un ZIP de recursos inventado. Los ejemplos negativos alteran la presentación mediante CSS, nunca los archivos.
- Fotografías mostradas: `pasta.jpg`, `chef.jpg`, `app.jpg`, `entree.jpg`, `dessert.jpg`. El retrato mide realmente 985 × 1100 px (aunque el HTML principal declara 986 px de ancho). Las dimensiones de esta guía corresponden al archivo real.

The source website and its existing local images are the only brand-content source materials; bundled fonts are separately sourced from official Google Fonts endpoints. Observed identity, palette and font choices are documented separately from proposed rules. Original logos are not redrawn, recolored or exported as fabricated vector assets.

## Qué es propuesta / What is proposed

Espacio de protección de ¼ del ancho del símbolo; tamaños mínimos (160 CSS px / 30 mm para firma y 32 CSS px / 12 mm para símbolo); jerarquía y escala editorial; roles y proporciones de color; criterios fotográficos; voz; ejemplos ES/EN/IT; maquetas sociales; criterios de legibilidad y acceso. Todo está sujeto a revisión y aprobación por la propiedad. Los tamaños de impresión requieren pruebas reales de nitidez. Los archivos raster tienen resolución limitada.

Las frases de portada, muestras tipográficas y ejemplos sociales son propuestas editoriales, **no eslóganes oficiales, anuncios vigentes ni compromisos del restaurante**. El italiano es un ejemplo de redacción, no una promesa de atención en ese idioma. La presencia de fotos en el repositorio no verifica sus derechos para cualquier uso futuro.

Contrast ratios are computed from the exact hex values using sRGB relative luminance, rounded to two decimals. These color checks are not a site accessibility certification. Printing does not guarantee a tagged/accessibly structured PDF.

## Densidad de pantalla / Screen density

La revisión compacta usa una barra lateral de 256 px, cabecera de 56 px, texto base de 17 px con interlineado 1.5 y secciones con 36 px de separación inicial. La navegación de escritorio y tableta usa 17 px / 600, números de 14 px; en móvil usa 15 px con objetivos de 44 px. Controles de cabecera de 15 px y letra pequeña mínima de 13 px en pantalla. La portada abandona la escala gigante: título de 48–76 px en escritorio, márgenes cortos y foto de 180–240 px. Se mantienen objetivos táctiles de al menos 44 px en navegación y controles, y los ejemplos de espacio de protección no se alteran. Los cambios de densidad viven en bloques `@media screen`; las reglas de impresión no cambian. La nueva fuente secundaria sí se usa también al imprimir.

The compact screen layout reduces oversized gaps rather than uniformly shrinking typography. Phone breakpoints preserve horizontal contents navigation and readable text; clear-space teaching diagrams retain their original sizing rules. Print spacing rules are unchanged; the proposed secondary font also applies to print.

## Uso local / Local use

Desde la raíz del repositorio, servir con cualquier servidor estático y abrir `/brand/`. También se puede abrir `brand/index.html` directamente: los recursos usan rutas relativas `../img/`. Las fuentes se incluyen localmente: no requieren conexión. Para un ZIP sin conexión, conservar `brand/` completo y `img/` como directorios hermanos, incluidas las licencias en `brand/fonts/`.

- ES / EN cambia contenido, `html[lang]`, título, descripción, textos alternativos y etiquetas de controles. La preferencia se guarda de forma opcional en `localStorage` (`bdg-brandbook-language`). Una visita sin preferencia inicia en español. Sin JavaScript el documento se puede leer en español.
- Los ocho controles copian los hexadecimales exactos con Clipboard API; hay un fallback de copia y un mensaje de copia manual si el navegador la impide.
- Los botones Imprimir / PDF abren el diálogo del navegador; la hoja de impresión muestra solo el idioma seleccionado, quita la navegación y conserva la advertencia de borrador.
- El índice utiliza anclas nativas y resalta la sección actual. Navegación por teclado y foco visible; adaptación a móvil y movimiento reducido.

## Publicación y acceso / Publication and access

**`noindex, nofollow` NO es control de acceso.** No es protección mediante contraseña, autenticación, autorización ni garantía de que los buscadores respeten la directiva. Si este directorio se publica en un sitio estático, su URL y sus archivos serán públicos y compartibles salvo que se implemente una protección de acceso independiente. No se ha añadido enlace público a esta guía. No se debe incluir contenido confidencial en este directorio.

The page is marked `noindex, nofollow`, but **that is not access protection**. If deployed on a static public host, the URL and files are public unless separately protected. The draft is not owner-approved. Nothing in this directory publishes, commits, pushes or creates a pull request.

## Archivos / Files

- `index.html`: contenido semántico bilingüe y ejemplos visuales.
- `brandbook.css`: diseño editorial, adaptación móvil y estilos de impresión.
- `brandbook.js`: idioma, copia, impresión y estado del índice; sin dependencias de ejecución.
- `README.md`: procedencia, reglas propuestas y límites de publicación.
- `fonts/fonts.css`: seis declaraciones locales `@font-face`; sin dependencias remotas.
- `fonts/*.ttf`: Quicksand 500/600/700, Libre Caslon Display 400 y Libre Caslon Text 400 normal/cursiva.
- `fonts/*-OFL.txt`: licencias SIL Open Font License 1.1 oficiales de las tres familias.
- `fonts/PROVENANCE.md` y `fonts/manifest.json`: URLs oficiales, procedencia, tamaños y SHA-256 de los archivos originales sin modificar.

Bundled font binaries and all three family licenses come from official Google Fonts sources. See `fonts/PROVENANCE.md`; `fonts/manifest.json` records the exact download URLs and checksums. Keep the local font files and licenses with any source ZIP. No diagnosis of the font displayed in a user screenshot is implied.

## Entrega v3 / V3 delivery

Quicksand 500/600/700 replaces the secondary only; Libre Caslon remains unchanged. Desktop/tablet sidebar: 256 px, navigation 17 px / 600, numbers 14 px, 44 px targets; mobile navigation: 15 px. Body: 17 px / 1.5. Toolbar: 56 px, controls 15 px. Fine print: at least 13 px on screen. Compact section gaps stay at 36 px; no global shrinking.

`Brandbook-v3.html` is the standalone export with embedded font and image data and complete font-license HTML comments. `Brandbook-v3.zip` preserves all `brand/` and `img/` paths. `tipografia-redondeada.png` is a Pillow/FreeType native specimen using the actual binaries, not browser proof. Exports live in the sibling `black-diamond-grill-deliverables/` directory. Nothing is committed, pushed, or published.


**Actualización 2026-10-27:** las fuentes del manual ahora son Gloock (títulos y muestras «Aa»), Figtree (texto e interfaz) y Libre Caslon Text (solo cursivas), iguales a la web. Las menciones anteriores a Quicksand quedan como historial.
