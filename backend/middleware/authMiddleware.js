const jwt = require('jsonwebtoken');
const JWT_SECRET = "hum_to_doobe_hai"; // Change this in production

const authMiddleware = (req,res,next) => {
    const token = req.header("Authorization");
    if (!token) return res.status(401).json({message:"Access Denied"})
        try {
            const verify = jwt.verify(token, JWT_SECRET);
            console.log("verify",verify);
            res.user = verify
            next();
        } catch (error) {
            console.log(error);
            
        }
};

module.exports = {authMiddleware}