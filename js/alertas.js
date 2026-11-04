// Alertas de precio guardadas en localStorage
let alertas = JSON.parse(localStorage.getItem('alertas')) || [];

function mostrarAlertas() {
  document.querySelectorAll('[data-alerta]').forEach(boton => {
    const tieneAlerta = alertas.includes(boton.dataset.alerta);
    boton.classList.toggle('alerta-creada', tieneAlerta);

    const texto = boton.querySelector('.boton__texto');
    if (texto) {
      texto.textContent = tieneAlerta ? 'Alerta creada' : 'Crear alerta de precio';
    }
  });

  // Mis alertas
  document.querySelectorAll('[data-producto]').forEach(item => {
    item.classList.toggle('alerta--oculta', !alertas.includes(item.dataset.producto));
  });

  const mensajeVacio = document.querySelector('.alertas__vacio');
  if (mensajeVacio) {
    mensajeVacio.classList.toggle('alertas__vacio--oculto', alertas.length > 0);
  }
}

const aviso = document.querySelector('.aviso');
let temporizador;

function mostrarAviso(texto) {
  aviso.textContent = texto;
  aviso.classList.remove('aviso--oculto');
  clearTimeout(temporizador);
  temporizador = setTimeout(() => {
    aviso.classList.add('aviso--oculto');
  }, 2500);
}

document.querySelectorAll('[data-alerta]').forEach(boton => {
  boton.addEventListener('click', () => {
    const id = boton.dataset.alerta;
    if (alertas.includes(id)) {
      alertas = alertas.filter(alerta => alerta !== id);
      mostrarAviso('Quitaste la alerta de precio');
    } else {
      alertas.push(id);
      mostrarAviso('Alerta creada: te avisamos cuando baje el precio');
    }
    localStorage.setItem('alertas', JSON.stringify(alertas));
    mostrarAlertas();
  });
});

mostrarAlertas();
