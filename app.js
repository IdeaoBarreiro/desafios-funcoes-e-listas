//Desafios 1.

//2. Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let desafio = document.querySelector('h1');
desafio.innerHTML = 'Hora do Desafio';

//3. Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function botaoClicado() {
    console.log('O botão foi clicado!');
}

//4. Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function alertaMensagem() {
    alert('Eu amo JS!');
}

//5. Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function naCidade() {
    let cidade = prompt('Digite o nome da sua cidade:');
    alert(`Estive em ${cidade} e lembrei de você.`)
}

//6. Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.
function soma() {
    let num1 = parseInt(prompt('Digite o primeiro número:'));
    let num2 = parseInt(prompt('Digite o segundo número:'));
    soma = num1 + num2;
    alert(`A soma de ${num1} e ${num2} é igual a ${soma}.`);
}


//Desafios 2.
//1. Criar uma função que exibe "Olá, mundo!" no console.
function saudacao() {
    console.log('Olá, mundo!');
}

//2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
let nome = prompt('Digite seu nome:');
function saudacao2(name) {
    console.log(`Olá, ${name}!`);
}
let olaFulano = saudacao2(nome);

//3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
let n = parseInt(prompt('Digite um número:'))
function numeroDobrado(num) {
    return (num * 2);
}
let dobro  = numeroDobrado(n);
alert(`Esse número dobrado é ${dobro}.`);

//4. Criar uma função que recebe três números como parâmetros e retorna a média deles.
let numero1 = parseInt(prompt('Digite o primeiro número:'));
let numero2 = parseInt(prompt('Digite o segundo número:'));
let numero3 = parseInt(prompt('Digite o terceiro número:'));
function media(a,b,c) {
    return (a + b + c) / 3;
}
let mediaFinal = media(numero1, numero2, numero3);
alert(`Sua média final foi ${mediaTotal}.`);

//5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
let n1 = parseInt(prompt('Digite um número:'));
let n2 = parseInt(prompt('Digite um número:'));
function verificarMaior(a, b) {
    if(a > b) {
        return a;
    } else {
        return b;
    }
}
let qualOMaior = verificarMaior(n1, n2);
alert(`O maior entre ${n1} e ${n2} é ${qualOMaior}.`);

//6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
let numero = parseInt(prompt('Digite um número para ser multiplicado por ele mesmo:'));
function multiplicacao(a) {
    return (a * a);
}
let resultado = multiplicacao(numero);
alert(`O valor de ${numero} multiplicado por ele mesmo é ${resultado}.`);


//Desafios 3.
//1. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
let peso = parseInt(prompt('Digite seu peso, em quilogramas:'));
let altura = parseFloat(prompt('Digite sua altura:'));
function calculoIMC(p, a) {
    return (p / (a*a));
}
let imc = calculoIMC(peso, altura);
alert(`Seu indíce de massa corporal é: ${imc.toFixed(2)}.`);

//2. Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }

    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
    return fatorial;
  }
  let numero = parseInt(prompt('Digite um número para calcular o seu fatorial:'));
  let resultado = calcularFatorial(numero);
  alert(`O fatorial de ${numero} é ${resultado}.`);

//3. Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
let valor = parseFloat(prompt('Digite um valor para a conversão:'))
function conversaoParaReal(dolar) {
    return dolar * 4.80;
}
let conversao = conversaoParaReal(valor);
alert(`O valor de $${valor} convertivo em reais é igual a R$${conversao.toFixed(2)}.`);

//4. Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
let altura = parseFloat(prompt('Digite a altura:'));
let largura = parseFloat(prompt('Digite a largura:'));
function calcularAreaPerimetro(alt, larg) {
    let area = alt * larg;
    let perimetro = 2 * (alt + larg);

    alert(`A área da sala equivale a ${area.toFixed(1)} metros quadrados.`);
    alert(`O perímetro da sala equivale a ${perimetro.toFixed(1)} metros.`);
}
calcularAreaPerimetro(altura, largura);

//5. Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
let raio = parseInt(prompt('Digite a área:'));
let pi = 3.14;
function calcularAreaPerimetroCircular(r) {
    let areaDeUmCirculo = pi * (r^2);
    let perimetroDeUmCirculo = 2 * pi * r;

    alert(`A área dessa sala circular corresponde a ${areaDeUmCirculo.toFixed(2)} metros quadrados.`);
    alert(`O perímetro dessa sala circular corresponde a ${perimetroDeUmCirculo.toFixed(2)} metros.`)
}
calcularAreaPerimetroCircular(raio);

//6. Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
let numero = parseInt(prompt('Digite um número para fazer a tabuada de multiplicação:'));
function tabuadaMultiplicacao(num) {
    let contador = 1;
    while(contador < 11) {
        let resultado = num * contador;
        alert(`${contador} x ${num} = ${resultado}`);
        contador++;
    }
}
tabuadaMultiplicacao(numero);


//desafios 4.
//1. Crie uma lista vazia, com o nome listaGenerica.
let listaGenerica = [];

//2. Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

//3. Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');

//4. Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
let listaDeNomes = ['Ideao', 'Matheus', 'Vitor'];
console.log(listaDeNomes[0]);

//5. Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
let listaDeNomes = ['Ideao', 'Matheus', 'Vitor'];
console.log(listaDeNomes[2]);

//6. Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
let listaDeNomes = ['Ideao', 'Matheus', 'Vitor'];
console.log(listaDeNomes[1]);