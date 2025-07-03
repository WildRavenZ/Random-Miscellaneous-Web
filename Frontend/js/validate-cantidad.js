document.addEventListener("DOMContentLoaded", function () {
  const cantidadInput = document.getElementById("cantidad");

  cantidadInput.addEventListener("input", function () {
    this.value = this.value.replace(/[^1-9\d]/g, '');
    this.value = this.value.replace(/^0+/, '');
  });
});