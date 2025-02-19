/**
 * Esta función asigna el valor a cada carta
 * @param {String} cartaTomada  Ejemplo: '9S'
 * @returns {Number} Retorna el valor de la arta
 */
export const valorCarta = ( cartaTomada ) => {

    const valor = cartaTomada.substring(0, cartaTomada.length - 1);
    return ( isNaN( valor ) ) ? 
           ( valor === 'A' ) ? 11 : 10
           : valor * 1;
 }