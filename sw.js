// Service Worker

// Nombre del caché
const CACHE_NAME = 'precioscan-v17';

// Archivos a guardar en caché
const ARCHIVOS_A_CACHEAR = [
  './',
  // Páginas
  './alertas.html',
  './ayuda.html',
  './buscar.html',
  './editar-datos.html',
  './elegir-nombre.html',
  './historial.html',
  './index.html',
  './inicio.html',
  './link-enviado.html',
  './login.html',
  './menu.html',
  './mi-cuenta.html',
  './offline.html',
  './producto-adidas-duramo-sl.html',
  './producto-adidas-response-runner-2.html',
  './producto-asics-ex89.html',
  './producto-campera-nike-club-lightweight.html',
  './producto-campera-nike-therma.html',
  './producto-campera-nike-trail-aireez.html',
  './producto-pantalon-boca-juniors-adidas.html',
  './producto-puma-smash-3.html',
  './producto-remera-adidas-adi365.html',
  './producto-remera-puma-cloudspun.html',
  './producto-short-nike-club-fleece.html',
  './recuperar.html',
  './registro.html',
  './resultados-abrigo.html',
  './resultados-ofertas.html',
  './resultados-pantalones.html',
  './resultados-remeras.html',
  './resultados-ropa.html',
  './resultados-running.html',
  './resultados-zapatillas.html',
  './resultados.html',
  './terminos.html',
  // Estilos, scripts y Bootstrap
  './css/estilos.css',
  './js/usuario.js',
  './js/alertas.js',
  './manifest.json',
  './vendor/bootstrap/bootstrap.min.css',
  './vendor/bootstrap/bootstrap.bundle.min.js',
  './img/logo.png',
  './img/rayas.svg',
  './img/icon-192.png',
  './img/icon-512.png',
  // Íconos
  './img/iconos/abrigo-amarillo.svg',
  './img/iconos/alerta-amarillo.svg',
  './img/iconos/alerta-gris.svg',
  './img/iconos/anterior-blanco.svg',
  './img/iconos/ayuda-negro.svg',
  './img/iconos/buscar-amarillo.svg',
  './img/iconos/buscar-gris.svg',
  './img/iconos/buscar-texto.svg',
  './img/iconos/campana-chica-negro.svg',
  './img/iconos/campana-negro.svg',
  './img/iconos/candado-texto.svg',
  './img/iconos/carrito-negro.svg',
  './img/iconos/cerrar-negro.svg',
  './img/iconos/cuenta-negro.svg',
  './img/iconos/editar-amarillo.svg',
  './img/iconos/externo-negro.svg',
  './img/iconos/filtrar-blanco.svg',
  './img/iconos/flecha-negro.svg',
  './img/iconos/futbol-amarillo.svg',
  './img/iconos/google-negro.svg',
  './img/iconos/historial-negro.svg',
  './img/iconos/inicio-amarillo.svg',
  './img/iconos/inicio-gris.svg',
  './img/iconos/listo-amarillo.svg',
  './img/iconos/mail-amarillo.svg',
  './img/iconos/mas-amarillo.svg',
  './img/iconos/mas-gris.svg',
  './img/iconos/ofertas-amarillo.svg',
  './img/iconos/pantalones-amarillo.svg',
  './img/iconos/remeras-amarillo.svg',
  './img/iconos/ropa-amarillo.svg',
  './img/iconos/running-amarillo.svg',
  './img/iconos/salir-negro.svg',
  './img/iconos/siguiente-blanco.svg',
  './img/iconos/sin-conexion-amarillo.svg',
  './img/iconos/terminos-negro.svg',
  './img/iconos/ver-todo-amarillo.svg',
  './img/iconos/ver-todo-negro.svg',
  './img/iconos/verificado-verde.svg',
  './img/iconos/volver-blanco.svg',
  './img/iconos/whatsapp-blanco.svg',
  './img/iconos/whatsapp-verde.svg',
  './img/iconos/zapatillas-amarillo.svg',
  // Fotos de los productos
  './img/productos/adidas-duramo-sl-400.webp',
  './img/productos/adidas-duramo-sl-800.webp',
  './img/productos/adidas-duramo-sl.jpg',
  './img/productos/adidas-response-runner-2-400.webp',
  './img/productos/adidas-response-runner-2-800.webp',
  './img/productos/adidas-response-runner-2.jpg',
  './img/productos/asics-ex89-400.webp',
  './img/productos/asics-ex89-800.webp',
  './img/productos/asics-ex89.jpg',
  './img/productos/campera-nike-club-lightweight-400.webp',
  './img/productos/campera-nike-club-lightweight-800.webp',
  './img/productos/campera-nike-club-lightweight.jpg',
  './img/productos/campera-nike-therma-400.webp',
  './img/productos/campera-nike-therma-800.webp',
  './img/productos/campera-nike-therma.jpg',
  './img/productos/campera-nike-trail-aireez-400.webp',
  './img/productos/campera-nike-trail-aireez-800.webp',
  './img/productos/campera-nike-trail-aireez.jpg',
  './img/productos/pantalon-boca-juniors-adidas-400.webp',
  './img/productos/pantalon-boca-juniors-adidas-800.webp',
  './img/productos/pantalon-boca-juniors-adidas.jpg',
  './img/productos/puma-smash-3-400.webp',
  './img/productos/puma-smash-3-800.webp',
  './img/productos/puma-smash-3.jpg',
  './img/productos/remera-adidas-adi365-400.webp',
  './img/productos/remera-adidas-adi365-800.webp',
  './img/productos/remera-adidas-adi365.jpg',
  './img/productos/remera-puma-cloudspun-400.webp',
  './img/productos/remera-puma-cloudspun-800.webp',
  './img/productos/remera-puma-cloudspun.jpg',
  './img/productos/short-nike-club-fleece-400.webp',
  './img/productos/short-nike-club-fleece-800.webp',
  './img/productos/short-nike-club-fleece.jpg',
];

// Instalación
self.addEventListener('install', evento => {
  console.log('🧩 Instalando Service Worker...');
  evento.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('📦 Guardando archivos en caché...');
      return cache.addAll(ARCHIVOS_A_CACHEAR);
    })
  );
});

// Activación: borra cachés viejos
self.addEventListener('activate', evento => {
  console.log('✨ Activando nuevo Service Worker...');
  evento.waitUntil(
    caches.keys().then(nombres => {
      return Promise.all(
        nombres.map(nombre => {
          if (nombre !== CACHE_NAME) {
            console.log('🗑️ Borrando caché viejo:', nombre);
            return caches.delete(nombre);
          }
        })
      );
    })
  );
});

// Fetch
self.addEventListener('fetch', evento => {
  console.log('📡 Petición a:', evento.request.url);
  evento.respondWith(
    // ignoreSearch: ignora el "?" que agregan los formularios
    caches.match(evento.request, { ignoreSearch: true }).then(respuesta => {
      if (respuesta) {
        console.log('✅ Sirviendo desde caché:', evento.request.url);
        return respuesta;
      }
      return fetch(evento.request).catch(() => {
        // Sin conexión: página offline
        if (evento.request.headers.get('accept').includes('text/html')) {
          return caches.match('./offline.html');
        }
      });
    })
  );
});
