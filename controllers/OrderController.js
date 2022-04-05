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

