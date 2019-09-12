let sum = 0;
let den = 1;
let op = 0;

function factorial (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
} 

function sumador(){
    for(let i = 0; i <= 10; i++){
        den = factorial(i);
        op = 1/den;
        sum = sum + op;
    }
    return sum;
}
sumador();