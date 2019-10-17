let node1 ={
    data:"Nodo1",
    next:null,
    prev:null
}

let node2 ={
    data:"Nodo2",
    next:null,
    prev:null
}

let node3 ={
    data:"Nodo3",
    next:null,
    prev:null
}
node1.next=node2
node2.next=node3
node3.prev=node2
node2.prev=node1
//Siguiente
let siguiente=node1;

do{
    console.log(siguiente);
    siguiente=siguiente.next
}while (siguiente !=null)


//Stacks
let siguiente1=node3;

do{
    console.log(siguiente1);
    siguiente1=siguiente1.prev
}while (siguiente1 !=null)