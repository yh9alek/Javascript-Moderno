import { shuffle } from "underscore";

// Esta función crea un nuevo deck
/**
 * Crea un nuevo deck barajeado
 * @param {Array<String>} tipos Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} especiales Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} Devuelve el nuevo deck creado
 */
export const crearDeck = (tipos, especiales) => {
    if(!tipos || !tipos.length) throw new Error('Este argumento es obligatorio.');
    if(!especiales || !especiales.length) throw new Error('Este argumento es obligatorio.');
    let deck = [];

    for(let i = 2; i <= 10; i++) {
        for(let tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    for(let tipo of tipos) {
        for(let esp of especiales) {
            deck.push(esp + tipo);
        }
    }

    return shuffle(deck);
}