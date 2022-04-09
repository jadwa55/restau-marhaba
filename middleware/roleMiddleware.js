const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config();

exports.checkAdminRole =  (req,res, next)=>{
    let token = req.headers.authorization

    if(!token){
        res.status(400).json({
            message: 'you dont have access to this service'
        })
    }else{
        token = req.headers.authorization.split(" ")[1]
    }


    try {
        const payload = jwt.verify(token, process.env.SECRET_KEY)
        if(!payload.role == 'admin'){
            res.status(400).json({
                message: "you dont have access to this data"
            })
        }else if(payload.role == 'admin'){
            next()
        }
        
    } catch (error) {
        res.send(error)
        
    }
}




exports.checkLivreurRole = async (req,res,next)=>{
    let token = req.headers.authorization
    let payload
    console.log(token);

    if(!token){
        res.status(400).json({
            message: 'you dont have access to this service'
        })
    }else{
        token = req.headers.authorization.split(" ")[1]
    }

    try {
        payload =  await jwt.verify(token, process.env.SECRET_KEY)
        console.log(payload);
        if(payload.role == "livreur"){
            
            next();
        }else{
           res.json({
            message: 'you dont have access to this service'
           })
        }
    } catch (error) {
        res.send(error)
        
    }

}