const pergunta = document.querySelectorAll(".pergunta");
const resposta = document.querySelectorAll(".resposta");
const inputContainer = document.querySelector("input");
const rootElement = document.documentElement;

for (let i = 0; i < pergunta.length; i++) {
  pergunta[i].addEventListener("click", () => {
    if (pergunta[i].classList.contains("fechar-resposta")) {
      pergunta[i].classList.toggle("fechar-resposta");
      resposta[i].classList.toggle("ativar");
    } else {
      pergunta[i].classList.add("fechar-resposta");
      resposta[i].classList.add("ativar");
    }
  });
}
