import { nuevoCliente } from './API.js';
import { mostrarAlerta } from './funciones.js';

(function () {
  //* Selectores
  const formulario = document.querySelector('#formulario');

  //* Event listener
  formulario.addEventListener('submit', validarCliente);

  //* Funciones
  function validarCliente(e) {
    e.preventDefault();

    const nombre = document.querySelector('#nombre');
    const email = document.querySelector('#email');
    const telefono = document.querySelector('#telefono');
    const empresa = document.querySelector('#empresa');

    const cliente = {
      nombre: nombre.value,
      email: email.value,
      telefono: telefono.value,
      empresa: empresa.value
    };

    if (validar(cliente)) {
      mostrarAlerta('Todos los campos son obligatorios');
    } else {
      nuevoCliente(cliente);
    }
  }

  function validar(obj) {
    return !Object.values(obj).every(input => input !== '');
  }
})();
