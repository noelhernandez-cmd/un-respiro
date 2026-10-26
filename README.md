# Un Respiro ☕

Sitio estático, accesible y adaptable para disfrutar una pausa mental: curiosidades, palabras bonitas, inspiración, calma, microhistorias y humor ligero.

## Funcionalidades
- Seis categorías con contenido rotativo y un botón de sorpresa.
- Favoritos persistentes en `localStorage` (por navegador y dispositivo).
- Lecturas breves, botón para copiar, ventana de favoritos.
- Respiración guiada de 2 minutos, con opción de detener.
- Diseño adaptable, controles de teclado y compatibilidad con movimiento reducido.

## Ejecutarlo
Abre `index.html` en el navegador. No necesita instalar dependencias, servidor ni base de datos. Para que la función copiar opere de manera fiable, utiliza HTTPS o localhost.

## Publicarlo con GitHub Pages
1. Crea un repositorio nuevo e independiente en GitHub (por ejemplo, `un-respiro`).
2. Sube `index.html`, `styles.css`, `script.js` y `README.md` a la rama `main`.
3. Ve a **Settings → Pages → Build and deployment**, elige **Deploy from a branch**, rama `main` y directorio `/ (root)`.
4. Guarda y visita la URL de Pages que GitHub muestre cuando termine la publicación.

## Privacidad
Los favoritos se guardan localmente. No se crea cuenta ni se envían datos del usuario a un servidor. Las tipografías se cargan desde Google Fonts y pueden sustituirse por fuentes del sistema si se necesita prescindir de recursos externos.

## Contenido
Los textos originales están definidos en el arreglo `sections` dentro de `script.js`. Puedes agregar entradas con tres campos: título, cuerpo y nota opcional. Los datos científicos son divulgativos y deben revisarse antes de ampliar su uso editorial.
