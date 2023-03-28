//Pro tips

const elMayor = (a,b) => (a > b) ? a : b;

const tieneMembresia = (miembro) => (miembro) ? '2 dolares' : '10 dolares';

console.log(elMayor(10,3));
console.log(tieneMembresia(false));

const amigo = false;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loky', //Podemos colocar operadores ternario dentro de un arreglo
    (() => 'Nick Fury')() // funcion anonima auto invocada
]

console.log(amigosArr);

const nota = 100;

//Esta es la manera de como se crea un operador ternarion con multiples condiciones
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A'  :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B'  :
              nota >= 80 ? 'C+' :
              nota >= 80 ? 'C'  : 'F';

console.log({nota, grado});