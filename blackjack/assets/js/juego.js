/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonts
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0,
    puntosComputadora = 0;

// Esta función crea un nuevo deck
const crearDeck = () => {
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

    deck = _.shuffle(deck);
    return deck;
}

crearDeck();

// Esta función me permite tomar una carta
const pedirCarta = () => {
    if(deck.length === 0) throw 'No hay cartas en el deck.';
    return deck.pop();
}

// Esta función obtiene el valor de la carta enviada
const valorCarta = (carta) => {
    const digito = carta.substring(0, carta.length - 1);
    return isNaN(digito) ? 
          digito === 'A' ? 11 : 10 : digito * 1;
}

// Referencias HTML
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');
btnNuevo.disabled = true;
const smalls = document.querySelectorAll('.col > h1:first-of-type > small');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const reiniciar = () => {
    deck = [];
    smalls.forEach(small => small.textContent = 0);
    [puntosJugador, puntosComputadora] = [0, 0];
    divCartasJugador.innerText = '';
    divCartasComputadora.innerText = '';
    btnPedir.disabled = false;
    btnDetener.disabled = false;
    btnNuevo.disabled = true;
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
    deck = crearDeck();
});