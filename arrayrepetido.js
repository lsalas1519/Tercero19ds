let array1 = [2, 2, 3, 4, 5, 5, 3, 8];
let array2 = [1, 3, 5, 7];

function repeat(myArray) {
    let count = 0;
    let array = [];
    for (let i = 0; i < myArray.length - 1; i++) {
        for (let k = i+1; k < myArray.length; k++) {
            if (myArray[i] == myArray[k]) {
                count++;
                array.push(myArray[i]);
            }
        }
    }
    if (count >= 1) {
        return "Si hay repetidos: " + count + " y son: " + array;
    } else {
        return "No hay repetidos";
    }
}

console.log(repeat(array1));
console.log(repeat(array2));