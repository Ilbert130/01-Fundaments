console.warn('For tradicional');

//This is the ciclo for
for(let i=0; i<heores.length; i++){
    console.log(heores[i]);
}

console.warn('For in')  
//This is like a foreach. Just return the id
for(let i in heores){
    console.log(heores[i]);
}

console.warn('For of')
//This is like a foreach but more similate
for(let i of heores){
    console.log(i);
}

heores.forEach((value)=>{

    console.log(value);
});

// let ar = [1,2,3,4];

// function simpleArraySum(ar) {
//     // Write your code here
//     let sum = 0;
//     ar.forEach(element => {
//         sum += element;
//     });
//     return sum;
// }

// console.log(simpleArraySum(ar));