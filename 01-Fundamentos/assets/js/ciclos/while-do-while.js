const marcaCarros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;
//while( i < marcaCarros.length ) {
while( marcaCarros[i] ) {
    if( i === 1 ){
        //break;
        i++;
        continue;
    }
    console.log( marcaCarros[i] );
    i++;//i = i + 1
}

console.warn('Do While');
let j = 0;
do {
    console.log( marcaCarros[j] );
    j++;
} while( marcaCarros[j] );