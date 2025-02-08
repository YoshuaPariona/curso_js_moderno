let nombre ='Miles Morales';
console.log(nombre);
nombre = 'Gwen Stacy';//re cambia el vaalor sin usar "let" de nuevo
console.log(nombre);

console.log(typeof nombre );
nombre = 123;//si se cambia ala variable, el tipo tambien lo hace en funcion a su contenido.
console.log(typeof nombre );

let esMarvel = true;
console.log(typeof esMarvel );

let precio = 33;
console.log(typeof precio );
precio = 33.001;//ambos son tipo "number", no hay float ni double, etc
console.log(typeof precio );

let superPoder;
console.log(typeof superPoder );//undedfined porque se ha declarado pero no se le ha inicializado con ningún valor.

let eresnull = null;
console.log(typeof eresnull );//no es null xd

let symbol1 = Symbol('a');
console.log(typeof symbol1 );
let symbol2 = Symbol('a');
console.log(typeof symbol2 );

console.log(typeof symbol1 === symbol2 );//creados igual pero aun así no son identicos

