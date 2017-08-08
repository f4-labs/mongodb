/**
 * @author Jorge Martínez Jiménez <faith92.koko@gmail.com>
 * @file callbacks.js
 * @description El siguiente codigo ejemplifica el uso de callbacks
 */

/**
 * @param {Function} callback es una funcion ejemplo
 *
 * @return {Void} sin retorno
 */

imprimirNombre = callback =>
  callback('Jorge')

imprimirNombre(nombre =>
  console.log('Hola ' + nombre))
