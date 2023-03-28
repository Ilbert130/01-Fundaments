
class Persona{

    //Cuando usamos el this con el nombre de una propiedad que no hemos creade, este la crea por defecto

    constructor(nombre, apellido, pais){
        this.nombre = nombre;
        this.apellido = apellido;  
        this.pais = pais;
    }

    //Usando un metodo estatico creamos la simulacion de sobrecarga de constructor. En este caso pasomos un objecto literal
    //por parametros
    static porObjeto(persona){
        return new Persona(persona.nombre, persona.apellido, persona.pais);
    }

    GetInfo(){
        console.log(`info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }
}

const nombre1 = 'Melisa',
      apellido1 = 'Flores',
      pais1 = 'Hondura';

const fher = {                                      //Objecto  litaral
    nombre: 'Fernando',
    apellido: 'Herrera',
    pais: 'Costarica'
}

const persona1 = new Persona(nombre1, apellido1, pais1);
//Asi creamos otro objeto con la simulacion de la sobrecarga de cosntructor
const persona2 = Persona.porObjeto(fher);
persona2.GetInfo();


//Autoejecutable function. Example
// (()=>{
//     console.log('Hello world my name is ilbert');
// })();
