/**
 * 
 * @param {HTMLDivElement} element 
 */
export const enviromentsComponent = ( element ) => {
    
    console.log(import.meta.env)

    const html = `
        Dev: ${ import.meta.env.DEV } <br/>
        Prod: ${ import.meta.env.PROD } <br/>
        KEY: ${ import.meta.env.VITE_API_KEY } <br/>
        URL: ${ import.meta.env.VITE_API_URL } <br/>
    `;
    element.innerHTML = html;
}