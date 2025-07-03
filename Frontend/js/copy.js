document.addEventListener('click', function(e) {
  if (e.target.closest('.copiar-btn')) {
    const btn = e.target.closest('.copiar-btn');
    const contenedor = btn.closest('.card-body');
    const elemento = contenedor.querySelector('[data-copy]');
    const texto = elemento?.innerText || '';

    navigator.clipboard.writeText(texto).then(() => {
    }).catch(err => {
      console.error('Error al copiar texto:', err);
    });
  }
});