var mongodb = require('../configuracion/mongodb')
var documento = require('../documentos/puntuaciones')

mongodb
  .then(db => {

    db.collection('puntuaciones').remove()

    db.collection('puntuaciones').insert(documento)
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
