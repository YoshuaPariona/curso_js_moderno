//si se cambia el let por const solo bloquea el tipo de dato no la modificacion dentro del objeto
let personaje = { 
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70,
    },
    trajes: [ 'Mark III', 'Mark V', 'Mark VII', 'Hulkbuster', 'Mark LXXXV' ],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California',
    },//objeto dentro de objeto
    'ultima pelicula': 'Avengers: End Game', //no se recomienda, pero en caso de ser necesario usar ' o " EN LA VARIABLE
};

console.log( personaje );
console.log( 'Nombre', personaje.nombre );
console.log( 'Nombre', personaje['nombre'] );
console.log( 'Edad', personaje.edad );
console.log( 'Coordenadas', personaje.coords.lat );//array dentro de objeto

console.log( 'Número de trajes', personaje.trajes.length );
console.log( 'Último traje', personaje.trajes[personaje.trajes.length-1] );

const x = 'vivo';
console.log( 'Vivo', personaje[x] );
console.log( 'Última película', personaje['ultima pelicula'] );

personaje.edad = null;//no lo borra, solo le asigna el valor null
console.log( personaje.edad );
delete personaje.edad;//esto si lo borra
console.log( personaje.edad );//arroja undefined

personaje.casado = true;//agrega la propiedad

const entriesPares = Object.entries( personaje );
console.log( entriesPares );

Object.freeze( personaje );//bloquea los cambios dentro del objeto en un primer nivel, los objetos dentro aun pueden modificarse
personaje.dinero = 999999999;
personaje.casado = 'falso';
personaje.direccion.ubicacion = 'Huancayo';
console.log( personaje );

const propiedades = Object.getOwnPropertyNames( personaje );
const valores = Object.values( personaje )
console.log( valores );
