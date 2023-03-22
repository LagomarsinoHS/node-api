export { userRoutes }  from './users.routes.js'
export { trackRoutes } from './tracks.routes.js'
export { storageRoutes } from './storages.routes.js'


// Otra cosa interesante que se puede hacer, pero usando las importaciones con require es crear dinamicamente los endpoints
/**
 * 1.- Importo fs
 * 2.- Importo Router
 * 3.- Leo el directorio donde estoy parado actualmente
 * 4.- Por cada archivo leido, consigo fraccion del nombre que necesito
 * 5.- Ignoro el archivo index.js porque es este
 * 6.- Le digo a router que usara como endpoint el nombre encontrado y hara un require del archivo de rutas asociado
 * 6.a.- De esta manera creara ruta /users y le metera el require de lo que esta dentro de ese archivo y asi para los otros
 */
/* const fs = require('fs')
const router = require('express').Router()
const removeExt = fileName => fileName.split('.').shift()
const routesArr = fs.readdirSync(__dirname) // [storage.routes.js, tracks.routes.js, users.routes.js]

routesArr.forEach(file => {
    const name = removeExt(file)// storage.routes.js -> storage
    if (file !== 'index') {
        router.use(`/${name}`, require(`./${name}.routes.js`))
    }
}) */
