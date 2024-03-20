import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponent = async (element) => {
    element.innerHTML = `hero1 / hero2`;

    let id1 = '5d86371f233c9f2425f16916',
        id2 = '5d86371fd55e2e2a30fe1ccb';
    
    try {
        let {name: hero1} = await findHero(id1);
        let {name: hero2} = await findHero(id2);

        element.innerHTML = `${hero1} / ${hero2}`;
    } catch (error) {
        element.innerHTML = `${error}`;
    }
}

/**
 * 
 * @param {String} id 
 * @returns {Promise<Object>}
 */
const findHero = async(id) => {
    const hero = heroes.find(hero => hero.id === id);
    return hero;
}