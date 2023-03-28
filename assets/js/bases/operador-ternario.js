
// Dias de semana abrimos a las 11,
// pero los fines de semana abrimos a las 9

// Entra a un sitio web, para consultar si esta abierto hoy...
const dia = 0; //0: domingo ... 1:lunes...
const horaActual = 11;

let horaApertura;
let mensaje; //Esta abierto, Esta cerrado, hoy abrimos a las xx

// if(dia === 0 || dia === 6){
//     console.log('Fin de semana');
//     horaApertura = 9;
// }else{
//     console.log('Dia de samana');
//     horaApertura = 11;
// }

// if(horaActual >= horaApertura){
//     mensaje = 'Esta abierto';
// }else{
//     mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;
// }

//operador ternario: Este funciona conlocando la condicion delante y luego el simbolo de interrogacion (?) para 
//devolever un resultado si es verdadero y luego dos puntos (:) para colocar el otro resultado en caso de ser falso
horaApertura = (dia === 0 || dia === 6)? 9 : 11; 
mensaje = (horaActual>=horaApertura)? 'Esta abierto':`Esta cerrado, hoy abrimos a las ${horaApertura}`;

console.log({horaApertura,mensaje});