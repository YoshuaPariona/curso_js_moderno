
let a = 50;

if( a>15 ){
console.log('A es mayor a 15');
} else {
    console.log('A es menor o igual a 15');
}
//console.log('Final del programa');

const hoy = new Date();
let dia = hoy.getDay(); //D(0), L(1), etc tipo number

console.log(dia);

if( dia === 5 ) {
    console.log('Viernes');
} else if (dia == 1 ){
    console.log('Lunes');
    /*
    if (dia == 1 ) {
        console.log('Lunes');
        } else {
            console.log('No es lune ni viernes');
    }
    */
} else if (dia === 3 ) {
    console.log('miercoles');
} else {
    console.log('No es lune ni viernes ni miercoles');
}


dia = 6;

const letraDia = {//alternativa con objeto
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado',
}
//alternativa con array
const letraDia2 = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sábado',];
console.log( letraDia[dia] || 'Dia no encontrado')
console.log( letraDia2[dia] || 'Dia no encontrado')