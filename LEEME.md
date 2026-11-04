# PrecioScan · PWA (Parcial 2 · ICDM · ISEC)

Comparador de precios de zapatillas y ropa deportiva.
Hecho con lo visto en las clases: **HTML, CSS, Bootstrap, Mobile First, manifest.json, sw.js y offline.html**.
Lo único que agregamos por fuera de las clases son dos JavaScript cortos: `js/usuario.js` (guarda tu nombre y tu mail) y `js/alertas.js` (la campanita crea alertas y muestra un cartel de confirmación).

## Cómo abrirlo

1. Abrir la carpeta `PrecioScan` en Visual Studio Code.
2. Clic derecho en `index.html` → **Open with Live Server**.
3. Se abre en `http://127.0.0.1:5500/index.html`.
4. Para verlo como celular: F12 → ícono de celular (modo dispositivo).
5. Para probar sin conexión: F12 → pestaña **Application** → **Service Workers** → tildar **Offline** y recargar.

## Recorrido (como el prototipo de la clase 7)

`index.html` (bienvenida) → **Ingresar** → `login.html` → `elegir-nombre.html` → `inicio.html`
→ tocar un producto → `producto-....html` → **Comprar en ...** o el nombre de la tienda en la tabla → abre la publicación real del producto en la web de la tienda.

En cada producto, la **campanita** crea la alerta sin salir de la página y se pone amarilla. Las alertas creadas aparecen en `alertas.html`.
En los resultados, **Filtrar** abre una ventana emergente con las categorías.

Desde **Cuenta** (arriba a la derecha o en la barra de abajo) → `mi-cuenta.html` → **Cerrar sesión** vuelve a `index.html`.

## Organización de archivos

```
PrecioScan/
├── index.html, inicio.html, ...   → una página por pantalla (35 en total)
├── producto-*.html                 → una página por producto (11 productos)
├── resultados-*.html               → una página por categoría
├── offline.html                    → se muestra cuando no hay internet
├── manifest.json                   → datos de la app para instalarla
├── sw.js                           → Service Worker (caché y modo sin conexión)
├── css/estilos.css                 → todos nuestros estilos
├── js/usuario.js                   → guarda y muestra el nombre y el mail del usuario
├── js/alertas.js                   → crea y quita alertas con la campanita
├── vendor/bootstrap/               → Bootstrap descargado (funciona sin internet)
└── img/                            → logo, íconos de la app, íconos SVG y fotos
```

## Guía para la defensa: qué clase explica cada cosa

| Qué usamos | Dónde está | Clase |
|---|---|---|
| Etiquetas semánticas: `header`, `nav`, `main`, `section`, `article`, `aside` | todas las páginas | 1, 2, 9 |
| Links internos y externos, imágenes con `alt` | todas las páginas | 1 |
| `id` y `class` | todas las páginas | 1, 2 |
| Metodología **BEM** (`.tarjeta__precio`, `.boton--amarillo`) | `estilos.css` y HTML | 2, 5 |
| `* { box-sizing: border-box; }` | `estilos.css` sección 1 | 2 |
| Google Fonts con `<link>` (Montserrat y Roboto) | `<head>` | 1 |
| Colores hex, `background-image` (rayas de la portada) | `.portada` | 1 |
| `position: sticky` (encabezado), `fixed` (barra de abajo y WhatsApp), `relative` + `absolute` (etiqueta "-24%" y campanita), `z-index` | `.encabezado`, `.barra-inferior`, `.tarjeta__etiqueta`, `.tarjeta__accion` | 1, 6 |
| Unidades `rem`, `%`, `vh` y `calc()` | todo el CSS, `.bienvenida`, `.whatsapp` | 1, 2 |
| Pseudoclases `:hover`, `:active`, `:focus`, `outline` | botones y links | 2 |
| `:nth-child(even)` (filas pares de la tabla) | `.tabla-precios` | 2, 4, 6 |
| `:not(:last-child)` y `::after` (migas de pan, líneas de las listas) | `.migas__lista`, `.lista-menu` | 4 |
| `::before` y `::after` (separador "o") | `.formulario__separador` | 4, 6 |
| Selector de atributo `a[href^="https"]` | final de la sección 14 | 4 |
| `text-decoration: line-through` (precio anterior), `list-style: none` | tarjetas y listas | 4 |
| Formularios: `label`, `input` email / password / text, `checkbox`, `radio`, `select`, `required`, `placeholder` | login, registro, elegir nombre, mis datos | 2, 6 |
| `:valid` e `:invalid` | campos de los formularios | 6 |
| Tabla con `thead`, `tbody` y `border-collapse` | comparar precios en cada producto | 6 |
| Imágenes responsive con `<picture>`, `<source>` WebP y `srcset` / `sizes` | fotos de productos | 6 |
| **Mobile First** con `@media (min-width: ...)` | final de `estilos.css` | 4, 6 |
| Diseño fluido: grilla de 2, 3 y 4 columnas | `.grilla` | 6 |
| Usabilidad en celular: texto de 16px, interlineado 1.5, botones de 44px, buen contraste | `body`, `.boton` | 5 |
| **Flexbox**: `display: flex`, `flex-direction`, `justify-content`, `align-items`, `gap`, `flex-wrap`, `flex: 1` | encabezado, botones, barra de abajo | 8, 9 |
| **CSS Grid**: `grid-template-columns` con `fr` | `.grilla`, `.categorias` | 8 |
| **Grid con áreas**: `grid-template-areas` y `grid-area` | `.producto`, `.alerta` | 9 |
| **Bootstrap**: CSS y JS linkeados, nuestro CSS después | `<head>` | 10 |
| Bootstrap: `container`, utilidades `mt-3`, `mb-4`, `text-center` | todas las páginas | 10 |
| Bootstrap: **carrusel** con animación de deslizamiento (`carousel slide`), indicadores y flechas (`carousel-control-prev` / `next`) | portada de `inicio.html` | 10 |
| Bootstrap: **ventana modal** (`modal fade`, `data-bs-toggle="modal"`) | botón Filtrar en `resultados-*.html` | 10 |
| Breakpoints iguales a Bootstrap: 576, 768, 992 y 1200 px | `@media` | 10 |
| `manifest.json` linkeado + `meta theme-color` + ícono | `<head>` y `manifest.json` | 11, 12 |
| Script que registra el Service Worker | al final de cada `<body>` | 12 |
| `sw.js`: instalación, activación y fetch | `sw.js` | 12 |
| `offline.html` | `offline.html` | 12 |

