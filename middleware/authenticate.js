const jwt=require("jsonwebtoken");
require("dotenv").config()
const authetication =(req,res,next)=>{
    const token =req.headers.authorization;

    if(token){
        const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY)
        if(decoded){
            const userID=decoded.userID;
            console.log(decoded)
            req.body.userID=userID;
           
            next();
        }else{
            res.send("please login first")
        }
    }else{
        res.send("please login first")
    }

}

module.exports = authetication;