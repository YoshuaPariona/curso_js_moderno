
class ejemploSingleton {
    static instancia;//undefined
    nombre = '';
    constructor( nombre='', ){

        if ( !!ejemploSingleton.instancia ){
            return ejemploSingleton.instancia;
        }
        ejemploSingleton.instancia = this;
        this.nombre = nombre;
    }
}

const instancia1 = new ejemploSingleton('Ironman')
const instancia2 = new ejemploSingleton('Spiderman')
const instancia3 = new ejemploSingleton('Dr. Strange')
console.log(`Instancia 1 : ${instancia1.nombre}`)
console.log(`Instancia 2 : ${instancia2.nombre}`)
console.log(`Instancia 3 : ${instancia3.nombre}`)

