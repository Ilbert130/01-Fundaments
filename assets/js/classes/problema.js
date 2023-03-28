
const fer = {
    nombre: 'Ilbert',
    edad: 19,
    imprimir(){                                  //asi se crea un metodo dentro de un objeto literal
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 13,
    imprimir(){                                  //asi se crea un metodo dentro de un objeto literal
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

//----------------
// Funcion que servira para crear instancia
// Esto se debe de crear con la palabra new
function Persona(nombre, edad){
    console.log('Se ejecuto esta linea');

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = () => {                                  //asi se crea un metodo dentro de un objeto literal
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

//Dos instancia
const maria = new Persona('Maria', 18);  //In mediatamente colocamos la palabra reservada 'new' creamo una nueva instancia como si fuera un objecto.
const melisa = new Persona('Melisa', 16);
console.log(maria);
console.log(melisa);