const Order = require("../models/orderModel")

exports.addOrder= async (req,res)=>{
    const {type} = req.body

    if(!type){
        res.status(400).json({
            message: 'please choose a repa',
        })
    }

    const order= await Order.create({
        type: type,
        status: status,
        address: address
    })

    res.status(200).json({
        message: 'Orderadded successfully',
        order: order
    })
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