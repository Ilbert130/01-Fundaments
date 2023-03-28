//Thi is the way to create an class in JavaScript

//Asi se crean las class en JavaScript
class Persona{
    //Todas las classe por defecto tienen el 'use strict' implementado
    //Esta es la manera de como se declaran las propiedades en JavaScript

    //Asi se crea una propiedad statica
    static _conteo = 0;

    //Asi se crea una propiedad statica
    static get getConteo(){
        return Persona._conteo;
    }

    #nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    //Asi se crea un set, establecer
    set setComidaFavorita(comida){
        this.comida = comida;
    }


    //Asi se crea un get, obtiene
    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    //Asi se crea el constructor
    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase'){     //El constructor devuelve la instancia del objecto
        // console.log('Hola!');
        // if(!nombre) throw Error('Necesitamos el nombre');
        
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        Persona._conteo ++;  //Se tiene que hacer referencia desde la clase
    }

    //Asi se crean los metodos staticos
    static mensaje(){
        console.log('Clase de spiderman');
    }

    //Asi se crean los metodos en las classes en javascript
    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase(){
        this.quienSoy(); // Hay que poner el this si queremos hacer referencia a las propiedades y metodo de un scope, en este caso el scope de clase
        console.log(`${this.codigo} dice: ${this.frase}`);
    }

}
//Asi es como se crean las instancia de los objetos en JavaScript
const spiderman = new Persona('Peter Parker','Spider', 'Soy tu amigable vecino Spiderman');
const spidermanNegro = new Persona('Peter Parker malo','SpiderNegro', 'Soy tu malvado vecino Spiderman');

spiderman.nombre = 5;
spiderman.quienSoy();  //Llamando al metodo
spiderman.miFrase();
spiderman.setComidaFavorita = 'Mi comida favoirata';  //Asi se llama la propiedad set para asignarle un valor
//Hay que evitar crear propiedades de esa manera
spiderman.nemesis = 'Duende verde'; //Esto crea una propiedad en la class, sin haberla creado dentro de la clase. No es bueno
// spiderman.comida = 'Valor' //Esto se pude hacer aunque tenga su set y get, pero no es debido

// spidermanNegro.quienSoy();
// spidermanNegro.miFrase();

console.log(spiderman);
console.log(spiderman.getComidaFavorita);
console.log(Persona._conteo);
console.log(Persona.getConteo);
console.log(Persona.mensaje());