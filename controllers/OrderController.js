// const Order = require("../models/orderModel")
const {Order,Repas,RepasOrder} = require('../config/migration')
const jwt = require('jsonwebtoken')




const decodeToken = (token)=>{
    return jwt.verify(token, process.env.SECRET_KEY)
}

exports.submitOrder = async (req,res)=>{
    try {
        // const token = req.headers.authorization.split(' ')[1]
        // const payload = decodeToken(token)
        const {status, address, clientIdId} = req.body        
        const order =  await Order.create({address : address, clientIdId: clientIdId, status: status })
        console.log(order);
        // const Norder = await Order.findOne({where: {UserId: payload.id}})
        // const repa = await Repas.findOne({where: {name: repas}})
        // const repasOrder  = await RepasOrder.create({
        //     quantity: quantity,
        //     RepaId: repa.id,
        //     OrderId: Norder.id
        // })
        res.status(200).json({
            message: 'order submited successfully',
            order: order
        })
    } catch (error) {
        res.send(error)
    }

}

exports.updateOrderStatus = async (req,res)=>{
    const id = req.params.id
    const {status} = req.body

    try {
        if(!status || !id){
            res.status(400).json({
                message: 'please insert a status'
            })
        }


        const updateStatus = await Order.update({status: status}, {where: {id: id}})

        res.status(200).json({
            message: 'status updated successfully',
            updateStatus
        })
    } catch (error) {
        res.send(error)
        
    }
}

exports.deleteOrder = async (req,res)=>{
    try {
        const id = req.params.id

        const order = await Order.destroy({where: {id: id}})

        res.status(200).json({
            message: 'order deleted successfully'
        })
    } catch (error) {
        res.send(error)
        
    }
}

exports.getAllOrder = async (req,res)=>{
    try {
        const order = await Order.findAll()

        if(!order){
            res.status(204).json({
                message: 'no order found'
            })
        }

        res.status(200).json({
            message: 'success',
            order: order
        })

        
    } catch (error) {
        res.send(error)
        
    }
}