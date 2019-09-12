// Cuadratico, O(n)^2

let c = 100;
let numerosPrimos = [];

function primo(numero) {

  for (var i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return numero !== 1;
}


function impresion(num){
  let result=0;
  for (var j = 2; j < c; j++) {

    if (primo(j)) {
      numerosPrimos.push(j);
    }
  }
  result=numerosPrimos[num];
  return result;
}

//TESTING

let aux=parseInt(prompt('Ingresa un numero para optener su numero primo',0));
console.log("El "+ aux +"° numero primo es: "+impresion(aux-1));