

let a = 5;

// if(a >= 10){
//     console.log('A es mayor que 10');
// }else{
//     console.log('A es menor que 10')
// }

//console.log('Fin de programa');


const hoy = new Date();
let dia = hoy.getDay();

console.log(dia);

// if(dia === 0){
//     console.log('Domingo');
// }else{
    
//     if(dia === 1){
//         console.log('Lunes')
//     }else{
//         console.log('No es lune ni domingo');
//     }
// }

//else if 
// if(dia === 0){
//     console.log('Domingo');
// }else if(dia === 1){
    
//     console.log('Lunes')
    
// }else if(dia === 2){
    
//     console.log('martes')
    
// }else{
//     console.log('No es lune ni domingo ni martes');
// }

dia = 10;

const dias = ['domingo','lune','martes','miercole','jueve','vierne','sabado'];

console.log(dias[dia] || 'Dia no definido');

// dias.forEach((elements, index)=>{

//     if(index === dia){
//         console.log(elements);
//     }

// });


//Con un objecto
const diasLetras = {
    0:'domingo',
    1:'lunes',
    2:'martes',
    3:'miercoles',
    4:'jueves',
    5:'viernes',
    6:'sabado'
}

console.log(diasLetras[dia] || 'Dia no definido'); 


