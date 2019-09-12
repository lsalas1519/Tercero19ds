//n!
function factorial (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
} 

console.log(factorial(4));

//P(n,r) = n! / (n-r)!

let n=5;
let r=2;
let result=0;
let fact=0;
let fact2=0;

fact=factorial(n);
fact2=factorial(n-r);
result=fact/fact2;

console.log(result);

//C(n,r)  = P(n,r) / r! 

let n2=5;
let r2=2;
let result2=0;
let fact3=0;

fact3=factorial(r);
result2=result/fact3;
console.log(result2);

// catalan (2n 
//           r/(n+1))

let n3=8;
let factorial=0;
let factorial1=0;
let factorial2=0;
let resutado=0;

factorial= factorial(2*n3);
factorial1=factorial(n3+1);
factorial2=factorial(n3);
resultado=factorial/(factorial1*factorial2);
console.log("El resultado de el numero catalan "+n3+" es: "+resultado);


function factorial (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
} 
let n3=prompt("Ingrese el numero que desea averiguar");
let factorial0=0;
let factorial1=0;
let factorial2=0;
let resutado=0;

factorial0= parseInt(factorial(2*n3));
factorial1= parseInt(factorial(n3+1));
factorial2=parseInt(factorial(n3));
resultado=parseInt(factorial0/(factorial1*factorial2));
console.log("El resultado de el numero catalan "+n3+" es: "+resultado);