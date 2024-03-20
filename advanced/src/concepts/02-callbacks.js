import { heroes } from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = (element) => {
    const id = '5d86371fd55e2e2a30fe1cc4s';
    findHero(id, (error, hero) => {
        if(error) {
            element.innerHTML = error;
            return;
        }
        element.innerHTML = hero.name;
    });
}

/**
 * 
 * @param {String} id 
 * @param {(error: String|Null hero: Object)=>void} callback 
 */
const findHero = (id, callback) => {
    const hero = heroes.find(hero => hero.id === id);
    if(!hero) {
        callback(`Heroe con el id ${id} no encontrado.`);
        return;
    }
    callback(null, hero);
}