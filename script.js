let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
  console.log("calculando");

  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;
  let carne = carnePP(duracao);
  let cerveja = cervejaPP(duracao);
  let refri = refriPP(duracao);

  let qtdTotalCarne = carne * adultos + (carne / 2 * criancas);
  let qtdTotalCerveja = cerveja * adultos;
  let qtdTotalRefri= refri * adultos + (refri / 2 * criancas);
  
  resultado.innerHTML = `<p>${qtdTotalCarne / 1000} Kg de Carne</p>`
  resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} Latas de Cerveja</p>`
  resultado.innerHTML += `<p>${Math.ceil(qtdTotalRefri / 2000)} Garrafas de Refrigerante</p>`

}

function carnePP(duracao){
  if(duracao >= 6)
    return 650;
  else  
    return 400;
}

function cervejaPP(duracao){
  if(duracao >= 6)
    return 2000;
  else  
    return 1200;
}

function refriPP(duracao){
  if(duracao >= 6)
    return 1000;
  else  
    return 700;
}