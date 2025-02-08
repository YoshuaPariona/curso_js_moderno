//Definiciones de funciones al inicio
function saludar( nombre ) {//este tipo de funcion tradicional ya no se usa mucho
    console.log( arguments );//objeto implicito que capta todos los argumentos, solo apra tradicionaels
    console.log( 'Hola ' + nombre );
    return ['uno', 'dos'];//si no hay return explicito, es undefined por defecto
    console.log('Esta parte del codigo no se ejecuta')//porque está despues del return
}

const saludar2 = function ( nombre ){//función anónima
    console.log( 'Buenas ' + nombre );
}

const saludarFlecha = () =>{//función flecha
    console.log('Hola Flecha');
}
const saludarFlecha2 = (nombre) =>{// el parentesis no es necesario pero es buena practica ponerlo
    console.log( 'Hola ' + nombre );
}

const retornoDeSaludo =  saludar('Yoshua', 26, 'Soltero', 'Huancayo');
//saludar2('Logan');
//saludarFlecha();
//saludarFlecha2('Leonardo');

function sumar (a,b){
    return a + b
}
const sumar2 = (a,b) =>{ 
    return a + b 
}
const sumar3 = (a,b) => a+b //usar cuando solo se requiera el return

console.log( sumar(4,5) );
console.log( sumar2(4,5) );
console.log( sumar3(4,5) );

function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log( getAleatorio() );
console.log( getAleatorio2() );
