//Wey to declare an array
//const arr = new Array(10);
// const arr = [];
// console.log(arr);

let videoJuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];

console.log(videoJuegos[0]);

let arreglosCosas = [
    true,
    123,
    'Fernando',
    1 + 2,
    function(){},  //funcion anonima
    (() =>{})(),   //funcion anonima autoejecutable
    {a:1},         //Objecto literal
    ['Ilbert', 'Juan', 'Pedro',
        [
            "Castillo", "Bautista"
        ]
    ]
];

//console.log({arreglosCosas});
console.log(arreglosCosas[0]); //true
console.log(arreglosCosas[2]); // Fernando
console.log(arreglosCosas[7][3][1]);// Pedro

const arrayTest = ['Ilbert','Luis','Pedro','Miguel'];