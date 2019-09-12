let x=2;
let fact=0;
let result=0;
let process=0;
let cont = 0;

function factorial (n) {
	let total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
} 

function sumador(){
    for(let i=0;i<=10;i+=2){
     fact=factorial(i);
     process=Math.pow(x,i);
     process=process/fact;
     cont++;
        if (cont %2 == 0){
            result -= process;
        } else {
            result += process;
        }
    }
    return result;
}

//TESTING

sumador();