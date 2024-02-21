import _ from 'underscore';
import { crearDeck as crearNuevoDeck} from './usecases/crear-deck.js';

import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

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
    deck = crearDeck();
    puntosJugadores = [];
    for(let i = 0; i < numJugadores; i++) {
        puntosJugadores.push(0);
    }
}

deck = crearNuevoDeck(tipos, especiales);

// Esta función me permite tomar una carta
const pedirCarta = () => {
    if(!deck.length) throw 'No hay cartas en el deck.';
    return deck.pop();
}

// Esta función obtiene el valor de la carta enviada
const valorCarta = (carta) => {
    const digito = carta.substring(0, carta.length - 1);
    return isNaN(digito) ? 
        digito === 'A' ? 11 : 10 : digito * 1;
}

const reiniciar = () => {
    inicializarJuego();
    puntosJugadores = puntosJugadores.map(puntos => 0);
    smalls.forEach(small => small.textContent = 0);
    divCartasJugadores.forEach(div => div.textContent = '');
    btnPedir.disabled = false;
    btnDetener.disabled = false;
    btnNuevo.disabled = true;
}

const acumularPuntos = (carta, turno) => {
    puntosJugadores[turno] += valorCarta(carta);
    smalls[turno].textContent = puntosJugadores[turno];
}

const crearCarta = (carta, turno) => {
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append(imgCarta);
}

const determinarGanador = () => {
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

// Turno de la computadora
const turnoComputadora = (puntosMinimos) => {
    do {
        const carta = pedirCarta();
        acumularPuntos(carta, puntosJugadores.length - 1);

        //Crear y configurar la carta en memoria para asignar en el DOM
        crearCarta(carta, puntosJugadores.length - 1);
        if(puntosMinimos > 21) break;
    } while(puntosJugadores[puntosJugadores.length -1] < puntosMinimos && puntosMinimos <= 21);
    // El setTimeout sirve para que se renderizen primero las cartas antes de ganar o perder
    determinarGanador();
}

// Eventos
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    acumularPuntos(carta, 0);

    //Crear y configurar la carta en memoria para asignar en el DOM
    crearCarta(carta, 0);

    // Lógica de victoria - derrota
    if(puntosJugadores[0] >= 21) {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores[0]);
    }
});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugadores[0]);
});

btnNuevo.addEventListener('click', () => {
    reiniciar();
});