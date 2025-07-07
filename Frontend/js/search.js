document.addEventListener('click', function (e) {
  const btnBuscar = e.target.closest('.buscar-btn');
  if (btnBuscar) {
    const contenedor = btnBuscar.closest('.card');
    const elemento = contenedor.querySelector('[data-copy]');
    const texto = elemento?.innerText || '';

    if (texto) {
      const url = 'https://www.google.com/search?q=' + encodeURIComponent(texto);
      window.open(url, '_blank');
    }
  }

  const btnCopiar = e.target.closest('.copiar-btn');
  if (btnCopiar) {
    const contenedor = btnCopiar.closest('.card');
    const elemento = contenedor.querySelector('[data-copy]');
    const texto = elemento?.innerText || '';

    navigator.clipboard.writeText(texto).catch(err => {
      console.error('Error al copiar texto:', err);
    });
  }
});