var mongodb = require('../configuracion/mongodb')
var documentos = require('../documentos/pasatiempos')

mongodb
  .then(db => {

    db.collection('pasatiempos').remove()

    db.collection('pasatiempos').insert(documentos)
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
