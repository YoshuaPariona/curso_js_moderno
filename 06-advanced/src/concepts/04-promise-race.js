/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseRaceComponent = ( element ) => {
    
    element.innerHTML = 'Cargando . . .';
    const renderValue = ( value ) => {
        element.innerHTML = value;
    }
    Promise.race([
        slowPromise(),
        slowPromise(),
        mediumPromise(),
        fastPromise(),
        slowPromise(),
    ]).then( renderValue );

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