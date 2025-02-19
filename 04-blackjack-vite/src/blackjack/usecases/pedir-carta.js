/**
 * Esta función toma una carta del deck
 * @param {Array<String>} deckCreado Ejemplo: ['9C', '9D', '9H', '9S']
 * @returns {String} Retorna la carta.
 */
export const pedirCarta = (deckCreado) => {
    
    if ( deckCreado.length === 0 || !deckCreado ) {
        throw 'No hay cartas en el deck';
    }
    
    return deckCreado.pop();
 }