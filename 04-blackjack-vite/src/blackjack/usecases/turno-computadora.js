import { pedirCarta, valorCarta, crearCartaHTML } from "./";
/**
 * Define el turno de la computadora
 * @param {Number} puntosMinimos puntos minimos necesarios parala victoria del cpu
 * @param {HTMLElement>} deck elemento HTML que muestra puntos
 * @param {HTMLElement>} deck elemento HTML que muestra las cartass
 * @param {Array<String>} deck 
*/
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if( !puntosMinimos ) throw new Error('Se necesitan los puntos minimos')
    if( !puntosHTML ) throw new Error('Se necesitan los puntos del elementos HTML')

    let puntosComputadora = 0

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML( carta );
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );


    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 200 );
}