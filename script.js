const inicio = document.getElementById("inicio");
const carta = document.getElementById("carta");

const btnSi = document.getElementById("btnSi");
const btnNo = document.getElementById("btnNo");
const btnVolver = document.getElementById("btnVolver");
const mensajeNo = document.getElementById("mensajeNo");

btnSi.addEventListener("click", () => {
    inicio.classList.add("oculto");
    carta.classList.remove("oculto");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

let intentos = 0;

function moverBoton() {
    intentos++;

    mensajeNo.classList.add("visible");

    const mensajes = [
        "¿Segura? 🥺❤️",
        "Anda, dale que sí 💗",
        "Es algo bonito, lo prometo 🥹",
        "No me rompas el corazón ❤️‍🩹",
        "El sí se ve más bonito 💕"
    ];

    mensajeNo.textContent =
        mensajes[Math.min(intentos - 1, mensajes.length - 1)];

    const margen = 15;
    const maxX = Math.max(0, window.innerWidth - btnNo.offsetWidth - margen * 2);
    const maxY = Math.max(0, window.innerHeight - btnNo.offsetHeight - margen * 2);

    btnNo.style.position = "fixed";
    btnNo.style.left = (margen + Math.random() * maxX) + "px";
    btnNo.style.top = (margen + Math.random() * maxY) + "px";
    btnNo.style.zIndex = "10";
}

btnNo.addEventListener("mouseenter", moverBoton);

btnNo.addEventListener("click", (evento) => {
    evento.preventDefault();
    moverBoton();
});

btnNo.addEventListener("touchstart", (evento) => {
    evento.preventDefault();
    moverBoton();
}, { passive: false });

btnVolver.addEventListener("click", () => {
    carta.classList.add("oculto");
    inicio.classList.remove("oculto");

    btnNo.style.position = "relative";
    btnNo.style.left = "";
    btnNo.style.top = "";
    mensajeNo.classList.remove("visible");
    intentos = 0;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
