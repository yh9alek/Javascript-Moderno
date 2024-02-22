/**
 * 
 * @param {Array<HTMLElement>} puntosJugadores Un array de elementos span con los que se renderizan los puntos de los jugadores 
 * @param {HTMLButtonElement} btnNuevo El botón que reinicia todo el juego
 */
export const determinarGanador = (puntosJugadores, btnNuevo) => {
    const [puntosMinimos, puntosComputadora] = puntosJugadores;
    setTimeout(() => {
        if(puntosMinimos > 21) {
            alert('Perdiste');
        }else if (puntosComputadora > 21) {
            alert('Ganaste');
        }
        else if(puntosMinimos > puntosComputadora) {
            alert('Ganaste');
        }
        else {
            alert('Perdiste');
        }
        btnNuevo.disabled = false;
    }, 50);
}