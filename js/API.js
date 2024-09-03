const URL = 'http://localhost:4000/clientes';

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
    console.error(error);
  }
}
