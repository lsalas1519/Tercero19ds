class nodo{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}


class lista{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    InsertaCabeza(nodo){
        if(this.head != null){
            nodo.next = this.head
            this.head = nodo;
        }
        else{
            this.head = nodo;
            if(this.tail == null) this.tail = nodo;
        } 
        this.size ++;
    }

    insertTail(nodo){
        if(this.tail != null){
            (this.tail).next = nodo;
            this.tail = nodo;
        }
        else{
            this.tail = nodo;
            if(this.head == null) this.tail = nodo;
        } 
        this.size ++;
    }

    deleteHead(){
        let temp = this.head.next;
        this.head.next = null
        this.head = temp;
        this.size --;
    }

    deleteTail(){
        let temp = this.head;
        for(let c = this.size ; c > 2 ;c--){
            temp = (temp).next;
            
        }
        this.tail = temp;
        this.size --;
    }

    size(){
        return this.size;
    }

    cadena(x){
        if(x.next != null) return (x.data + ", " + this.cadena(x.next));
        else return x.data
        
    }

    toString(){
        return (this.head.data + ", " + this.cadena(this.head.next));
    }
}


let nodo1 = new nodo("1N");
let nodo2 = new nodo("2N");
let nodo3 = new nodo("3n");
let nodo4 = new nodo("4N");


let List = new lista;
List.InsertaCabeza(nodo3)
List.InsertaCabeza(nodo2)
List.InsertaCabeza(nodo1)
List.insertTail(nodo4)
List.toString();



