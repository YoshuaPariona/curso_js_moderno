let juegos =  ['XCOM', 'CounteStrike', 'Starcraft 2', 'S.T.A.L.K.E.R'];
console.log('largo:', juegos.length)

let primero = juegos[0];
console.log(primero);
let ultimo = juegos[juegos.length-1];
console.log(ultimo);

juegos.forEach( (elemento, indice, array) => {
    console.log({ elemento, indice, array})
});

let nuevaLongitud = juegos.push( 'Metro' );
console.log(nuevaLongitud, juegos);

nuevaLongitud = juegos.unshift('Fallout: New Vegas');
console.log(nuevaLongitud, juegos);

let ultimoJuegoBorrado = juegos.pop()
console.log(ultimoJuegoBorrado, juegos);

let posi = 2;
let juegoBorrado = juegos.splice(posi, 2)
console.log(juegoBorrado, juegos);

let xcomidIndex = juegos.indexOf('XCOM');//si sale -1, significa que no lo encopntró
console.log(xcomidIndex);