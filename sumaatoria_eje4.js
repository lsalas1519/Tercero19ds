//Simple

let k=3;
let n=8;
let sum=0;
let elev=0;
for(let i=1;i<=n;i++){
   elev=Math.pow(i,k);
   sum=sum+elev;
}
console.log("Resultado de la sumatoria: "+sum);

//Con formula

let k2=3;
let n2=8;
let result=0;
let process=0;

process=Math.pow(n2,k2+1);
result=process/(k2+1);

console.log("Resultado con la formula " + result);