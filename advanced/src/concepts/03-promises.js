import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = (element) => {

    const renderHero = (hero) => {
        element.innerHTML = hero.name;
    }

    const renderTwoHeroes = (hero1, hero2) => {
        element.innerHTML = `<h3>Heroes:</h3>
        <h4>${hero1}</h4>
        <h4>${hero2}</h4>`;
    }

    const renderError = (error) => {
        element.innerHTML = `<h3>Error:</h3>
        <h4>${error}</h4>`;
    }

    let id1 = '5d86371f25a058e5b1c8a65e';
    let id2 = '5d86371f9f80b591f499df32';

    /* //! Promise All
    Promise.all([
        findHero(id1),
        findHero(id2),
    ])
    .then(([hero1, hero2]) => renderTwoHeroes(hero1, hero2))
    .catch(renderError);
    */

    /* //! Unión de promesas
    findHero(id1)
        .then(hero1 => {
            return findHero(id2);
        }).then(hero2 => renderTwoHeroes(hero1, hero2))
        .catch(renderError);
    */

    /* //! Promise Hell
    findHero(id1)
        .then(hero1 => {
            findHero(id2)
                .then(hero2 => {
                    renderTwoHeroes(hero1, hero2)
                })
                .catch(renderError);
        })
        .catch(renderError);
    */
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