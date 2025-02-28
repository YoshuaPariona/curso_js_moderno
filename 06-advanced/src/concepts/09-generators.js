import { heroes } from '../data/heroes';
import { enviromentsComponent } from './01-enviroments';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionsComponent = async( element ) => {

    const genId = idGenerator();
    
    const button = document.createElement('button');
    button.innerText =  'click me';
    element.append( button );

    const renderButton = () => {
        const { value } = genId.next();
        button.innerText = `Click ${ value }`;
    }
    button.addEventListener('click', renderButton)
}

function* idGenerator() {
    let currentId = 0
    while(true) {
        yield ++currentId;
    }
}