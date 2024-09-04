import { editarCliente, obtenerClientePorId } from './API.js';
import { mostrarAlerta, validar } from './funciones.js';

(function () {
  //* Variables
  const idInput = document.querySelector('#id');
  const nombreInput = document.querySelector('#nombre');
  const emailInput = document.querySelector('#email');
  const telefonoInput = document.querySelector('#telefono');
  const empresaInput = document.querySelector('#empresa');

  //* Event Listener
  document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const clienteId = urlParams.get('id');

    const cliente = await obtenerClientePorId(clienteId);
    mostrarCliente(cliente);

    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarCliente);
  });

  //* funciones
  function mostrarCliente(cliente) {
    if (!cliente) {
      return;
    }

    const { id, nombre, email, telefono, empresa } = cliente;

    idInput.value = id;
    nombreInput.value = nombre;
    emailInput.value = email;
    telefonoInput.value = telefono;
    empresaInput.value = empresa;
  }

  function validarCliente(e) {
    e.preventDefault();

    const cliente = {
      id: idInput.value,
      nombre: nombreInput.value,
      email: emailInput.value,
      telefono: telefonoInput.value,
      empresa: empresaInput.value
    };

    if (validar(cliente)) {
      mostrarAlerta('Todos los campos son obligatorios');
    } else {
      editarCliente(cliente);
    }
  }
})();
