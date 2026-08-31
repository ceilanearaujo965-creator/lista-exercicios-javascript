// ============================================
// INSTITUTO FEDERAL DO PIAUÍ - CAMPUS FLORIANO
// CURSO: Tecnologia em Análise e Desenvolvimento de Sistemas
// DISCIPLINA: Programação Orientada a Objetos
// PROFESSOR: Ronaldo Pires Borges
// ALUNA: Ceilane Maria
// Exercício 1: Atividade Prática de Fundamentos de JavaScript
// ============================================

// QUESTÃO 1 - Cartão de Visitas Simples

var nome = 'Ceilane Maria';           //variáveis em commonjs
let profissao = "Auxiliar de Vendas"; //variáveis ES5/ES6 
const cidade = `Nazaré`;              //constantes

console.log(nome);
console.log(profissao);
console.log(cidade);

console.log("Sou " + nome + ", moro em " + cidade + " e sou " + profissao + ".");

// ============================================

// QUESTÃO 2 - Aspas sem Conflito de Sintaxe

console.log('Ele disse: "Estou aprendendo JavaScript!"');
console.log("It's time to code.");
console.log(`No Node.js podemos usar 'aspas simples', "aspas duplas" e até mesmo crases no texto.`);

// ============================================

// QUESTÃO 3 - Template Strings / Interpolação

const produto = "Mouse Gamer";
const preco = 200.00;
const desconto = 20.00;
let precoFinal = preco - desconto;

console.log(`Produto: ${produto} | Preço Original: R$ ${preco} | Desconto: R$ ${desconto} | Total: R$ ${preco - desconto}`);
// Desafio: o cálculo foi feito diretamente dentro da interpolação ${preco - desconto}, sem usar precoFinal

// ============================================

// QUESTÃO 4 - Imutabilidade de const vs Mutabilidade de let

const TAXA_FIXA = 0.10;
let saldo = 800;

saldo = 950;
console.log(saldo);

// TAXA_FIXA = 0.20; // TypeError: Assignment to constant variable.
/*
    POR QUE DEU ERRO NA LINHA ACIMA?
    const não permite reatribuição de valor, pois é uma constante.
    let permite reatribuir um valor; const não permite.
*/

// ============================================

// QUESTÃO 5 - Escopo de Bloco (let vs var)

{
    var vazou = "Consigo ser acessado fora do bloco?";
    let protegido = "Eu fico preso aqui dentro!";
};

console.log(vazou);
// console.log(protegido); // ReferenceError: protegido is not defined

// Por que var vazou e let não?
// Porque var não respeita o escopo de bloco da mesma forma que let.
// var → consegue "escapar" do bloco 🏃
// let → fica dentro do bloco 🔒

// ============================================

// QUESTÃO 6 - Redeclaração de Variáveis

var nome = "Joana";
var nome = "Pedro"; // var permite redeclaração sem erro
console.log(nome);

let sobrenome = "Oliveira"
// let sobrenome = "Ferreira"; // ERRO: SyntaxError: Identifier 'sobrenome' has already been declared

// O que o Node.js reporta ao tentar redeclarar uma variável com let?
// O Node.js retorna um SyntaxError informando que o identificador 
// 'sobrenome' já foi declarado, impedindo a execução do código.

// Por que let e const são boas práticas modernas em relação ao var?
// var permite redeclaração e vazamento de escopo, causando bugs difíceis de identificar.
// let e const evitam redeclaração e respeitam o escopo de bloco, 
// tornando o código mais seguro e previsível.

// QUESTÃO 7 - Operações Matemáticas Fundamentais

let num1 = 25;
let num2 = 6;

let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;
let restodivisao = num1 % num2;
let exponenciacao = num1 ** num2;

console.log(`Soma: ${soma} | Subtração: ${subtracao} | Multiplicação: ${multiplicacao} | Divisão: ${divisao} | Resto da Divisão: ${restodivisao} | Exponenciação: ${exponenciacao}`);

// ============================================

// QUESTÃO 8 - Precedência de Operadores

let nota1 = 9.0;
let nota2 = 7.0;
let nota3 = 8.5;

let mediaErrada = nota1 + nota2 + nota3 / 3;
let mediaCorreta = (nota1 + nota2 + nota3) / 3;

console.log(`Média Errada: ${mediaErrada} | Média Correta: ${mediaCorreta}`);

// A divisão tem prioridade sobre a soma.
// Os parênteses forçam a soma das notas primeiro,
// garantindo o cálculo correto da média aritmética.

// ============================================

// QUESTÃO 9 - Extrato Bancário Acumulativo

let saldoConta = 1500;

saldoConta += 3000;  // pagamento de salário
console.log(`Transação 1: Saldo Atual R$ ${saldoConta}`);

saldoConta -= 250;   // conta de água
console.log(`Transação 2: Saldo Atual R$ ${saldoConta}`);

saldoConta -= 600;   // pagamento do aluguel
console.log(`Transação 3: Saldo Atual R$ ${saldoConta}`);

saldoConta *= 1.05;  // rendimento de investimentos
console.log(`Transação 4: Saldo Atual R$ ${saldoConta}`);

saldoConta /= 2;     // divisão em 2 contas bancárias
console.log(`Transação 5: Saldo Atual R$ ${saldoConta}`);

console.log(`Transação realizada. Saldo atual: R$ ${saldoConta}`);

// ============================================

// QUESTÃO 10 - Pontuação de Jogo

let pontos = 0;
const MULTIPLICADOR = 2;

// Fase 1 — derrotou um inimigo comum
pontos += 15;
console.log(`Fase 1: ${pontos}`);

// Fase 2 — coletou um item simples
pontos++;
console.log(`Fase 2: ${pontos}`);

// Fase 3 — recebeu penalidade por dano
pontos -= 8;
console.log(`Fase 3: ${pontos}`);

// Fase 4 — ativou poder especial que dobra a pontuação
pontos *= MULTIPLICADOR;
console.log(`Fase 4: ${pontos}`);

console.log(`RESULTADO FINAL DO JOGO: Pontuação Final: ${pontos} | Status: Jogador Vitorioso!`);

// ============================================

// QUESTÃO 11 - Construção de Log de Texto Acumulativo

let logSistema = "";

logSistema += "[LOG DE EXECUÇÃO - SISTEMA]\n";
logSistema += "> [INFO] Carregando configurações do sistema...\n";
logSistema += "> [SUCCESS] Conexão com servidor estabelecida.\n";
logSistema += "> [WARN] Uso de CPU em 80%.\n";
logSistema += "> [END] Execução concluída com sucesso.";

console.log(logSistema);

// O \n é um caractere de escape que representa uma quebra de linha,
// fazendo cada mensagem aparecer em uma linha separada no console.
