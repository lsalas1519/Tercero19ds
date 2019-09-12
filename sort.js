let array1 = [10, 20, 30, 40, 50];
let array2 = [1, 10, 56, 19, 20];

function sort(arreglo) {
    let res;

    for (let k = 0; k < arreglo.length - 1; k++) {
        if (arreglo[k] <= arreglo[k + 1]) {
            res = "La cadena esta ordenada";
        } else {
            res = "La cadena no esta ordenada";
            break;
        }
    }


    return res;
}

//testing
console.log(sort(array1));
console.log(sort(array2));