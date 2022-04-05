const Order = require('../models/orderModel')
const express = require('express')
const router = express.Router()
const orderController = require('../controllers/OrderController')

router
    .route('/create')
    .post(orderController.addOrder)

router
    .route('/update/:id')
    .post(orderController.updateOrder)

route
    .route('/delete/:id')
    .delete(orderController.deleteOrder)

module.exports = router;