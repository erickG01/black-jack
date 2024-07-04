
/**
 * 
 * @param {String} carta recibe un string
 * @returns {number}regresa el valor de la carta como entero
 */


export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}