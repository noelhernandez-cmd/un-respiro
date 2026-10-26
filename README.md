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
