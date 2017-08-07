var mongodb = require('../configuracion/mongodb')
var documento = require('../documentos/torterias')

mongodb
  .then(db => {

    db.collection('torterias').remove()

    db.collection('torterias').insert(documento)
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
