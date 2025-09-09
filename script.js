// =============================
// Mensagem inicial
// =============================
console.log("Olá do JavaScript!");

// =============================
// Variáveis
// =============================
let nome = "Julio Cezar"; // mutável
const PI = Math.PI;       // constante correta (maiúscula)

// =============================
// Operações matemáticas
// =============================
let raio = 3;
let areaDoCirculo = PI * raio * raio;
console.log("Área do círculo:", areaDoCirculo.toFixed(2));

// =============================
// Condicional
// =============================
if (areaDoCirculo > 20) {
  console.log("Área maior que 20");
} else {
  console.log("Área menor ou igual a 20");
}

// =============================
// Loop
// =============================
for (let i = 0; i < 3; i++) {
  console.log("Contador:", i);
}

// =============================
// Função
// =============================
function saudacao(pessoa) {
  return `Olá, ${pessoa}! Bem-vindo(a).`;
}
console.log(saudacao(nome));

// =============================
// Manipulação do DOM (HTML)
// =============================
const botao = document.getElementById("botao");
const titulo = document.getElementById("titulo");

botao.addEventListener("click", () => {
  titulo.textContent = saudacao(nome); // altera texto do <h1>
  alert(saudacao(nome));               // mostra alerta
});