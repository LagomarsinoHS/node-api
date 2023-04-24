import { User } from "../models/index.js";
import { handleHTTPError } from "../utils/handle.error.js"
import { verifyToken } from "../utils/handle.jwt.js";

const authMiddleware = async (req, res, next) => {
    try {
        // Revisa si la petición viene con un token de autorización, caso de que no, arroja error
        if (!req.headers.authorization) {
            handleHTTPError(res, 'not_token', 401)
            return
        }

        // Consigo el token, lo mandamos asi -> Bearer token
        const token = req.headers.authorization.split(' ').pop()

        // Usamos nuestra funcion para verificar si el token es correcto (en caso de que si la respuesta trae la data que le metimos al sign token)
        const dataToken = await verifyToken(token)

        // En caso de que no tenga Id, arrojamos error
        if (!dataToken._id) {
            handleHTTPError(res, 'error_id_token')
            return
        }

        // Conseguimos la información del usuario y se la agregamos al req por si se necesita usar
        const user = await User.findById(dataToken._id)
        req.user = user

        // Que pase a lo siguiente
        next()
    } catch (error) {
        handleHTTPError(res, 'not_session', 401)
    }
}

export {
    authMiddleware
}