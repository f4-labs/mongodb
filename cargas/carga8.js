var mongodb = require('../configuracion/mongodb')
var documento = require('../documentos/publicaciones')

mongodb
  .then(db => {

    db.collection('publicaciones').remove()

    db.collection('publicaciones').insert(documento)
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
