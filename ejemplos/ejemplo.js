//oraculo

function constant(n){
    console.log(n);
}

//lineal

function lienar(n){
    for(var i=0;i<n; i++){
        console.log(i);
    }
}

//logaritmica

function logarithmic3(n){
    for(var i=0; i<n; i*3)
}

//cuadratico (ciclo dentro de otro ciclo)

function quadratic(n){
    for(var i=0; i<n;i++){
        console.log(i);
        for(var j=i;j<n;j++){
            console.log('->',j);
        }
    }
}

// cubica

function cubic(n){
    for(var i=0; i<n;i++){
        console.log(i);
        for(var j=i; j<n;j++){
            console.log('->',j);
            for (var k=j;k<n;k++){
                console.log('=>',k);
            }
        }
    }
}