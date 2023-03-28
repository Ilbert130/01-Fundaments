class Persona{
    //Todas las classe por defecto tienen el 'use strict' implementado
    //Esta es la manera de como se declaran las propiedades en JavaScript

    //Asi se crea una propiedad statica
    static _conteo = 0;

    //Asi se crea una propiedad statica
    static get getConteo(){
        return Persona._conteo;
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    //Asi se crea un set, establecer
    set setComidaFavorita(comida){
        this.comida = comida;
    }

    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }
    

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

//Herencia
//Asi se herada de una clase a otra en javascript
class Heroe extends Persona{
    clan = 'Sin  clan';

    constructor(nombre, codigo, frase){
        super(nombre, codigo, frase);  //Esto hace referencia a la clase que extiende directamente. Llamando el constructor de la clase padre
        this.clan = 'Los Anvegers';
    }

    quienSoy(){
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quienSoy();  //Con la instancia super hacemos referencia a todos los elementos de la clase padre
    }
}

const spiderman = new Heroe();
console.log(spiderman);