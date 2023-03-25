import { check } from 'express-validator'
import { validateResults } from '../utils/handle.validators.js'

const validatorCreateItem = [
    check('name').exists().isString(),
    check('album').exists().isNumeric(),
    check('cover').exists().isString(),
    check('artist').exists().isObject(),
    check('artist.name').exists().isString(),
    check('artist.nickname').exists().isString(),
    check('artist.nationality').exists().isString(),
    check('duration').exists().isObject(),
    check('duration.start').exists().isNumeric(),
    check('duration.end').exists().isNumeric(),
    check('mediaId').exists().isMongoId(),
    (req, res, next) => validateResults(req, res, next)
]

const validatorGetItem = [
    check('id').exists().isMongoId(),
    (req, res, next) => validateResults(req, res, next)
]


export { validatorCreateItem, validatorGetItem }