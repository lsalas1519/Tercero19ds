function Many(x){
    var x = x.sort(function(a, b){return a-b});
    var iguales = 0;
    for(c1 = 0; c1 < x.length; c1++){
        if(x[c1]==x[c1+1]){
            for(c2 = c1+1; c2 < x.length; c2++){
                if(x[c1]==x[c2]) iguales++;
            }
        }
        c1= c1+iguales;

    }
    return iguales;
}
