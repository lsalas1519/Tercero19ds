let result=0;
let num=parseInt(prompt('Ingresa un numero',0));
while (num <= 0 || isNaN(num)) {
  num = parseInt(prompt('Ingresa un numero correctamente', 0));
}


for(let i=1;i<11;++i){
  result=Math.log(i) / Math.log(num) ;
  console.log('Log de '+i+' base '+ num + ' = '+result);
 }