## Decisiones que conviene saber explicar

- **JavaScript.** El script que registra el Service Worker (clase 12), el archivo de Bootstrap para el carrusel y la ventana de filtros (clase 10), y dos archivos nuestros: `js/usuario.js` y `js/alertas.js`.
- **`js/usuario.js` (no se vio en clase).** Guarda el nombre y el mail en el navegador con `localStorage.setItem(...)` cuando enviás un formulario (Ingresar, Crear cuenta, Elegí tu nombre o Mis datos), y en cada página busca los elementos con la clase `nombre-usuario` (y `inicial-usuario` para la letra del círculo) y les pone el nombre con `textContent`. El mail se muestra igual en los elementos con la clase `email-usuario` (Mi cuenta). Mientras escribís, la vista previa se actualiza con el evento `input`. Si nunca elegiste un nombre, muestra "Galo".
- **`js/alertas.js` (no se vio en clase).** Guarda en `localStorage` una lista con los productos que tienen alerta (como texto con `JSON.stringify` y la lee con `JSON.parse`). Cada campanita tiene `data-alerta="id-del-producto"`. Al tocarla, agrega o quita ese id de la lista y le pone o le saca la clase `alerta-creada`, que en el CSS la pinta de amarillo. `alertas.html` tiene todos los productos con la clase `alerta--oculta` (`display: none`), y el script le saca esa clase a los que tienen alerta. Además muestra el cartel `.aviso` ("Alerta creada" o "Quitaste la alerta"): le saca la clase `aviso--oculto` y con `setTimeout` se la vuelve a poner a los 2,5 segundos.
- **Pocos productos a propósito.** Dejamos 11 productos reales (4 zapatillas y 7 de ropa), cada uno con su foto y el precio y link de la publicación en cada tienda donde lo encontramos para que haya menos archivos HTML y el proyecto sea fácil de recorrer y defender.
- **Una página por producto y por categoría.** Como no hay base de datos, cada pantalla del prototipo es un HTML fijo, igual que el recorrido de la clase 7. Los filtros y el historial son links a páginas ya armadas.
- **El mail es obligatorio** (`required` y `type="email"`), pero el mail de confirmación es simulado: mandar mails de verdad necesita un servidor, y la consigna dice que no hace falta backend.
- **Comprar** lleva a la web real de cada tienda (link externo), porque PrecioScan compara precios y no vende.
- **Los formularios no tienen `name`** en los campos de texto (igual que el ejemplo de la clase 6), así la contraseña no aparece en la dirección. Solo los `radio` tienen `name`, porque lo necesitan para que se pueda elegir uno solo del grupo.
- **Rutas con `./` en `sw.js`** (la clase usa `/`). Con `./` funciona tanto en Live Server como si se publica en una subcarpeta, por ejemplo en GitHub Pages.
- **`ignoreSearch: true` en `sw.js`.** Al enviar un formulario el navegador agrega `?` a la dirección (ej: `inicio.html?`). Con esa opción el Service Worker ignora lo que va después del `?` y encuentra igual la página guardada.
- **Bootstrap descargado** en `vendor/bootstrap/` (una de las dos formas de linkearlo que vimos en la clase 10). Así funciona sin internet.
- **Las fuentes de Google** necesitan internet: sin conexión se ve Arial, que está puesta como respaldo en `font-family`.
- **Íconos como imágenes `<img>` SVG**, guardadas en `img/iconos/`, para que funcionen sin conexión.
- **Portada:** las rayas son un SVG (`img/rayas.svg`), que se ve nítido en cualquier pantalla, y las tres diapositivas tienen el mismo alto (`height`) para que el fondo no cambie de tamaño al pasar.
- **Animaciones:** las del carrusel y la ventana de filtros son de Bootstrap. No escribimos `transition` ni `animation` en CSS porque no se vieron en clase.

## Publicarlo en GitHub Pages

1. Crear un repositorio nuevo en GitHub, por ejemplo `PrecioScan`.
2. **Add file → Upload files** → arrastrar **el contenido** de la carpeta `PrecioScan` (que `index.html` quede en la raíz) → **Commit changes**.
3. **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main` / `(root)` → **Save**.
4. Al minuto queda en `https://TU-USUARIO.github.io/PrecioScan/`.
5. En el celular: abrir esa dirección en Chrome → menú ⋮ → **Agregar a la pantalla principal** / **Instalar app**.

Si cambiás archivos, subí el número en `CACHE_NAME` de `sw.js` (`precioscan-v17`) para que el celular descargue la versión nueva.

## Créditos

- Fotos y precios de los productos: publicaciones de Sporting, Dexter, Moov, Open Sports, In Store, On Sports, Newsport, Solo Deportes y las tiendas oficiales de Adidas, usadas solo con fines educativos. Donde la tienda no muestra el envío antes del carrito, figura "A calcular". Precios de noviembre de 2026.
- Íconos: Bootstrap Icons (licencia MIT), guardados como archivos SVG.
- Logo: diseño propio.
