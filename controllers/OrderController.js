// const Order = require("../models/orderModel")
const {Order,Repas,RepasOrder} = require('../config/migration')

exports.addOrder= async (req,res)=>{
    try {
        const token = req.headers.authorization.split(' ')[1]
        const payload = decodeToken(token)
        const {repas, address, quantity} = req.body        
        const order =  await Order.create({address : address, UserId: payload.id })
        const Norder = await Order.findOne({where: {UserId: payload.id}})
        const repa = await Repas.findOne({where: {name: repas}})
        console.log(repa);
        console.log(Norder.id)
        const repasOrder  = await RepasOrder.create({
            quantity: quantity,
            RepaId: repa.id,
            OrderId: Norder.id
        })
        res.status(200).json({
        message: 'order submited successfully',
        order: order
        })
    } catch (error) {
        res.send(error)
        console.log(error);
    }
}

exports.updateOrder = async (req,res)=>{
    try {
        const id = req.params.id
        const data = req.body

        const order = await Order.update(data,{where: {id: id}})

        res.status(200).json({
            message: 'order updated successfully',
            order: order
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