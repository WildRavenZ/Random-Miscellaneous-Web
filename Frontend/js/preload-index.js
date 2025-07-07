const imagenes = [
    "Backend/imgs/covers/baraja.jpg",
    "Backend/imgs/covers/binario.jpg",
    "Backend/imgs/covers/caracteres.png",
    "Backend/imgs/covers/colores.jpg",
    "Backend/imgs/covers/contraseña.png",
    "Backend/imgs/covers/coordenadas.jpg",
    "Backend/imgs/covers/dado.jpg",
    "Backend/imgs/covers/decimales.png",
    "Backend/imgs/covers/decision.png",
    "Backend/imgs/covers/emojis.jpg",
    "Backend/imgs/covers/fechas.jpg",
    "Backend/imgs/covers/hora.jpg",
    "Backend/imgs/covers/letras.png",
    "Backend/imgs/covers/moneda.png",
    "Backend/imgs/covers/nombres.png",
    "Backend/imgs/covers/numeros.jpg",
    "Backend/imgs/covers/paises.jpg",
    "Backend/imgs/covers/ppt.jpeg",
    "Backend/imgs/covers/seleccion.png",
];

imagenes.forEach(src => {
    const img = new Image();
    img.src = src;
});