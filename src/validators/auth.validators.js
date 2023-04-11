import { check } from 'express-validator'
import { validateResults } from '../utils/handle.validators.js'


const validatorRegister = [
    check('name').exists().notEmpty().isLength({ min: 3, max: 99 }),
    check('age').exists().isNumeric(),
    check('email').exists().isEmail(),
    check('password').exists().notEmpty().isLength({ min: 5, max: 15 }),
    (req, res, next) => validateResults(req, res, next)
]

const validatorLogin = [
    check('email').exists().notEmpty().isEmail(),
    check('password').exists().notEmpty(),
    (req, res, next) => validateResults(req, res, next)
]


export { validatorRegister, validatorLogin }