function typeWriter(elemento) {
  const arrayText = elemento.innerHTML.split("");
  elemento.innerHTML = " ";

  arrayText.forEach((letter, index) => {
    setTimeout(() => (elemento.innerHTML += letter), 75 * index);
  });
}
const textEffect = document.querySelector(".textEffect");

typeWriter(textEffect);
