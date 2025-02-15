
class Persona {//definir clase upper camelcase
    //todas las clases tienen por defecto activado el 'use strict'
    static conteo = 0;
    static get getconteo(){
        return Persona.conteo + ' instancias';
    }
    static mensaje() {
        console.log(this.nombre);//esto resulta en undefined
        console.log('Método estático')
    }
    
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre='unnamed',codigo='uncoded',frase='Sin frase') {
        this.nombre = nombre;   
        this.codigo = codigo;   
        this.frase = frase;   

        Persona.conteo++;//cuenta el total de veces que fue instanciado
    }

    set setComidaFav( comida ) {
        this.comida = comida.toUpperCase();
    }
    get getComidaFav() {
        return `La comida favorita ded ${ this.nombre } es ${ this.comida }`
    }

    quienSoy() {
        console.log(`Mi nombre es ${ this.nombre } y mi identidad es ${ this.codigo }`);
    }

    miFrase(){
        this.quienSoy();
        console.log(`${ this.codigo } menciona: ${ this.frase }`);
    }
}

const parker = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino spiderman');
const stark = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');
/*
console.log(parker);
console.log(stark);
parker.miFrase();
stark.miFrase();

stark.setComidaFav = 'shawarma'
console.log(stark.getComidaFav);
*/
console.log(Persona.getconteo);

Persona.mensaje();

Persona.propiedadExterna = 'aver';
console.log(Persona.propiedadExterna)

