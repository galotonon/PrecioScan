// Nombre y mail del usuario guardados en localStorage
let nombre = localStorage.getItem('nombre') || 'Galo';
const email = localStorage.getItem('email') || 'galo@mail.com';

function mostrarUsuario() {
  document.querySelectorAll('.nombre-usuario').forEach(elemento => {
    elemento.textContent = nombre;
  });
  document.querySelectorAll('.inicial-usuario').forEach(elemento => {
    elemento.textContent = nombre.charAt(0).toUpperCase();
  });
  document.querySelectorAll('.email-usuario').forEach(elemento => {
    elemento.textContent = email;
  });
}

mostrarUsuario();

const campoNombre = document.querySelector('#nombre');

if (campoNombre) {
  if (campoNombre.defaultValue) {
    campoNombre.value = nombre;
  }

  campoNombre.addEventListener('input', () => {
    nombre = campoNombre.value.trim() || 'Galo';
    mostrarUsuario();
  });

  campoNombre.form.addEventListener('submit', () => {
    localStorage.setItem('nombre', campoNombre.value.trim());
  });
}

const campoEmail = document.querySelector('#email');

if (campoEmail) {
  if (campoEmail.defaultValue) {
    campoEmail.value = email;
  }

  campoEmail.form.addEventListener('submit', () => {
    localStorage.setItem('email', campoEmail.value.trim());
  });
}
