//How to create a function
function saludar(){
    console.log('Hola Mundo');
    console.log(arguments);
}

//anonymous function
//With const we avoid that the function's name not be used by another structure
const saludar2 = function() {
    console.log('Second function');
}

//anonymous function with arguments
const saludar3 = function(nombre)
{
    console.log('Hola ' + nombre);
}

//Lambda function
const  saludarFlecha = (nombre) =>{
    console.log('Hola mundo ' + nombre);
    return 'Nombre';

    //After a return none code will be executed
    console.log("Value")
}




saludar('Nombre',12,true);
saludar2();
saludar3('Ilbert');
let value = saludarFlecha("Ilbert");
console.log(value);

//-------------------------------------  Practices

//function for add two numbers

const suma = (a,b) => {
    return a + b;
}

const suma2 = (a,b) => a + b;

const getAleatorio = () =>{
    return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log(suma(5,8));
console.log(suma2(8,4));
console.log(getAleatorio());
console.log(getAleatorio2());


const arrayFunction = () => {
    return [1,2,3,4];
}


let arregloNew = arrayFunction();
console.table(arregloNew);



















