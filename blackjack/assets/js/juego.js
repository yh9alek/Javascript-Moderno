/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonts
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

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