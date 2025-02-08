const dia = 5;//D(0), L(1), etc tipo number
const horaActual = 10;

let horaApertura;
let mensaje;

//if( dia === 0 || dia === 6 ) {//if normal
/*forma normal y extendida
if([0,6].includes(dia)) {//con arreglos y metodos

    horaApertura = 9;
    console.log('Fin de semana');
} else {
    console.log('Día de semana');
    horaApertura = 11;
}

if( horaActual >= horaApertura ) {
    mensaje = 'Está abierto';
} else {
    mensaje = `Está cerrado, vuelva a las ${horaApertura}` ;//nueva forma de interconectar strings
}
*/

//ahora con operador ternario
horaApertura = ( [0,6].includes(dia) ) ? 9 : 11;
mensaje = (horaActual >= horaApertura) ? 'Está abierto' : `Está cerrado, vuelva a las ${horaApertura}`

console.log({horaActual, horaApertura, mensaje});

//============================
//========= PROTIP ===========
//============================

const elMayor = (a,b) => (a > b) ? a: b;//funcion para numero mayor con funcion flecha y operador ternario

const tieneMembresia =( miembro ) => ( miembro ) ? '8 soles' : '40 soles'

console.log( elMayor(20, 17) )
console.log( tieneMembresia(false) )

const amigo = true;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    (amigo) ? 'thor' : 'Loki',//se puede ejeucat cualquier codigo dentro siempre y cuando devuelva un valor
    () => 'Nick Fury',
    tieneMembresia(true),
]
console.log( amigosArr);

const nota = 85;// A+ A B+
const grado =   nota >= 95 ? 'A+' :
                nota >= 85 ? 'A' :
                nota >= 75 ? 'B+' :
                nota >= 65 ? 'B' :
                nota >= 55 ? 'C+' :
                nota >= 45 ? 'C' : 'F';

console.log( {nota, grado} );