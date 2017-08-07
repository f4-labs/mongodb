/**
 * @author Jorge Martínez Jiménez <faith92.koko@gmail.com>
 * @description el siguiente codigo inserta un documento en mLab
 */

var mongodb = require('../configuracion/mongodb')
var documentos = require('../documentos/calificaciones')

mongodb
  .then(db => {

    db.collection('calificaciones').remove()

    db.collection('calificaciones').insert(documentos)
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
    console.log('Error', error))
