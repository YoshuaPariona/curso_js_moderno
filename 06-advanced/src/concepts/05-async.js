import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = ( element ) => {
    
    const id1 = '5d86371f2343e37870b91ef1';

    findHeroe(id1)
        .then( name => element.innerHTML = name )
        .catch( error => element.innerHTML = error);

}

/**
 * 
 * @param {String} id 
 * @returns {Promise<String>}
 */
const findHeroe = async( id ) => {
    const heroe = heroes.find( heroe => heroe.id === id ) 
    if( !heroe )
        throw new Error(`Hero with id ${ id }  not found`)
    return heroe.name;
}