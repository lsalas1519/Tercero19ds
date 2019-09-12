//Lineal, O(n).

function MCD(a, b) {
    var iaux; //auxiliar
    a = Math.abs(a); //tomamos valor absoluto
    b = Math.abs(b);
    var i1 = Math.max(a, b); //i1 = el más grande
    var i2 = Math.min(a, b); //i2 = el más pequeño
  
    do {
      iaux = i2; //guardar divisor
      i2 = i1 % i2; //resto pasa a divisor
      i1 = iaux; //divisor pasa a dividendo
    } while (i2 !== 0);
    return i1; //ultimo resto no nulo
  }
  
  function MCM( a,  b)
  {
      return (a / MCD(a, b)) * b;
  }
