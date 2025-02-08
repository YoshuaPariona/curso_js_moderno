/*si el la propiedad y la variable son iguales se puede resumir
solo poniendo una palabra
function crearPersona( nombre, apellido ){
    return{
        nombre: nombre,
        apellido: apellido,
    }
}
*/
const crearPersona = ( nombre, apellido ) => ({nombre, apellido});//entre parentesis, para enviar el objeto

const persona = crearPersona('Yoshua', 'Pariona');
//console.log(persona);

function imprimeArgunmentos(){
    console.log(arguments);
}
const imprimeArgunmentos2 = (plata, ...args) => {
    //console.log(args)
    return args;
}//...args, es el parametro rest, va siempre al final de los argumentos, o solo

const [casado, vivo, nombre, saludo] = imprimeArgunmentos2(10, false, true, 'Yoshua'); 
console.log({casado, vivo, nombre, saludo})

const {apellido: nuevoApellido} = crearPersona('Yoshua', 'Pariona');
console.log({nuevoApellido})

const tony = { 
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: [ 'Mark III', 'Mark V', 'Mark VII', 'Hulkbuster', 'Mark LXXXV' ],
};
/*
const imprimePropiedades = ( personaje ) => {
    console.log(personaje.nombre );
    console.log(personaje.codeName );
    console.log(personaje.vivo );
    console.log(personaje.edad );
    console.log(personaje.trajes );
}
*/

const imprimePropiedades = ({nombre,codeName,vivo,edad=21,trajes}) => {//se puede asignar un valor por defecto si no se proporciona uno
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades(tony);
