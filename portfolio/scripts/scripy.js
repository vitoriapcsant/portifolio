const botao = document.getElementById("modoClaroEscuro");
console.log(botao);
const botaoRosa = document.getElementById("modoRosa");
console.log(botaoRosa);

let claro = true;
botao.addEventListener("click", function () {
  botaoRosa.addEventListener("click", function () {
    document.body.style.backgroundColor = "#FFC0CB";
    document.body.style.color = "black";
});
        if (claro) {
                document.body.style.backgroundColor = "black";
                document.body.style.color = "white";
                botao.textContent = "Modo Claro";

        } else {
                document.body.style.backgroundColor = "white";
                document.body.style.color = "black";
                botao.textContent = "Modo Escuro";

        }
        claro = !claro;
}
);

`use strict`;
const NOME = "Vitoria e Beatriz";
let tituloProfissional = "Designer de Jogos Profissional";
let minhaBio = "Somos duas designers de jogos profissionais que transformam ideias em experiências interativas, criando mundos, narrativas e mecânicas com foco na inovação e na experiência do jogador.";
let anoFormatura = 2028;
let mesFormatura = 12;
let diaFormatura = 31;
let anoIngresso = 2025;
let mesIngresso = 1;
let diaIngresso = 1;

let hoje = new Date(); //Dia atual
let mesAtual = hoje.getMonth() + 1; //Mês atual (getMonth() retorna de 0 a 11, por isso somamos 1)
let anoAtual = hoje.getFullYear(); //Ano atual
let diaAtual = hoje.getDate(); //Dia atual

let indefinido;
let nulo = null;
let curso = {
        nome: "Sistemas de Informação",
        semestre: 3,
        disciplina: "Design focado no usuário"
}

console.log(typeof nulo);
console.log(typeof indefinido);
console.log(typeof anoFormatura);
console.log(typeof minhaBio);
console.log(typeof tituloProfissional);
console.log(typeof NOME);
console.log(typeof curso);

document.getElementById("meuNome").innerText = NOME;
document.getElementById("tituloProfissional").innerText = tituloProfissional;
document.getElementById("minhaBio").innerText = minhaBio;
document.getElementById("anoFormatura").innerText = "Ano de formatura: " + anoFormatura;
document.getElementById("tempoRestanteParaFormatura").innerText = `Tempo restante para formatura: ${anoFormatura - anoAtual} anos`;

//Se ano para formatura for 0 ou <0 não que imprima os anos
if (anoFormatura - anoAtual <= 0) {
    document.getElementById("tempoRestanteParaFormatura").innerText = "-";
} else if (anoFormatura - anoAtual === 1) {
    document.getElementById("tempoRestanteParaFormatura")
    .innerText = `Tempo restante para formatura: ${anoFormatura - anoAtual} ano`;
} else {
    document.getElementById("tempoRestanteParaFormatura")
    .innerText = `Tempo restante para formatura: ${anoFormatura - anoAtual} anos`;   
};

let diasRestantes = diaFormatura - diaAtual;
let mesesRestantes = mesFormatura - mesAtual;
let anosRestantes = anoFormatura - anoAtual;

if (diasRestantes <= 0 && mesesRestantes <= 0 && anosRestantes <= 0) {
        document.getElementById("tempoRestanteParaFormatura").innerText = `Curso Concluído!`;
};




// QUIZ

const btnVisual = document.getElementById("btn-visual");
const btnLogica = document.getElementById("btn-logica");

const pergunta = document.getElementById("pergunta");
const resultadoQuiz = document.getElementById("resultado-quiz");

let pontosFront = 0;
let pontosBack = 0;

let etapa = 1;


// BOTÃO VISUAL
btnVisual.addEventListener("click", function () {

    pontosFront++;
    proximaPergunta();

});


// BOTÃO LÓGICA
btnLogica.addEventListener("click", function () {

    pontosBack++;
    proximaPergunta();

});


// FUNÇÃO DAS PERGUNTAS
function proximaPergunta() {

    if (etapa === 1) {

        pergunta.innerText = "O que parece mais divertido?";

        btnVisual.innerText = "🎨 Criar animações e cores";

        btnLogica.innerText = "⚙️ Trabalhar com banco de dados";

        etapa = 2;

    } else if (etapa === 2) {

        pergunta.innerText = "Qual área você acha mais interessante?";

        btnVisual.innerText = "🎨 Experiência do usuário";

        btnLogica.innerText = "⚙️ Sistemas e servidores";

        etapa = 3;

    } else {

        mostrarResultado();

    }

}


// RESULTADO FINAL
function mostrarResultado() {

    if (pontosFront > pontosBack) {

        resultadoQuiz.innerHTML = `
            <h3>🎨 Perfil Front-End!</h3>
            <p>
            Você gosta da parte visual e criativa.
            </p>
        `;

    } else if (pontosBack > pontosFront) {

        resultadoQuiz.innerHTML = `
            <h3>⚙️ Perfil Back-End!</h3>
            <p>
            Você gosta mais de lógica e sistemas.
            </p>
        `;

    } else {

        resultadoQuiz.innerHTML = `
            <h3>🔄 Perfil Full Stack!</h3>
            <p>
            Você gosta das duas áreas.
            </p>
        `;

    }

}

for  (let i = 0;i <=20;i++) {
  let pares = (i % 2 === 0) ? "Par" : "Ímpar";
  console.log(`${i} é ${pares}`);
}

let object = {
  Nome: "Vitoria",
  Idade: 17,
  Profissão: "Designer de Jogos"
};

for (let chave in object) {
  document.write(`<p>${chave}: ${object[chave]}</p>`);
}

let alunos = ["Vitória", "Beatriz", "Gabriel", "Vitor", "Leo"];
for (let contem of alunos) {
 if (contem === "Vitoria") {
  document.write(`<p> ${contem} - Presente!</p>`);
  } else {
  document.write(`<p> ${contem} - Ausente!</p>`);
  }
 }

 let num  = prompt ("Prompt 1 - Diga um número  par")
  while (num % 2 !== 0) {
    num = prompt("Ops, esse número não é par. Tente novamente:");
     };

      do {
        num = prompt ("Prompt 2 - Diga um número par:");
      } while (num % 2 !== 0);

let qualidades = {
  Nome: "Vitoria Pereira",
  Idade: 17,
  habilidades: "sou organizada, diciplinada, amigável e boa aluna "
};

for (let chave in qualidades) {
  document.write(`<p>${chave}: ${qualidades[chave]}</p>`);
}

