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
ctx.fillStyle = "white"; // Declara o fundo com a cor branca
ctx.fillRect(0, 0, tela.width, tela.height); // Limpar

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

limpar.onclick = () => {
  ctx.clearRect(0, 0, tela.width, tela.height);
  ctx.fillStyle = "White";
  ctx.fillRect(0, 0, tela.width, tela.height);
};


exportar.onclick = () => {
  const link = document.createElement("a"); // Cria a tag <a>
  link.download = "MiniPaint.png";
  link.href = tela.toDataURL();
  link.click();
};

  function myFunction() {
  var desligar = document.getElementById("desligar");
    var element = document.body;
    element.classList.toggle("dark-mode");
  if (desligar.innerHTML === "Desligar") {
    desligar.innerHTML = "Ligar";
  } else {
    desligar.innerHTML = "Desligar";
  }
};


