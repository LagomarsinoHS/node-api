import { validationResult } from 'express-validator'

const validateResults = (req, res, next) => {
    try {
        validationResult(req).throw()
        return next();
    } catch (errors) {
        res.status(403).json({
            errors:errors.array()
        })
    }
}

export { validateResults }