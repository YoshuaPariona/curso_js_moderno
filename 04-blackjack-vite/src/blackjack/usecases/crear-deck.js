import _ from 'underscore';


/**
 * Esta función crea una nueva baraja
 * @param {Array<String>} tiposCarta Ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array} retorna la baraja barajada :v
 */
export const crearDeck = (tiposCarta, tiposEspeciales) => {

    if( !tiposCarta || tiposCarta.length === 0 ) 
        throw new Error('TiposCarta es requerido y que tenga valores');
    if( !tiposEspeciales || tiposEspeciales.length === 0 ) 
        throw new Error('TiposCarta es requerido y que tenga valores');
    
    let deck = [];

   for( let i = 2; i <= 10; i++ ) {
       for( let tipo of tiposCarta ) {
           deck.push( i + tipo);
       }
   }

   for( let tipo of tiposCarta ) {
       for( let esp of tiposEspeciales ) {
           deck.push( esp + tipo);
       }
   }
   
   deck = _.shuffle( deck );

   return deck;
}