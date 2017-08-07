/**
 * @author Jorge Martínez Jiménez <faith92.koko@gmail.com>
 * @description configura el link de conexion y exporta la conexion
 */

var mongo = require('mongodb') /* requiere mongodb */

var mCliente = mongo.MongoClient /* obtener el cliente */

/* crear link de conexion */
var usuario = 'prueba' /* indica usuario */
var clave = 'estrella' /* indica contraseña del usuario */
var urlMongo = `mongodb://${usuario}:${clave}@ds149437.mlab.com:49437/prueba` /* genera link */

var mongodb = mCliente.connect(urlMongo)

module.exports = mongodb
