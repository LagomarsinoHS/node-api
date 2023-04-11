import { matchedData } from "express-validator"
import { comparePassword, encryptPassword } from "../utils/handle.password.js"
import { tokenSign } from "../utils/handle.jwt.js"
import userModel from "../models/noSql/user.model.js"
import { handleHTTPError } from "../utils/handle.error.js"

const registerController = async (req, res) => {
    try {
        // Limpio la data del req con el express validator
        const body = matchedData(req)

        // Encripto la contraseña
        const encryptPass = await encryptPassword(body.password)

        // Creo la información para el nuevo usuario
        const data = { ...body, password: encryptPass }

        // Inserto en la BD nuevo usuario y rescato password y lo demas
        const newUser = await userModel.create(data)

        // Oculto la password para no mostrarla
        newUser.set('password', undefined, { strict: false })

        res.json({
            user: newUser,
            token: await tokenSign(newUser)
        })
    } catch (error) {
        handleHTTPError(res, `Something happend Auth-registerController-${error}`, 400)
    }
}

const loginController = async (req, res) => {
    try {
        // Limpio la data del req con el express validator
        const { email, password } = matchedData(req)
        const user = await userModel.findOne({ email })
                
        // Si no existe el usuario, mando error
        if (!user) {
            handleHTTPError(res, `User not exist`, 404)
            return
        }
        
        // Valido si la contraseña ingresada es correcta
        const isValidPassword = await comparePassword(password, user.password)

        // Caso de que no, mando error
        if (!isValidPassword) {
            handleHTTPError(res, `Invalid Credentials`, 401)
            return
        }

        // Escondo la contraseña del usuario
        user.set('password', undefined, { strict: false })

        // Envio información del usuario y token
        res.json({
            user,
            token: await tokenSign(user)
        })

    }
    catch (error) {
        handleHTTPError(res, `Something happend Auth-registerController-${error}`, 400)
    }
}

export {
    registerController,
    loginController
}