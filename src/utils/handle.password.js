import { hash, compare } from 'bcrypt';


const encryptPassword = async (plainPassword) => {
    const salt = 10
    const hashed = hash(plainPassword, salt)
    return hashed
}

const comparePassword = (plainPassword, hashedPassword) => {
    return compare(plainPassword, hashedPassword)
}


export {
    encryptPassword,
    comparePassword
}