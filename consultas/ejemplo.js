/**
 * @author Jorge Martínez Jiménez <faith92.koko@gmail.com>
 * @description el siguiente codigo obtiene un registro de mLab
 */

var mongodb = require('../configuracion/mongodb'); /* importar la configuracion */

mongodb
  .then(db => { /* OK!. */

    /* iniciar cuerpo */

    /* documento de criterio */
    var criterio = {
      nombre: 'Hugo'
    }

    db.collection('nombres').findOne(criterio)
      .then((res) => { /* OK!. obtiene el resultado de la consulta */

        console.log(res) /* imprime el resultado de la consulta */
        db.close() /* cierra la conexion */

      })
      .catch(error => { /* ERROR!. recibe un error */

        console.log('error', error) /* imprime el error */
        db.close() /* cierra la conexion */

      })

    /* cierra cuerpo */

  })
  .catch(error => { /* recibe un error */

    console.log(error)

  })
