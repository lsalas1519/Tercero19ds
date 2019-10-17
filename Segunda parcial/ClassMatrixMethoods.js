class Matriz {
    constructor(r, c) {
        this.r = r;
        this.c = c;
        this.array=[];
          
    }
    InicializeZero(r, c) {
        this.array = new Array(this.r);
        for (let i = 0; i < this.r; i++) {
            this.array[i] = new Array(this.c);
            for (let j = 0; j < this.c; j++) {
                this.array[i][j] = 0;
            }
        }
        return this.array;
    }
    MatrixIdentiti(){
        let  matrix = new Array(this.r);
        for (let i = 0; i < this.r; i++) {
            matrix[i] = new Array(this.c);
            for (let j = 0; j < this.c; j++) {
                matrix[i][j] = 0;
            }
        }
        for(let i=0;i<matrix.length;i++){
            matrix[i][i]=1;
        }
        return matrix;

    }
    random(r, c) {
        this.array = new Array(this.r);
        for (let i = 0; i < this.r; i++) {
            this.array[i] = new Array(this.c);
            for (let j = 0; j < this.c; j++) {
                this.array[i][j] = Math.random();
            }
        }
        return this.array;
    }
    getRow(r) {
        return this.array[r - 1];
    }
    getCol(c) {
        let newArray = [];
        for (let i = 0; i < this.array.length; i++) {
            newArray.push(this.array[i][c - 1]);
        }
        return newArray;
    }

    esCuadrada(){
        if(this.r==this.c){
            return true;
        }else{
            return false;
        }
    }

    IsIdentity(){
        if(this.r==this.c){
            if(this.matriz1==this.MatrixIdentiti()){
                return true;
            } else{
                return false;
            }
        }else{
            return false;
        }
        
    }
    transpuesta(){
        let  transpuesta1 = new Array(this.r);
        for (let i = 0; i < this.r; i++) {
            transpuesta1[i] = new Array(this.c);
            for (let j = 0; j < this.c; j++) {
                transpuesta1[i][j] = 0;
            }
        }
        for(let i=0;i<transpuesta1.length;i++){
            transpuesta1[i][i]=1;
        }
        return transpuesta1;
    }
    IsSymetric(){
        //que sea igual a su traspuesta
        let fv = true;
        if (this.esCuadrada(this.array)) {
            for (let i = 0; i < this.array.length; i++) {
                for (let j = 0; j < this.array.length; j++) {
                    if (this.array[i][j] != this.array[j][i]) {
                        fv = false;
                        i = this.array.length;
                        break;
                    }
                }
            }
        } else {
            fv = false;
        }
        return fv;

    }
}

matriz1 = new Matriz(3, 3);
console.log(matriz1.InicializeZero());
console.log(matriz1.random());
console.log(matriz1.getRow(3));
console.log(matriz1.getCol(1));
console.log(matriz1.esCuadrada());
console.log(matriz1.IsIdentity());
console.log(matriz1.IsSymetric());