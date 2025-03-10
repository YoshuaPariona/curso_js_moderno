import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponent = async( element ) => {
    const id1 = '5d86371f25a058e5b1c8a65e';
    const id2 = '5d86371f1efebc31def272e2';

    try{
        const hero1 = await findHero( id1 );
        const hero2 = await findHero( id2 );
    
        element.innerHTML = `${ hero1.name } / ${ hero2.name }`;
    } catch ( error ) {
        element.innerHTML = error;
    }
}

const findHero = async( id ) => {
    const hero = heroes.find( hero => hero.id === id);
    if ( !hero )
       throw new Error(`Hero id was not found`) ;
    return hero;
}