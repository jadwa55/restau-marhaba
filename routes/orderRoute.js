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

router
    .route('/delete/:id')
    .delete(orderController.deleteOrder)

router
    .route('/')
    .get(orderController.getAllOrder)

module.exports = router;