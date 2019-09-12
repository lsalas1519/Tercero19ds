var result=0;
var num=parseInt(prompt('Ingresa un numero',0));
while (num <= 0 || isNaN(num)) {
  num = parseInt(prompt('Ingresa un numero correctamente', 0));
}

//cadena
for(var i=1;i<11;++i){
  result=Math.pow(i,num);
  console.log(+i+' elevado a '+ num + ' = '+result);
 }