/**
 * @author Jorge Martínez Jiménez <faith92.koko@gmail.com>
 * @description el siguiente codigo inserta un documento en mLab
 */

var mongodb = require('../configuracion/mongodb'); /* importar la configuracion */

mongodb
  .then(db => { /* OK!. */

    /* iniciar cuerpo */

    var documento = {
      nombre: 'pablo',
      apellidos: 'perez',
      direccion: {
        calle: 'porfirio diaz',
        numero: 24,
        ciudad: 'tlaxiaco'
      },
      casado: true,
      hijos: null
    }

    db.collection('nombres').insert(documento)
      .then(() => { /* insertados */

        console.log('OK!. Documento insertado')
        db.close() /* cierra la conexion */

      })
      .catch(() => { /* no insertados */

        console.log('ERROR!. Ha ocurrido un error')
        db.close()

      })

    /* cierra cuerpo */

  })
  .catch(error => { /* recibe un error */

    console.log(error)

  })
