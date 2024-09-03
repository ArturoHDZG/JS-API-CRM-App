export function mostrarAlerta(msj) {
  const ALERT_DURATION = 3000;
  const alertaExiste = document.querySelector('.bg-red-100');

  if (!alertaExiste) {
    const alerta = document.createElement('P');
    alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');

    alerta.innerHTML = `
      <strong class="font-bold">Error!</strong>
      <span class="block sm:inline">${msj}</span>
    `;

    const formulario = document.querySelector('#formulario');
    formulario.appendChild(alerta);

    setTimeout(() => {
      alerta.remove();
    }, ALERT_DURATION);
  }
}
