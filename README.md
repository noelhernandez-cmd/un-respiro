# Para HeyHey ♡ — v7

Sitio estático dedicado a HeyHey. Incluye las seis secciones originales, referencias a Enredados, Moana (Hei Hei es el gallito), Soy Luna, Boulevard y El Principito, dedicatoria personal, respiración, favoritos, **Mi princesa · Nuestra historia** y evaluación opcional.

## Publicar GitHub Pages
Sube `index.html`, `styles.css`, `script.js`, `config.js` y `heyhey-cuento.jpg` directamente a la raíz del repositorio. Ajusta GitHub Pages a `main` / `(root)`.

## Buzón de respuestas a Google Sheets (configuración pendiente)
La versión actual **no envía automáticamente respuestas** hasta conectar tu propia hoja privada. Guardar solo para mí conserva las respuestas en el navegador.

1. Crea una hoja de cálculo privada en Google Sheets con una pestaña llamada **Respuestas**. En su primera fila escribe: `Fecha | Cómo se siente | Le ayudó | Próxima vez`.
2. Abre la hoja y ve a **Extensiones → Apps Script**. Reemplaza `Código.gs` con el contenido de `apps-script.gs` (el archivo `.gs` es solo documentación/código auxiliar: no se debe subir a un sitio público si deseas administrar todo en Apps Script).
3. En Apps Script selecciona **Implementar → Nueva implementación → Aplicación web**. Ejecutar como **Yo**; acceso **Cualquier usuario** (esto habilita el formulario sin inicio de sesión, pero también significa que alguien que conozca el endpoint puede enviar datos). Autoriza los permisos y copia la URL acabada en `/exec`.
4. Abre `config.js`, coloca la URL entre las comillas de `window.HEYHEY_FEEDBACK_ENDPOINT`, guarda y sube el archivo actualizado.
5. Haz una respuesta de prueba **con consentimiento** y verifica si llegó a la pestaña **Respuestas**. La página no puede comprobar la confirmación del servidor cuando usa `no-cors`, así que su mensaje no equivale a entrega confirmada.

**Privacidad:** el sitio es público. Se ha creado una versión editorial de la carta que omite fecha de nacimiento, año de nacimiento, ciudad y parte del detalle personal original. Lee la carta antes de compartirla; pídele permiso a HeyHey si quieres incluir datos privados. El formulario explica antes de enviar que Noel recibirá las respuestas; no envía nada al guardar localmente. No incluyas tokens ni contraseñas.

## Archivos
- `index.html`: diseño/estructura.
- `styles.css`: estilos adaptables morados.
- `script.js`: contenido, favoritos y formularios.
- `config.js`: endpoint opcional, por defecto vacío.
- `heyhey-cuento.jpg`: imagen de cuento en la raíz.
- `apps-script.gs`: código para pegar manualmente en Apps Script; **no se requiere para mostrar la web**.


## Versión 8 — sus historias favoritas
Se incorporó un homenaje visible a **Soy Luna** y la canción **Princesa** de Matteo, además de otro a **Boulevard** de Flor M. Salvador, con más tarjetas originales y sin reproducir letras ni capítulos. El baile sigue desactivado.


## Versión 9 — Tres nuevas experiencias
- **Nuestro cielo de estrellas**: nueve estrellas tocables con mensajes originales de Noel.
- **Abre cuando…**: seis cartas para distintos momentos, en un cuadro accesible.
- **Farolillos de sueños**: un deseo se anima hacia el cielo y se guarda en el almacenamiento local del navegador (máximo 20, se pueden borrar). No se transmite ni sincroniza entre dispositivos.
- Se conservan todas las secciones anteriores, incluida la carta Nuestra historia y el formulario de opinión. **El baile permanece desactivado** como actividad.
- El buzón de respuestas sigue pendiente de configurar mediante `config.js` y Google Apps Script; no se activa con esta actualización.
- Para publicar, reemplaza los archivos en GitHub conservando la imagen `heyhey-cuento.jpg` en la raíz. `apps-script.gs` sirve solo como referencia de configuración.


## Versión 10 — Ruleta + bienvenida amorosa
- La cuadrícula de 12 rincones se reemplazó por una ruleta giratoria. Al girarla, selecciona aleatoriamente una de las 12 categorías existentes y muestra un contenido correspondiente. Conserva favoritos y el botón de otra sorpresa.
- Se muestra una bienvenida distinta **cada vez que se abre o recarga** la página, con un mensaje romántico y el botón **Siempre ♡**. No se guarda un historial de aperturas.
- **No hay estadísticas ni analítica ni rastreo de personas o tiempo de uso.**
- El baile sigue desactivado; no se solicita ninguna actividad física.
- Se mantienen las estrellas, cartas, farolillos, textos, respiración, dedicatoria y formulario.
- Para publicar, reemplaza `index.html`, `styles.css` y `script.js` en la raíz; los otros archivos del ZIP se conservan.


## Versión 11 · Descubrimiento diario y canciones de Noel

- Una curiosidad nueva por fecha local en una selección editorial de 35 datos; el catálogo rota al agotarse y puede ampliarse desde `script.js`. No extrae noticias en vivo ni se actualiza solo con información externa.
- Botón «Descubrir otra», favoritos de curiosidades guardados solo en el navegador.
- Cuatro dedicatorias originales: «Princesa» (Matteo, Soy Luna), «Sin Maquillar», «Lady Zombie» y «The Reason» (Hoobastank). No reproduce música ni letras.
- No se recopilan estadísticas, no se activa el baile; se conserva la ruleta de la versión 10, la bienvenida y todas las experiencias existentes.
- Publicar reemplazando los archivos de la raíz del repositorio, conservando `heyhey-cuento.jpg` en la raíz.


## Versión 12 — Dos pestañas
La página ahora tiene **Inicio** (ruleta, datos curiosos diarios, dedicatoria, historia, respiración, preguntas) y **Nuestro universo** (canciones de Noel: Princesa, Sin Maquillar, Lady Zombie y The Reason; cielo de estrellas, cartas y farolillos). Las pestañas cambian de forma instantánea sin recargar la página. No se recopilan estadísticas ni se reactiva el baile.

El catálogo de curiosidades incluido cambia según el día, pero no consulta Internet ni añade datos nuevos automáticamente. Para ampliarlo es necesario actualizar el código en GitHub.


## Versión 13 — Sorpresas escondidas y experiencia más ligera
- La portada da prioridad a la ruleta y al descubrimiento diario; otras secciones se abren en «Más rincones para ti».
- Corazón discreto: cinco pulsaciones sucesivas revelan una dedicatoria secreta. Planeta de El Principito: símbolo interactivo. Tres estrellas esconden recuerdos de los primeros encuentros.
- Los secretos pueden guardarse en **Recuerdos**, separadamente de **Frases** y **Curiosidades**. Favoritos almacenados solamente en ese navegador.
- Mejores áreas táctiles, lectura en celular, transiciones suaves y respeto a la preferencia de movimiento reducido.
- En las preguntas finales se añade «Borrar mis respuestas guardadas», que borra únicamente el contenido local, no respuestas ya enviadas voluntariamente.
- No se añadieron analíticas, identificadores, cuentas ni seguimiento de actividad. El baile continúa desactivado.
- Los deseos y respuestas no se envían automáticamente. El buzón de Google Sheets sigue siendo optativo y requiere configuración aparte.


## Corrección v13.1
Se declaró la referencia a la ruleta y se inicializaron sus variables de giro (`wheel`, `spinning`, `wheelTurns`) antes de registrar los botones. También se actualizó la versión de `script.js` a `13.1` para evitar caché. Sin analíticas ni baile.
