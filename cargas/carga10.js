var mongodb = require('../configuracion/mongodb')
var documento = require('../documentos/letras')

mongodb
  .then(db => {

    db.collection('letras').remove()

    db.collection('letras').insert(documento)
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
