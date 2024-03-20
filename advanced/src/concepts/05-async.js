import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = (element) => {
    let id1 = '5d86371f97c29d020f1e1f6d';
    findHero(id1)
        .then(hero => element.innerHTML = hero)
        .catch(error => element.innerHTML = error);
}

/**
 * 
 * @param {String} id 
 * @returns {Promise<String>}
 */
const findHero = async (id) => {
    const hero = heroes.find(hero => hero.id === id);
    return hero?.name;
}