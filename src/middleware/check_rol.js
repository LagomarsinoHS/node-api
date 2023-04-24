import { handleHTTPError } from "../utils/handle.error.js"

const checkRol = (availableRoles) => (req, res, next) => {
    try {
        const { user } = req
        if (!availableRoles.includes(user.role)) {
            handleHTTPError(res, 'Forbidden resource', 403)
            return
        }

        next()
    } catch (error) {
        handleHTTPError(res, 'Error Permissions', 403)
    }

}

export {
    checkRol
}