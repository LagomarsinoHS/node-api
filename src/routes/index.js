/* export { userRoutes } from './users.routes.js'
export { trackRoutes } from './tracks.routes.js'
export { storageRoutes } from './storages.routes.js' */


import { readdirSync } from "fs";
import express from 'express'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)
const router = express.Router()

const handleFile = fileName => {
    const file = fileName.split('.').shift()
    const route = fileName
    return { file, route }
}

//### importación de rutas dinamica ###

//Leo todos los archivos que estan en esta carpeta
const routesArr = readdirSync(__dirname) // [storage.routes.js, tracks.routes.js, users.routes.js]

//Por cada archivo....
routesArr.forEach(async rFile => {
    //Consigo su nombre y la ruta completa
    const { file, route } = handleFile(rFile)
    //Si es index ignoro
    if (file === 'index') return;
    //Importo el modulo
    const module = await import(`./${route}`)
    //Uso la ruta
    //! ojo! module.<router> es el nombre de lo que estoy exportando en cada archivo.routes.js
    // todos esos archivos tienen export {router}, si fuera export {algo} aqui tendria ue poner module.algo
    router.use(`/${file}`, module.router);
})

export { router as routes }

