/*acrescentando função de apagar o resultado */
var verifica = "não";

function apagaResultado() {
  verifica = "sim";
}

//função que faz os números aparecerem na tela//
function insert(num) {
  if (verifica === "sim") {
    if (num != "+" && num != "-" && num != "*" && num != "/" && num != 3.14) {
      /* ver se é numero */
      document.getElementById("input").innerHTML = "";
    }
    verifica = "não";
  }

  var numero = document.getElementById("input").innerHTML;
  document.getElementById("input").innerHTML = numero + num;
  //inner.HTML->comando que imprime os numeros selecionados dentro da div 'input'//
}

//limpa a caixa//
function limparInput() {
  document.getElementById("input").innerHTML = "";
}

//tira um valor ou sinal digitado na caixa//
function back() {
  var resultado = document.getElementById("input").innerHTML;
  document.getElementById("input").innerHTML = resultado.substring(
    0,
    resultado.length - 1
  );
}

//resultado pelo botão =//
function calcular() {
  var resultado = document.getElementById("input").innerHTML;

  if (resultado) {
    document.getElementById("input").innerHTML = eval(resultado);
  }
}

//////////////// JAVASCRIPT DA CALCULADORA NORMAL

/*acrescentando função de apagar o resultado */
var verificaCient = "não";

function apagaResultadoCient() {
  verificaCient = "sim";
}

//função que faz os números aparecerem na tela//
function insertCient(num) {
  if (verificaCient === "sim") {
    if (num != "+" && num != "-" && num != "*" && num != "/") {
      /* ver se é numero */
      document.getElementById("inputCient").innerHTML = "";
    }
    verificaCient = "não";
  }
  var numeroCient = document.getElementById("inputCient").innerHTML;
  document.getElementById("inputCient").innerHTML = numeroCient + num;
  //inner.HTML->comando que imprime os numeros selecionados dentro da div 'input'// 
}

//limpa a caixa//
function limparInputCient() {
  document.getElementById("inputCient").innerHTML = "";
  verificaCient ="sim"
}

//tira um valor ou sinal digitado na caixa//
function backCient() {
  var resultadoCient = document.getElementById("inputCient").innerHTML;
  document.getElementById("inputCient").innerHTML = resultadoCient.substring(
    0,
    resultadoCient.length - 1
  );
}

//resultado pelo botão =//
function calcularCient() {
  var resultadoCient = document.getElementById("inputCient").innerHTML;
  console.log(resultadoCient);
  if (resultadoCient) {
    document.getElementById("inputCient").innerHTML = eval(resultadoCient);
  }
}
//numero elevado a 2//

function elevadoCient(valor) {
  var numeroCient = document.getElementById("inputCient").innerHTML;

  document.getElementById("inputCient").innerHTML = Math.pow(numeroCient, valor);
}
//numero elevado a 3//

// function elevadoCient() {
//   var numeroCient = document.getElementById("inputCient").innerHTML;
//   document.getElementById("inputCient").innerHTML = Math.pow(numeroCient, 3);
// }

//raiz quadrada de um numero N//
function raizCient() {
  var numeroCient = document.getElementById("inputCient").innerHTML;
  document.getElementById("inputCient").innerHTML = Math.sqrt(
    numeroCient
  ).toFixed(2);
}

//pi

function piCient() {
  var valorCient = document.getElementById("inputCient").innerHTML
  if (document.getElementById("inputCient").innerHTML == "") {
    document.getElementById("inputCient").innerHTML = Math.PI.toFixed(5);
  }else if (isNaN(valorCient)) {   
    document.getElementById("inputCient").innerHTML = valorCient + Math.PI.toFixed(5);
  } else {
    document.getElementById("inputCient").innerHTML = eval(valorCient *Math.PI.toFixed(5))
  }
 
}

function adicionaDisplay() {
  let someCalculadora = document.getElementById("container"); // pegamos o container da calc normal
  let someCalculadoraCient = document.getElementById("containerCient"); // pegamos o container da calc cient

  someCalculadora.style.display = "block"; // adicionando display block para a id container da calc normal
  someCalculadoraCient.style.display = "none"; // adicionando display none para a id container da calc cient
}

function adicionaDisplayCient() {
  let someCalculadora = document.getElementById("container"); // pegamos o container da calc normal
  let someCalculadoraCient = document.getElementById("containerCient"); // pegamos o container da calc cient

  someCalculadora.style.display = "none"; // adicionando display block para a id container da calc normal
  someCalculadoraCient.style.display = "block"; // adicionando display none para a id container da calc cient
}
