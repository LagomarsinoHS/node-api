import multer from 'multer'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)

// Defino el storage con multer, donde se indica el lugar donde guardara lo que recibo y que hara con el nombre de archivo
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const path = `${__dirname}/../storage`
        cb(null, path)
    },
    filename: function (req, file, cb) {
        const ext = file.originalname.split('.').pop()
        cb(null, `file-${Date.now()}.${ext}`)
    }
})

// Creamos una variable con la configuración de multer
const uploadMiddleware = multer({ storage })

export { uploadMiddleware }