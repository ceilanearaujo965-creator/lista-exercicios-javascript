// IFPI - FLORIANO 
//  NOME: CEILANE MARIA DE JESUS DE ARAÚJO SOUSA 
//  LISTA DE EXERCÍCIOS - POO 1 
//  PROFESSOR: RONALDO
//  11 QUESTÃO


var nome = 'Ceilane';           //variáveis em commonjs
let profissao = "Auxiliar de Vendas";    //variáveis ES5/ES6 
const cidade = `Nazaré`;      //constantes

console.log(nome);
console.log(profissao);
console.log(cidade);

console.log("Sou " + nome + ", moro em "+ cidade + " e sou "+ profissao +".");

//2Questao

console.log('Ele disse: "Estou aprendendo JavaScript!"');
console.log("it's time to code.");
console.log(`No Node.js podemos usar 'aspas simples', "aspas duplas" e até mesmo crases no texto.`);

//3Questao

const produto = "Teclado Mecanico";
const preco = 150.00;
const desconto = 15.00;
let precoFinal = preco - desconto;

///console.log(`Produto: ${produto} | Preço Original: R$ ${preco} | Desconto: R$ ${desconto} | Total: R$ ${precoFinal}`);
console.log(`Produto: ${produto} | Preço Original: R$ ${preco} | Desconto: R$ ${desconto} | Total: R$ ${preco - desconto}`);

//4Questao
const TAXA_FIXA = 0.10;
let saldo = 500;

saldo = 600;

console.log(saldo);

// TAXA_FIXA = 0.15;
/*
    POR QUE DEU ERRADA A LINHA 8?
*///let muda o valor, mas o const não muda, pois é uma constante.
///let permite reatribuir um valor; const não permite


//5 Questao
{ 
    var vazou = "Consigo ser acessado fora do bloco?";
    let protegido = "Eu fico preso aqui dentro!";
}; 
console.log(vazou); 
console.log(protegido);

//as chaves criam um bloco, Por quê?
//Porque var não respeita o escopo de bloco da mesma forma que let.
//É por isso que o nome da variável é vazou: ela foi criada dentro das chaves, mas continua acessível fora.
//var → consegue "escapar" do bloco 🏃‍♀️ let → fica dentro do bloco 🔒

//6 Questao
var nome = "Ana";
var nome = "Carlos";

console.log(nome);

let sobrenome = "Silva";
let sobrenome = "Sousa";

console.log(sobrenome);
//let nome = "Ana"; 
// nome = "Carlos"; 
// Isso funciona porque você não está criando outra variável. Apenas está mudando o valor da variável que já existe
//var → pode declarar novamente o mesmo nome let → não pode declarar novamente no mesmo escopo
//var permite redeclaração; let não permite redeclaração no mesmo escopo. 💖

///7 Questao

let num1 = 18;
let num2 = 4;

let soma = num1 + num2;
console.log(soma);

let subtracao = num1 - num2;
console.log(subtracao);

let multiplicacao = num1 * num2;
console.log(multiplicacao);

let divisao = num1 / num2;
console.log(divisao);

let restodivisao = num1 % num2;
console.log(restodivisao);

let exponenciacao = num1 ** num2;
console.log(exponenciacao);

console.log(`Soma: ${soma} | Subtração: ${subtracao} | Multiplicação: ${multiplicacao} | Divisão: ${divisao} | Resto da Divisão: ${restodivisao} | Exponenciação: ${exponenciacao}`);


//8 Questao
let nota1= 7.5;
let nota2 = 8.0;
let nota3 = 6.5;

let mediaErrada = nota1 + nota2 + nota3 / 3;
let mediaCorreta = (nota1 + nota2 + nota3) / 3;
console.log(`Média Errada: ${mediaErrada} | Média Correta: ${mediaCorreta}`);
//A divisão tem prioridade sobre a soma. Os parênteses fazem a soma das notas primeiro, garantindo o cálculo correto da média.


//9 Questao
let saldoConta= 1000;

saldoConta += 2500; //pagamento de salario
console.log(` Transacao 1 : Saldo Atual R$ ${saldoConta}`);

saldoConta -= 180; //conta energia
console.log(` Transacao 2 : Saldo Atual R$ ${saldoConta}`);

saldoConta -= 420; //pagamento do condominio
console.log(` Transacao 3 : Saldo Atual R$ ${saldoConta}`);

saldoConta *= 1.05; //rendimento 
console.log(` Transacao 4 : Saldo Atual R$ ${saldoConta}`);

saldoConta /= 2; //2 contas bancarias
console.log(` Transacao 5 : Saldo Atual R$ ${saldoConta}`);

console.log(`Transacao realizada saldo atual: R$ ${saldoConta}`);

//10 Questao
let pontos = 0;
const multiplicador = 2;

       //Fase 1 //derrotou o inimigo
pontos += 10;
console.log(`Fase 1: ${pontos}`);

     //Fase 2 //coletou um item simples
pontos ++;
console.log(`Fase 2: ${pontos}`);

     //fase 3 //recebeu penalidade
pontos -= 5; //dano
console.log(`Fase 3: ${pontos}`);

     //fase 4 //ativou poder especial
pontos *= multiplicador; //dobra
console.log(`Fase 4: ${pontos}`);

console.log(`RESULTADO FINAL DO JOGO: Pontuação Final: ${pontos} | Status: Jogador Vitorioso!`)

//11 questao
let logSistema = "";

//utilizar += para add
logSistema += "[LOG DE EXECUÇÃO - SISTEMA]\n";
logSistema += "> [INFO] Inicializando módulos...\n";
logSistema += "> [SUCCESS] Conexão com banco established.\n";
logSistema += "> [WARN] Memória em 75% de uso.\n";
logSistema += "> [END] Processo finalizado.";

console.log(logSistema);

//a funcao do \n é pular/quebrar de linha e fica uma forma organizada  