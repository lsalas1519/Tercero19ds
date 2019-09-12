let x = 2;
let sum = 0;
let num = 0;
let den = 1;
let op = 0;
let cont = 0;

function factorial (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
} 

function sumador(){
    for(let i = 0; i <= 10; i+=2){
        num = Math.pow(x,i);
        den = factorial(i);
        op = num/den;
        cont++;
        if (cont %2 == 0){
            sum -= op;
        } else {
            sum += op;
        }
    }
    return sum;
}
sumador();