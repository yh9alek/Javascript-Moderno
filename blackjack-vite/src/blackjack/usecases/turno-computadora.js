import { pedirCarta } from "./pedir-carta.js";
import { acumularPuntos } from "./acumular-puntos.js";
import { determinarGanador } from "./determinar-ganador.js";

/**
 * 
 * @param {Array<Number>} puntosJugadores Puntos de los jugadores en memoria
 * @param {Array<String>} deck Un array con las cartas del juego
 * @param {HTMLButtonElement} btnNuevo El botón que reinicia todo el juego
 * @param {Array<HTMLElement>} smalls Un array de elementos span con los que se renderizan los puntos de los jugadores
 */
export const turnoComputadora = (puntosJugadores, deck, btnNuevo, smalls) => {
    if(!puntosJugadores[0]) throw new Error('Puntos mínimos requeridos');
    if(!deck) throw new Error('El deck es necesario');

    do {
        const carta = pedirCarta(deck);
        acumularPuntos(carta, puntosJugadores.length -1, puntosJugadores, smalls);

        //Crear y configurar la carta en memoria para asignar en el DOM
        crearCarta(carta, puntosJugadores.length - 1);
        if(puntosJugadores[0] > 21) break;
    } while(puntosJugadores[puntosJugadores.length -1] < puntosJugadores[0] && puntosJugadores[0] <= 21);
    // El setTimeout sirve para que se renderizen primero las cartas antes de ganar o perder
    determinarGanador(puntosJugadores, btnNuevo);
}