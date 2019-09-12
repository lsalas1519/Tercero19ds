//prove that e ~ 2.7182

let result=0;
let fact = 0;
let process = 0;

function factorial (n) {
	let total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
} 

function sumador(){
    for(let i=0;i<=10;i++){
        fact=factorial(i);
        process=1/fact;
        result=result+process;
    }
    return result;
}

//Testing

sumador();