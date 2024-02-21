/**
 * Devuelve una nueva carta del deck
 * @param {Array<String>} deck Un array del cual se extraerá la nueva carta
 * @returns
 */
export const pedirCarta = (deck) => {
    if(!deck || !deck.length) throw 'No hay cartas en el deck.';
    return deck.pop();
}