const nav = document.querySelector("#navbar");
const abrirMenu = document.querySelector("#abrir");
const cerrarMenu = document.querySelector("#cerrar");


abrirMenu.addEventListener("click", () => {
    nav.classList.add ("visible");
})

cerrarMenu.addEventListener("click", () => {
    nav.classList.remove ("visible");
})
nav.addEventListener("click", () => {
    nav.classList.remove ("visible");
})