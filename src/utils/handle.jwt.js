import jwt from 'jsonwebtoken'

const tokenSign = async (user) => {
    const signed = jwt.sign(
        {
            _id: user.id,
            role: user.role
        },
        process.env.JWT_SECRET,
        { expiresIn: "2h" }
    )
    return signed;
}

const verifyToken = async (tokenJWT) => {
    try {
        return jwt.verify(tokenJWT)
    } catch (error) {
        return error
    }
}


export {
    tokenSign, verifyToken
}