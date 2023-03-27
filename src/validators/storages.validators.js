import { check } from 'express-validator'
import { validateResults } from '../utils/handle.validators.js'

const validatorCreateItem = [
    check('url').exists().isString(),
    check('filename').exists().isString(),
    (req, res, next) => validateResults(req, res, next)
]

const validatorGetItem = [
    check('id').exists().isMongoId(),
    (req, res, next) => validateResults(req, res, next)
]


export { validatorCreateItem, validatorGetItem }