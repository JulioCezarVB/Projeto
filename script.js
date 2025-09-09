// mostra mensagem no console
console.log ("olá do JavaScript")

// variavel
let nome= "Julio Cezar"; // mutavel
const pi= Math.pi;       // constante

// operações matematicas
let raio= 3;
let area= pi * raio * raio;
console.log("Area do Circulo",area.toFixed(2))


// Condicional
if (area >20) {
    console.log("Area maior que 20");
} else {
    console.log("Area menor ou igual a 20");
}

// Loop
for (let i = 0; i < 3; i++) {
    console.log("contador",i);
}

// Função

function saudacao(pessoa) {
  return `Olá, ${pessoa}! Bem-vindo(a).`;
}
console.log(saudacao(nome));

// Manipulação do DOM (HTML)
const botao = document.getElementById("botao");
const titulo = document.getElementById("titulo");

botao.addEventListener("click", () => {
  titulo.textContent = saudacao(nome); // altera texto do <h1>
  alert(saudacao(nome));               // mostra alerta
});