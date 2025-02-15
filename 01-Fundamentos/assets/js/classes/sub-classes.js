class Persona {

    static conteo = 0;

    static get getconteo(){
        return Persona.conteo + ' instancias';
    }

    static mensaje() {
        console.log(this.nombre);
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

        Persona.conteo++;
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

class Heroe extends Persona {
    clan = 'Sin Clan';
    constructor (nombre,codigo,frase) {
        super(nombre,codigo,frase); //super hace referencia a la clase padre
        this.clan =  'Los Vengadores' //para usar el this primero debe agregarse el super
    }
    quienSoy(){
        console.log(`De ${ this.clan }: `);
        super.quienSoy();
    }
}

const stark = new Heroe('Tony Stark', 'Ironman', 'Yo soy Ironman');
console.log(stark);
stark.quienSoy();