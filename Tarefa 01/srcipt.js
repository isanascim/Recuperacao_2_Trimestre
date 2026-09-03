// =========================================================
// ARQUIVO DE APOIO - NÃO HÁ UMA SOLUÇÃO PRONTA AQUI.
// Desenvolva a lógica JavaScript da tarefa.
// =========================================================

// Sugestão de organização:
// 1. Selecione os elementos necessários.
// 2. Crie as variáveis de estado, se necessário.
// 3. Adicione os eventos.
// 4. Implemente as funções.
// 5. Teste cada requisito individualmente.

const tela = document.getElementById("tela");
const ctx = tela.getContext("2d");
const desligar = document.getElementById("desligado");
ctx.fillStyle = "white";
ctx.fillRect(0, 0, tela.width, tela.height);

let desenhando = false;

tela.onmousedown = () => {
  desenhando = true;
  ctx.beginPath();
};

tela.onmouseup = () => (desenhando = false);

tela.onmousemove = (e) => {
  if (!desenhando) return;
  ctx.strokeStyle = cor.value;
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
};

tela.onmouseleave = () => {
  desenhando = false;
  ctx.beginPath();
};

resetar.onclick = () => {
  ctx.clearRect(0, 0, tela.width, tela.height);
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, tela.width, tela.height);
};

function myFunction() {
  var element = document.body;
  element.classList.toggle("light-mode");
  if (desligar.innerHTML === "Desligado") {
    desligar.innerHTML = "Ligado";
  } else {
    desligar.innerHTML = "Desligado";
  }
}