const Order = require('../models/orderModel')
const express = require('express')
const router = express.Router()
const {submitOrder,updateOrder,deleteOrder,getAllOrder} = require('../controllers/OrderController')

router
    .route('/create')
    .post(submitOrder)
// router
//     .route('/update/:id')
//     .post(updateOrder)

router
    .route('/delete/:id')
    .delete(deleteOrder)

router
    .route('/')
    .get(getAllOrder)

module.exports = router;