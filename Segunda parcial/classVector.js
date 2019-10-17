class Vector {
    constructor(a) {
        let array = new Array(a);
        for (let i = 0; i < a; i++) {
            array[i] = 0;
        }
        this.array = array;
    }



    getData() { //lo que se mandó al constructor
        return this.array;
    }




    suma(b) {
        let operacion = [];
        if (b.length == this.array.length) {
            for (let i = 0; i < this.array.length; i++) {
                operacion[i] = this.array[i] + b[i];
            }
            return operacion;
        } else {
            return "Error,no se puede efectuar el cálculo"
        }
    }



    subt(b) {
        let operacion = [];
        if (b.length == this.array.length) {
            for (let i = 0; i < this.array.length; i++) {
                operacion[i] = this.array[i] - b[i];
            }
            return operacion;
        } else {
            return "Error,no se puede efectuar el cálculo"
        }
    }

    


    multi(b) {
        let operacion = [];
        if (b.length == this.array.length) {
            for (let i = 0; i < this.array.length; i++) {
                operacion[i] = this.array[i] * b[i];
            }
            return operacion;
        } else {
            return "Error,no se puede efectuar el cálculo"
        }
    }
}

let prueba1 = new Vector(5); //[0,0,0,0,0]
console.log(prueba1.getData());
console.log(prueba1.suma([1, 1, 1, 1, 1])); //[1, 1, 1, 1, 1]
console.log(prueba1.suma([1, 1, 1, 1, 1, 1])); //Error
console.log(prueba1.subt([2, 2, 2, 2, 2])); //[-2, -2, -2, -2, -2]
console.log(prueba1.multi([2, 2, 2, 2, 2])); //[0, 0, 0, 0, 0]
