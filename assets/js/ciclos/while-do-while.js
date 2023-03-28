


const carros = ['Ford','Mazda','Honda','Toyota'];

let i = 0;

// while(i< carros.length){
//     console.log(carros[i]);
//     i++;
//     // i = i + 1;
// }

//undefined, null and false son false en valor booleano

while(carros[i]){
    
    if(i === 1){
        //break; es para romper siclos
        
        i++;
        continue;
    }
    i++;
    console.log(carros[i]);
    // i = i + 1;
}

console.warn('Do while');

let j = 0;

do{

    console.log(carros[j]);
    j++;
}
while(carros[j]);