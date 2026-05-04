const botao = document.getElementById("modoClaroEscuro");
console.log(botao);

botao.addEventListener("click", function () {
        let claro = true;
        if (claro) {
                document.body.style.backgroundColor = "white";
                document.body.style.color = "black";
                botao.textContent = "Modo Claro";
                claro = false;
        } else {
                document.body.style.backgroundColor = "black";
                document.body.style.color = "white";
                botao.textContent = "Modo Escuro";
                claro = false;
        }
        claro = !claro;
}
);

const NOME = "Vitoria Pereira";
let tituloprofissonal = "Garoto de Progama / Faço de tudo";
let minhaBio = "Sou organizada";
let anoFormatura = 2028;
let anoIngresso = 2025;
let indefinido;
let nulo = null;
let curso = {
        nome: "Sistema de informação";
        semestre: 3,
        disciplinaAtual: "Desing focado no usuário"
}

console.log(typeof nulo);
console.log(typeof indefinido);
console.log(typeof anoFormatura);
console.log(typeof minhaBio);
console.log(typeof tituloProfissonal);
console.log(typeof NOME);
console.log(typeof curso);

document.getElementById("meuNome").innerText = NOME;
document.getElementById("tituloProfissonal").innerText = tituloProfissonal;
document.getElementById("minhaBio").innerText = minhaBio;
document.getElementById("anoFormatura").innerText = "Ano de Formatura: " + anoFormatura