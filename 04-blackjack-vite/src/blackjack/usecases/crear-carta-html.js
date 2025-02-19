/**
 * 
 * @param {String} carta El nombre de la carta
 * @returns {HTMLImageElement} Retorna la imagen de la carta
 */
export const crearCartaHTML = ( carta ) => {

    if( !carta ) throw new Error('Se requiere la carta');
    
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');

    return imgCarta;
}