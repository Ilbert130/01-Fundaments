let a = 10;
let b = a;
a = 30;  //pase por valor


//[...array] {...object}
console.log({a,b});

let juan = {nombre: 'Juan'};
let ana = {...juan};                 // aqui estamos pasando un objeto por referencia, ya que los objectos son por referencia
ana.nombre = 'Ana';
console.log({juan,ana});


const cambiaNombre = ({...persona}) => {  //Operador Rest in this case
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiaNombre(peter);
console.log({peter, tony});


// Arreglos

const frutas = ['Manzna','Pera','Mango'];

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

otrasFrutas.push('Melon');
console.log({frutas,otrasFrutas});