let array=[50,30,23,20,4];
let j=0;
let array2=[];

function orden(array){
for (let i=0;i<array.length;i++){

    for(let k=0;k<array.length-1;k++){

    if (array[k]>array[k+1]){
       j=array[k];
       array2[k]=array[k+1]
       array2[k+1]= j;  
    }

  }
}
return array2;
}

let array1 = [1, 2, 3, 4, 5];
let array2 = [2, 10, 43, 12, 20];

function Sorted(Myarray) {
    let result;
    for (var i = 0; i < Myarray.length; i++) {
        for (let k = i + 1; k < Myarray.length - 1; k++) {
            if (Myarray[i] >= Myarray[k]) {
                result = "La cadena esta ordenada";
            } else {
                result = "La cadena no esta ordenada";
                break;
            }
        }
    }

    return result;
}

//testing
console.log(Sorted(array1));
console.log(Sorted(array2));

/*
let array1 = [1, 2, 3, 40, 5];
for (let i = 0; i < array1.length-1; i++) {
        if (array1[i] <= array1[i + 1]) {
            result="La cadena esta ordenada";
        } else {
            result="La cadena no esta ordenada";
            break;
            
        }
    }
    console.log(result);
*/