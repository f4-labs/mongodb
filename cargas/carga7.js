var mongodb = require('../configuracion/mongodb')
var documento = require('../documentos/animales')

mongodb
  .then(db => {

    db.collection('animales').remove()

    db.collection('animales').insert(documento)
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
