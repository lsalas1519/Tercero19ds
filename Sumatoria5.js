//Simple

let a=4;
let n=6;
let sum=0;
let elev=0;
for(let i=0;i<=n;i++){
   elev=Math.pow(a,i);
   sum=sum+elev;
}
console.log("Resultado de la sumatoria: "+sum);

//Con formula

let a2=4;
let n2=6;
let process=0;
let result=0;

process=Math.pow(a2,n2+1);
result=(process-1)/(a2-1);
console.log("Resultado con la formula "+result);

//Sumatoria mientras a=2

let a3=2;
let n3=6;
let process2=0;
let result2=0;

process2=Math.pow(a3,n3+1);
result2=(process2-1)/(a3-1);
console.log("Resultado de la sumatoria con a=2 "+result2);