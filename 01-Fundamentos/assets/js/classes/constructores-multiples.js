
class Persona {

    static porObjeto({nombre, apellido, pais}) {
        return new Persona(nombre,apellido,pais);
    }
    constructor( nombre, apellido, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }
    getInfo() {
        console.log(`Datos: ${ this.nombre }, ${this.apellido}, ${this.pais}`)
    }
}

const nombre1 = 'Yulisa',
      apellido1 = 'Vargas',
      pais1 = 'El Salvador';

const yosh = {
    nombre: 'Yoshua',
    apellido: 'Pariona',
    pais: 'Perú',
}

const persona1 = new Persona( nombre1, apellido1, pais1);
const persona2 = Persona.porObjeto( yosh );
console.log(persona1)
console.log(persona2)

