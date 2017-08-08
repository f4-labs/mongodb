/**
 * @author Jorge Martínez Jiménez <faith92.koko@gmail.com>
 * @file promesas.js
 * @description código del ejemplo de una promesa
 */

/**
 * @return {Promise} promesa
 */

asincrono = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('Ok!.'), 5000) /* configuracion del intervalo de tiempo*/
  })

asincrono() /* Se ejecuta la funcion asincrono*/
  .then(snapshot => console.log(snapshot)) /* resolve -> code: 200 */
  .catch(e => console.log('Error')) /* reject -> code: != 200 */
