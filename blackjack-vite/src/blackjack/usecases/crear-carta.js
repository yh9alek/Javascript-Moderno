/**
 * 
 * @param {String} carta Un string con el valor de la carta
 * @param {Number} turno Un number que indica el turno del juego
 * @param {Array<HTMLDivElement>} divCartasJugadores Un array con divs que contienen las cartas de cada jugador
 */
export const crearCarta = (carta, turno, divCartasJugadores) => {
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append(imgCarta);
}