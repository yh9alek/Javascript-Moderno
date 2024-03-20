import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = (element) => {

    const renderHero = (hero) => {
        element.innerHTML = hero.name;
    }

    const renderError = (error) => {
        element.innerHTML = `<h3>Error:</h3>
        <h4>${error}</h4>`;
    }

    findHero('5d86371f2343e37870b91ef1')
        .then(renderHero)
        .catch(renderError);
}

/**
 * 
 * @param {String} id 
 * @returns {Promise<String>}
 */
const findHero = (id) => {
    return new Promise((resolve, reject)=>{
        const hero = heroes.find(hero => hero.id === id);
        if(hero) {
            resolve(hero);
            return;
        }
        reject(`Heroe con id ${id} no encontrado.`);
    });
}