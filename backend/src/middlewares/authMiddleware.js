import jwt from 'jsonwebtoken'

const verifyToken = (req, res, next) => {
    console.log("Reached auth")
    let token ; 
    let authHeader = req.headers.Authorization || req.headers.authorization

    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1]

        if (!token) {
            return res.status(401).json({message : "No valid token, authorization denied"})
        }

        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET)
            req.user = decode;
            console.log(`The decoded user is ${decode}`)
            next()
        } catch (err) {
            res.status(400).json({message : "Token is not valid"})
        }
    } else {
        res.status(401).json({message : "No Token, Authorization denied"})
    }
}

export default verifyToken