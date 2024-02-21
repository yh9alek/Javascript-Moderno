import { shuffle } from "underscore";

// Esta función crea un nuevo deck
export const crearDeck = (tipos, especiales) => {
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