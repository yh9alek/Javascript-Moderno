/**
 * Acumula el puntaje de la carta en cuestión, en los puntos del jugador indicado.
 * @param {String} carta Un string con el tipo de carta 
 * @param {Number} turno Un number que indica el turno del juego
 * @param {Array<Number>} puntosJugadores Un array con los puntos de los jugadores en memoria 
 * @param {Array<HTMLElement>} smalls Un array de elementos span con los que se renderizan los puntos de los jugadores 
 */
export const acumularPuntos = (carta, turno, puntosJugadores, smalls) => {
    if(!puntosJugadores || !smalls) return;
    puntosJugadores[turno] += valorCarta(carta);
    smalls[turno].textContent = puntosJugadores[turno];
}