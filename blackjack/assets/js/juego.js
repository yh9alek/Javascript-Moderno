/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonts
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

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