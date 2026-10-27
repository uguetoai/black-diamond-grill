# Local font provenance / Procedencia tipográfica local

Official Google Fonts unmodified TTF binaries, retrieved with Python urllib default user agent. No conversion, no unicode subset splitting. Libre Caslon Display and Libre Caslon Text are preserved byte-for-byte from the prior local bundle. Quicksand replaces only the proposed secondary family, not the restaurant homepage. No claim is made about a previous screenshot's rendered font.

Fuentes originales oficiales de Google Fonts, sin modificar. Quicksand 500/600/700 es la nueva propuesta secundaria de geometría redondeada; Libre Caslon se conserva. Texto base 17 px / 1.5, navegación 17 px / 600 en escritorio y tableta y 15 px en móvil. No se ha publicado nada.

## Requests and binary provenance

Secondary CSS request: `https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&display=swap`.

`manifest.json` records the original combined request for retained Caslon faces, the replacement secondary request, each binary's official URL, filename, byte size and SHA-256. `fonts.css` contains six local font faces only; it performs no remote request.

| Family | Style | Weight | File |
| --- | --- | --- | --- |
| Libre Caslon Display | normal | 400 | `LibreCaslonDisplay-400.ttf` |
| Libre Caslon Text | italic | 400 | `LibreCaslonText-400-Italic.ttf` |
| Libre Caslon Text | normal | 400 | `LibreCaslonText-400.ttf` |
| Quicksand | normal | 500 | `Quicksand-500.ttf` |
| Quicksand | normal | 600 | `Quicksand-600.ttf` |
| Quicksand | normal | 700 | `Quicksand-700.ttf` |

## Full official licenses

All three families use SIL Open Font License 1.1. Keep complete notices with redistributed binaries.

- `LibreCaslonDisplay-OFL.txt` — Copyright 2012 The Libre Caslon Display Authors (https://github.com/impallari/Libre-Caslon-Display)
  Source: `https://raw.githubusercontent.com/google/fonts/main/ofl/librecaslondisplay/OFL.txt`
- `LibreCaslonText-OFL.txt` — Copyright 2018 The Libre Caslon Text Project Authors (https://github.com/thundernixon/Libre-Caslon)
  Source: `https://raw.githubusercontent.com/google/fonts/main/ofl/librecaslontext/OFL.txt`
- `Quicksand-OFL.txt` — Copyright 2011 The Quicksand Project Authors (https://github.com/andrew-paglinawan/QuicksandFamily), with Reserved Font Name “Quicksand”.
  Source: `https://raw.githubusercontent.com/google/fonts/main/ofl/quicksand/OFL.txt`

Source ZIP retains sibling `brand/` and `img/` paths and licenses. Standalone `Brandbook-v3.html` embeds all six fonts and images, with complete licenses in HTML comments and JavaScript at the end of the body. Native PNG specimen is not browser proof.
