/**
 * @author Jorge Martínez Jiménez <faith92.koko@gmail.com>
 * @description el siguiente codigo inserta un documento en mLab
 */

var mongodb = require('../configuracion/mongodb')
var documento = require('../documentos/comentarios')

mongodb
  .then(db => {

    db.collection('comentarios').remove()

    db.collection('comentarios').insert(documento)
      .then(() => {

        console.log('OK!.')
        db.close()

      })
      .catch(error => {

        console.log(error)
        db.close()

      })

  })
  .catch(error =>
    console.log(error))
