
class Rectangulo{
    #area  = 0;   //asi hacemos que una propiedad sea privada en javascript

    constructor(base= 0, altura = 0){
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    }

    calcularArea(){
        console.log(this.#area * 2);
    }
}

const rectangulo = new Rectangulo(10, 15);
// rectangulo.#area = 100;  // Aqui estamos tratadon de acceder a la propiedad, pero esto no es posible. Lanza un error

console.log(rectangulo);
rectangulo.calcularArea();



