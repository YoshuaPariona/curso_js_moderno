//forma antigua
function Persona(nombre, edad){//uppercamelcase para funciones que crean instancias
    console.log('Se ejecutó');
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = () => {
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad } ` )
    };
}

const mar = new Persona('Maria', 24);
const san = new Persona('Sandra', 26);
console.log(mar);
console.log(san);
