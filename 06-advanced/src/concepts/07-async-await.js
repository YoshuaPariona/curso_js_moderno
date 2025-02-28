import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwait2Component = async( element ) => {
    const [ value1, value2, value3] = await Promise.all ([
        slowPromise(),
        mediumPromise(),
        fastPromise(),
    ])

    element.innerHTML = `
    Value1: ${ value1 } <br/>
    Value2: ${ value2 } <br/>
    Value3: ${ value3 } <br/>
    `;
    
}

const slowPromise = () => new Promise( resolve => {
    setTimeout(() => {
        resolve('Slow Promise');
    }, 2000)
})
const mediumPromise = () => new Promise( resolve => {
    setTimeout(() => {
        resolve('Normal Promise');
    }, 1500)
})
const fastPromise = () => new Promise( resolve => {
    setTimeout(() => {
        resolve('Fast Promise');
    }, 1000)
})