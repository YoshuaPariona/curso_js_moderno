
let a = 10;
let b = 10;
a = 30;

console.log({a , b});

let pedro = { nombre: 'Pedro' }
let ana = {...pedro};//operador spread, separa a los elementos y permite asignar el valor 
ana.nombre = 'ana'; //todos los objetos son pasados por referencia

console.log({pedro, ana});

const cambiarNombre = ({ ...persona }) => {//operador rest
    persona.nombre = 'Tony';
    return persona;
}


let juan = { nombre: 'Juan' };
let tony = cambiarNombre( juan );

console.log({juan, tony});

const frutas = ['manzana', 'pera', 'durazno']

console.time('spread');
const masfrutas = [...frutas];//usar corchetes en lugar de llaves en un array
console.timeEnd('spread');

console.time('slice');
const masfrutas2 = frutas.slice();//separa la relacion de los arreglos
console.timeEnd('slice');


masfrutas.push('platano');
console.table({frutas, masfrutas});
