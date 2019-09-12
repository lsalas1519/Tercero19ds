let array1 = [1, 2, 3, 3, 5];
let array2 = [2, 10, 43, 12, 20];

function sort(arreglo) {
    let result;

    for (let k = 0; k < arreglo.length - 1; k++) {
        if (arreglo[k] <= arreglo[k + 1]) {
            result = "La cadena esta ordenada";
        } else {
            result = "La cadena no esta ordenada";
            break;
        }
    }


    return result;
}

//testing
console.log(sort(array1));
console.log(sort(array2));