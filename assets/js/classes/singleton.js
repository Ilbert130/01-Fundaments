


class Singleton{

    static instancia;   //Esta sera la instancian inicializada de la clase. Sera el valor que siempre regresara
    nombre  = '';       //cualquier propiedad global

    constructor(nombre = ''){

        // const a = undefined;
        // console.log(a);  // undifined
        // console.log(!a); // true
        // console.log(!!a); // false
        // //!! lo opuesto de lo opuesto

        if(!!Singleton.instancia){
            // console.log(!!Singleton.instancia);
            // console.log(Singleton.instancia);
            return Singleton.instancia;
        }

        Singleton.instancia = this;  //'this' : hace referencia al objeto en si. La instancia global  //Estamos almancenando la primera instancia para reutilizar la misma. Por eso no importa la instancias que se creen simpre sera la misma
        this.nombre = nombre;

    }
}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
console.log(`Nombre en la instancio1 es: ${instancia1.nombre}`);
console.log(`Nombre en la instancio1 es: ${instancia2.nombre}`);





