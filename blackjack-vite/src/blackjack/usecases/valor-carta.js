/**
 * Devuelve el valor númerico de la carta enviada como argumento
 * @param {String} carta Un string que contiene la definición de la carta. Ej: '5C' 
 * @returns 
 */
export const valorCarta = (carta) => {
    if(!carta || typeof carta !== 'string') throw new Error('Se espera un string.');
    const digito = carta.substring(0, carta.length - 1);
    return isNaN(digito) ? 
        digito === 'A' ? 11 : 10 : digito * 1;
}