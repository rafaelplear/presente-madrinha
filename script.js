const inicio = new Date("2026-02-04");

function atualizarContador() {

    const hoje = new Date();

    const diferenca = hoje - inicio;

    const anos = Math.floor(
        diferenca / (1000 * 60 * 60 * 24 * 365)
    );

    const meses = Math.floor(
        diferenca / (1000 * 60 * 60 * 24 * 30)
    ) % 12;

    const dias = Math.floor(
        diferenca / (1000 * 60 * 60 * 24)
    ) % 30;

    const horas = Math.floor(
        diferenca / (1000 * 60 * 60)
    ) % 24;

    const minutos = Math.floor(
        diferenca / (1000 * 60)
    ) % 60;

    const segundos = Math.floor(
        diferenca / 1000
    ) % 60;

    document.getElementById("anos").textContent = anos;
    document.getElementById("meses").textContent = meses;
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

setInterval(atualizarContador, 1000);

atualizarContador();

const revelarBtn = document.getElementById("revelarBtn");
const spotify = document.getElementById("spotify");

revelarBtn.addEventListener("click", () => {
    spotify.style.display = "block";
    revelarBtn.style.display = "none";
});

const slides = document.querySelectorAll(".slide");
let atual = 0;
function mostrarSlide() {
    slides[atual].classList.remove("ativo");
    atual++;
    if (atual >= slides.length) {
        atual = 0;
    }
    slides[atual].classList.add("ativo");
}

setInterval(mostrarSlide, 3000);

const emojis = ["🤍", "🎉","🤍", "🎉","🤍", "🎉","🤍", "🎉","🤍", "🎉","🤍", "🎉","🤍", "🎉","🤍", "🎉","🤍", "🎉"];

function criarEmoji(){

    const emoji = document.createElement("div");

    emoji.classList.add("emoji");

    emoji.innerHTML =
        emojis[Math.floor(Math.random() * emojis.length)];

    emoji.style.left = Math.random() * 10 + "vw";

    emoji.style.animationDuration =
        (Math.random() * 20 + 20) + "s";

    document.getElementById("chuva").appendChild(emoji);

    setTimeout(() => {
        emoji.remove();
    }, 7000);
}

setInterval(criarEmoji, 80);

let inicioX = 0;

const carrossel = document.querySelector(".carrossel");

carrossel.addEventListener("touchstart", (e) => {
    inicioX = e.touches[0].clientX;
});

carrossel.addEventListener("touchend", (e) => {
    let fimX = e.changedTouches[0].clientX;

    if (inicioX - fimX > 50) {
        proximaFoto(); // arrastou para esquerda
    }

    if (fimX - inicioX > 50) {
        fotoAnterior(); // arrastou para direita
    }
});

function proximaFoto() {
    slides[indice].classList.remove("ativo");
    indice = (indice + 1) % slides.length;
    slides[indice].classList.add("ativo");
}

function fotoAnterior() {
    slides[indice].classList.remove("ativo");
    indice = (indice - 1 + slides.length) % slides.length;
    slides[indice].classList.add("ativo");
}