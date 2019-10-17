class Calendar {
    printCalendar(m, y) {
        let diasMes = 0;
        let cont = 1;
        let inicioMes = 0;


        //matriz en ceros
        let calendar = new Array(5);

        for (let i = 0; i < 5; i++) {
            calendar[i] = new Array(7);
            for (let j = 0; j < 7; j++) {
                calendar[i][j] = 0;
            }
        }
          //Obtengo x del primero dia del año
          let x = this.primerDia(y);
        //Defino numero de dias y el inicio del mes dependiendo del mes y de si es año bisiesto o no
        if (this.aniobiciesto(y)) {
            if (m == 2) {
                diasMes = 29;
                inicioMes = (x + 31)%7;
            }
        } else {
            switch (m) {
                case 1:
                    diasMes = 31;
                    inicioMes = x;
                    break;
                case 2:
                    diasMes = 28;
                    inicioMes = (x + 31)%7;
                    break;
                case 3:
                    diasMes = 31;
                    inicioMes = (x + 59)%7;
                    break;
                case 4:
                    diasMes = 30;
                    inicioMes = (x + 90)%7;
                    break;
                case 5:
                    diasMes = 31;
                    inicioMes = (x + 120)%7;
                    break;
                case 6:
                    diasMes = 30;
                    inicioMes = (x + 151)%7;
                    break;
                case 7:
                    diasMes = 31; 
                    inicioMes = (x + 181)%7;
                    break;
                case 8:
                    diasMes = 31; 
                    inicioMes = (x + 212)%7;
                    break;
                case 9:
                    diasMes = 30; 
                    inicioMes = (x + 243)%7;
                    break;
                case 10:
                    diasMes = 31; 
                    inicioMes = (x + 273)%7;
                    break;
                case 11:
                    diasMes = 30;//
                    inicioMes = (x + 304)%7;
                    break;
                case 12:
                    diasMes = 31;
                    inicioMes = (x + 334)%7;
                    break;
                default:
                    diasMes = "Error"
                    break;
            }
        }
      
        for (let i = 0; i < 5; i++) {
            if (i == 0) {
                for (let j = inicioMes; j < 7; j++) {
                    calendar[i][j] = cont;
                    cont++
                }
            } else {
                for (let j = 0; j < 7; j++) {
                    //Llenado de la matriz con un contador del 1 hasta el # de días del mes
                    if (cont <= diasMes) {
                        calendar[i][j] = cont;
                        cont++;
                    }
                }
            }

        }
        return calendar;
    }
    aniobiciesto(y) {
        return ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0) ? true : false;
    }
    todayPlus(d, n) {
        switch (d) {
            case "Lunes":
            case "lunes":
                n += 1;
                break;
            case "Martes":
            case "martes":
                n += 2;
                break;
            case "Miercoles":
            case "miercoles":
                n += 3;
                break;
            case "Jueves":
            case "jueves":
                n += 4;
                break;
            case "Viernes":
            case "viernes":
                n += 5;
                break;
            case "Sabado":
            case "sabado":
                n += 6;
                break;
            case "Domingo":
            case "domingo":
                n = n;
                break;
            default:
                "Error";
                break;
        }
        switch (n % 7) {
            case 0:
                n = 7;
                console.log("Domingo");
                break;
            case 1:
                n = 1;
                console.log("Lunes");
                break
            case 2:
                n = 2;
                console.log("Martes");
                break
            case 3:
                n = 3;
                console.log("Miércoles");
                break;
            case 4:
                n = 4;
                console.log("Jueves");
                break;
            case 5:
                n = 5;
                console.log("Viernes");
                break;
            case 6:
                n = 6;
                console.log("Sábado");
                break;
        }
        return n;
    }


    primerDia(y) {
        let aux;
        let dia;
        aux = (y + Math.floor((y - 1) / 4) - Math.floor((y - 1) / 100) + Math.floor((y - 1) / 400)) % 7;
        switch (aux) {
            case 0:
                dia = "Domingo";
                break;
            case 1:
                dia = "Lunes";
                break;
            case 2:
                dia = "Martes";
                break;
            case 3:
                dia = "Miércoles";
                break;
            case 4:
                dia = "Jueves";
                break;
            case 5:
                dia = "Viernes";
                break;
            case 6:
                dia = "Sábado";
                break;
        }
        //console.log(dia);
        return aux;
    }
}

let ejemplo = new Calendar();
console.log(ejemplo.aniobiciesto(2004)); //true
console.log(ejemplo.aniobiciesto(2019)); //false
console.log(ejemplo.primerDia(2100)); //viernes  5
console.log(ejemplo.todayPlus("Jueves",1));//Viernes  5
console.log(ejemplo.printCalendar(1,2019));
console.log(ejemplo.printCalendar(6,2006));