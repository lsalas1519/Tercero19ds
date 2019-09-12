//Lineal, O(n).
//Reduce fracciones en su minima expresion
function GCD (a,b){
    var rest=0;
    while (a%b!=0){
        rest= a%b;
        a=b;
        b=rest;
    }
    return b;
}

//Testing

var aux= GCD(34,12)
console.log(aux);