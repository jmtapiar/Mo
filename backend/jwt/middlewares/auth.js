// middlewares/auth.js

const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        
        console.log("Estamos en el Auth headers  "+ req.headers.authorization);
        const token = req.headers.authorization.split(" ")[1];
        console.log("Esta es la token con el split  "+ token);
        
        jwt.verify(token, "longer-secret-is-better")
        next();
        
        
    } catch (err) {
        console.log("Dio error el Authorize  ")
        res.status(401).json({ message: "No token provided" });
    }
};