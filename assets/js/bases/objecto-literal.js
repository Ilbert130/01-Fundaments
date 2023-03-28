const personaje = {                     //object with 'let' the object is changeable with 'const' is unchangeable,  
                                        //the object with 'const' cannot be instance one more time, only
                                        //its property can be changed
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    eded: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    ultimaPelicula: 'Infinity War'
};

// EXAMPLE: personaje = {}; //This is not posible by the explication above, it throw an error, the only thing that you can do is to change its property.

console.log(personaje);
console.log('Nombre:', personaje['nombre']); //Other way to access get a property in a object
console.log('Nombre:', personaje.nombre); //In this way was with the '.'
console.log('Edad:', personaje.eded);
console.log('Coors',personaje.coords);
console.log('Lat:',personaje.coords.lat);
console.log('Numeros de trajes:', personaje.trajes.length);

//This the way to go over an array and show its values
personaje.trajes.forEach((elements, index, array)=>{
    console.log('Nombre del traje:', elements);
});

const x = 'vivo';
console.log('Vivo', personaje[x]);  //A way to work dynamically with objects' properties

//Mas detalles -----------------------------------------------------------

personaje.eded = null;
delete personaje.eded;              //with the word delete you can delete a property
console.log(personaje.eded);        //This print undifine

personaje.casado = true;  //this way you add another property to an object, because the property 'casado', doesn't exist!

const entriesPares = Object.entries(personaje); //This method return a array with other arrays inside it with the values of  the name's property and value's property "['nombre','Tony Stark']". Example.
console.log(entriesPares);

console.log(personaje);


//To became the object completely unchangeable we need to do that below
Object.freeze(personaje); //to freeze the object, with that method you can't add any property and also change its value. However, you will be able to changed the objects inside this object.

personaje.dinero = 1223;                       //inposible
personaje.casado = false;                      //inposible
personaje.direccion.ubicacion = 'Costa Rica';  //posible
console.log(personaje);


//A list of property from an object
//Names' property
const propiedades = Object.getOwnPropertyNames(personaje);

//values' property
const propertiesValues = Object.values(personaje);

console.log(propertiesValues);
console.log(propiedades);

const objectNew = {
    nombre: 'Ilbert',
    eded: 15,
    vivo: true,
    // add(){   //Funtion 

    // }
}

objectNew.nombre = 'Albert';

console.log(objectNew.nombre);