

const dia = 55; // 0: Domingo

//La estructura switch es igual que el if pero solo funciona con numeros entero y string
//Este evalua el valor principal dentro de los parentesis al lado de la palabra switch con todo los casos y
//el primero que cumpla con la condicion este sera ejecutado. Si ninguno cumple la condicion se ejecutara el que es por default
switch(dia){

    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Lune');
        break;
    case 2:
        console.log('Marte');
        break;
    case 3:
        console.log('Miercole');
        break;
    case 4:
        console.log('Jueve');
        break;
    case 5:
        console.log('Vierne');
        break;
    case 6:
        console.log('Sabado');
        break;
    default:
        console.log('Dia Erroneo');
}