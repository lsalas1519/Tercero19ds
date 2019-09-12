//Lineal, O(n).

function GCD(a, b) {
    let rest = 0;
    while (a % b != 0) {
        rest = a % b;
        a = b;
        b = rest;
    }
    return b;
}

function LCM(a, b) {
    return (a / GCD(a, b)) * b;
}

//TESTING
var aux = LCM(34, 12)
console.log(aux);