const jwt=require("jsonwebtoken")

module.exports= (req, res, next)=> {
try {
    const token= req.header("Authorization")
    if(!token) return res.status(400).send("Acces denied. No valid token ")

    const user= jwt.verify(token,process.env.JWTKEY)

    req.payload=user


    next()
} catch (error) {
    res.status(400).send("invalid token ")
}
}