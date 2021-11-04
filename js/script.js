// efeito de maquina de escrever

const textEffect = document.querySelector(".textEffect");

function typeWriter(elemento) {
  const arrayText = elemento.innerHTML.split("");
  elemento.innerHTML = " ";

  arrayText.forEach((letter, index) => {
    setTimeout(() => (elemento.innerHTML += letter), 75 * index);
  });
}

typeWriter(textEffect);

// menu mobile
const btnMobile = document.getElementById("btn-mobile");
const nav = document.getElementById("nav");

function toggleMenu(event) {
  if (event.type === "touchstart") {
    event.preventDefault();
  }
  nav.classList.toggle("active");

  const active = nav.classList.contains("active");

  event.currentTarget.setAttribute("aria-expanded", active);

  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir menu");
  }
}

btnMobile.addEventListener("click", toggleMenu);

btnMobile.addEventListener("touchstart", toggleMenu);

// fechar o menu mobile quando clicar em um link interno
const navLinks = document.querySelectorAll("#menu li a");

navLinks.forEach((item) => {
  item.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});
