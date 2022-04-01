const User = require("../models/userModel")
const jwt = require("jsonwebtoken")
const dotenv = require('dotenv').config();



exports.signUp = async (req, res)=>{

    
    try {
        

        const user = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            passwordConfirm: req.body.passwordConfirm,
            telephone: req.body.telephone
        })
        
        console.log('done');
        const token = jwt.sign({id: user.id}, process.env.SECRET_KEY, {expiresIn: process.env.EXPIRE_IN})
        
        console.log(token)    

        res.status(201).json({
            user: user,
            token: token
        })
        
    } catch (error) {

        res.send(error)
        
    }

}



exports.signIn = async (req,res)=>{

    try {
        const {email, password} = req.body

        const user = await User.findOne({where: {email: email}})
    
        if(!user || !user.password == password){
            res.status(401).json({
                message: 'email or password not correct'
            })
        }else {
            const token = jwt.sign({id: user.id}, process.env.SECRET_KEY, {
                expireIn: process.env.EXPIRE_IN
            })

            res.status(201).json({
                message: 'success',
                token: token
            })
            
        }


    } catch (error) {

        res.status(401).send(error)
        
    }


}