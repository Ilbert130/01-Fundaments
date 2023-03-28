let juegos = ['Zelda','Mario','Metroid','Chrono'];

console.log('Largo:', juegos.length); //print 4
console.log(juegos[0]); //firt element
console.log(juegos[juegos.length - 1]); // The las element

//With this function we can go over the whole array
//element  shows the value, indice shows the index and arr shows the whole array
juegos.forEach((elemento, indice, arr) => {
    console.log({elemento,indice,arr});
})

//Add a new element to the array at the end
let nuevaLongitud = juegos.push('F-Zero');
console.log(nuevaLongitud, juegos);

//Add a new element to the array at the begin
nuevaLongitud = juegos.unshift('Fire Emblem');
console.log(nuevaLongitud, juegos);

//delete the first element in an array and return it
nuevaLongitud = juegos.shift('Fire Emblem');
console.log(nuevaLongitud, juegos);

//To delete the last element and return it
let theLastElementDelete = juegos.pop();
console.log(theLastElementDelete, juegos);

//To delete an element from an expecify position and retorn the elements deleted, paramerts below
// 'pos', it means since what position 
// '2', it means how many elements
let pos = 1;
let juegosBorrados = juegos.splice(pos, 2);
console.log(juegosBorrados, juegos);

//It looks for an index of an element, if that element wasn't found, it return -1
let metroidIndex = juegos.indexOf('Metroid');