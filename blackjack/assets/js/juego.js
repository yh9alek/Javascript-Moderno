(() => {
    'use strict'

    let deck         = [];
    const tipos      = ['C', 'D', 'H', 'S'],
          especiales = ['A', 'J', 'Q', 'K'];

    let puntosJugadores = [];

    // Referencias HTML
    const btnPedir = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener'),
          btnNuevo = document.querySelector('#btnNuevo');

    btnNuevo.disabled = true;

    const divCartasJugador = document.querySelector('#jugador-cartas'),
          divCartasComputadora = document.querySelector('#computadora-cartas'),
          smalls = document.querySelectorAll('.col > h1:first-of-type > small');

    // Esta función inicializa el juego
    const inicializarJuego = (numJugadores = 2) => {
        deck = crearDeck();
        for(let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }
    }

    // Esta función crea un nuevo deck
    const crearDeck = () => {
        deck = [];

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

        return _.shuffle(deck);
    }

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
        smalls.forEach(small => small.textContent = 0);
        [puntosJugador, puntosComputadora] = [0, 0];
        divCartasJugador.innerText = '';
        divCartasComputadora.innerText = '';
        btnPedir.disabled = false;
        btnDetener.disabled = false;
        btnNuevo.disabled = true;
    }

    const acumularPuntos = () => {

    }

    // Turno de la computadora
    const turnoComputadora = (puntosMinimos) => {
        do {
            const carta = pedirCarta();
            puntosComputadora += valorCarta(carta);
            smalls[1].textContent = puntosComputadora;

            //Crear y configurar la carta en memoria para asignar en el DOM
            const imgCarta = document.createElement('img');
            imgCarta.src = `assets/cartas/${carta}.png`;
            imgCarta.classList.add('carta');
            divCartasComputadora.append(imgCarta);
            if(puntosMinimos > 21) break;
        } while(puntosComputadora < puntosMinimos && puntosMinimos <= 21);
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

    // Eventos
    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta();
        puntosJugador += valorCarta(carta);
        smalls[0].textContent = puntosJugador;

        //Crear y configurar la carta en memoria para asignar en el DOM
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugador.append(imgCarta);

        // Lógica de victoria - derrota
        if(puntosJugador >= 21) {
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        }
    });

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    });

    btnNuevo.addEventListener('click', () => {
        reiniciar();
    });
})();