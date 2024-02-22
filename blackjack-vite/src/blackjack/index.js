import _ from 'underscore';
import { crearDeck as crearNuevoDeck, crearCarta, pedirCarta, acumularPuntos, turnoComputadora } from './usecases';

let deck         = [];
const tipos      = ['C', 'D', 'H', 'S'],
      especiales = ['A', 'J', 'Q', 'K'];

let puntosJugadores = [];

// Referencias HTML
const btnPedir = document.querySelector('#btnPedir'),
      btnDetener = document.querySelector('#btnDetener'),
      btnNuevo = document.querySelector('#btnNuevo');

btnPedir.disabled = true;
btnDetener.disabled = true;
btnNuevo.disabled = false;

const divCartasJugadores = document.querySelectorAll('.divCartas'),
      smalls = document.querySelectorAll('.col > h1:first-of-type > small');

// Esta función inicializa el juego
const inicializarJuego = (numJugadores = 2) => {
    deck = crearNuevoDeck(tipos, especiales);
    puntosJugadores = [];
    for(let i = 0; i < numJugadores; i++) {
        puntosJugadores.push(0);
    }
}

deck = crearNuevoDeck(tipos, especiales);

const reiniciar = () => {
    inicializarJuego();
    puntosJugadores = puntosJugadores.map(puntos => 0);
    smalls.forEach(small => small.textContent = 0);
    divCartasJugadores.forEach(div => div.textContent = '');
    btnPedir.disabled = false;
    btnDetener.disabled = false;
    btnNuevo.disabled = true;
}

// Eventos
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta(deck);
    acumularPuntos(carta, 0, puntosJugadores, smalls);

    //Crear y configurar la carta en memoria para asignar en el DOM
    crearCarta(carta, 0, divCartasJugadores);

    // Lógica de victoria - derrota
    if(puntosJugadores[0] >= 21) {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores, deck, btnNuevo, smalls, divCartasJugadores);
    }
});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugadores, deck, btnNuevo, smalls, divCartasJugadores);
});

btnNuevo.addEventListener('click', () => {
    reiniciar();
});