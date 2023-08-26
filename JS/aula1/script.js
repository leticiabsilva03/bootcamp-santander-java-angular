alert("Pronto para aprender JavaScript!")

// tipos primitivos

// boolean
var vOuF = false;
console.log(vOuF);
console.log(typeof(vOuF)); 

// number
var numeroQualquer = 1;
console.log(numeroQualquer);
console.log(typeof(numeroQualquer));

// string
var nome = 'leticia';
console.log(nome);
console.log(typeof(nome));

// Exemplo

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal(){
  let escopoLocalInterno = 'Local';
  console.log(escopoLocalInterno);
}

escopoLocal();

// Comparação

var compar = '0' == 0
console.log(compar); 

// Comparação idêntica

var comparIdent = '0' === 0
console.log(comparIdent);

// Operadores aritméticos

// adição
var adicao = 1+1;
console.log(adicao);

// subtração
var subtr = 3-1;
console.log(subtr);

// multiplicação
var mult = 4*8;
console.log(mult);

// divisão real
var divReal = 6 / 2;
console.log(divReal);

// divisão inteira
var divInteira = 5 % 2;
console.log(divInteira);

// potenciação
var potenciacao = 2 ** 10;
console.log(potenciacao);

// Operadores relacionais

var maiorQue = 5 > 2;
console.log(maiorQue);

var menorQue = 5 < 2;
console.log(menorQue);

var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

var menorOuIgual = 5<= 2;
console.log(menorOuIgual);

// Operadores lógicos

var e = true && false;
console.log(e);

var ou = true || false;
console.log(ou);

var nao = !true;
console.log(nao);



