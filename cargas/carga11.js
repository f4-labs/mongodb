var mongodb = require('../configuracion/mongodb')
var documento = require('../documentos/fechas')

mongodb
  .then(db => {

    db.collection('fechas').remove()

    db.collection('fechas').insert(documento)
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
