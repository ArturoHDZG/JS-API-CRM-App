import { mostrarAlerta } from './funciones.js';
const URL = 'http://localhost:4000/clientes';

// Creación de nuevos clientes
export const nuevoCliente = async cliente => {
  try {
    await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cliente)
    });

    window.location.href = 'index.html';
  } catch (error) {
    mostrarAlerta(error);
  }
};

// Obtención de todos los clientes
export const obtenerClientes = async () => {
  try {
    const respuesta = await fetch(URL);
    return await respuesta.json();
  } catch (error) {
    mostrarAlerta(error);
    return [];
  }
};

// Eliminar clientes
export const eliminarCliente = async id => {
  try {
    await fetch(`${URL}/${id}`, {
      method: 'DELETE'
    });
  } catch (error) {
    mostrarAlerta(error);
  }
};
