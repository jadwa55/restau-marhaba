const express = require('express')
const router = express.Router()
const CategoryController = require('../controllers/categoryController');

router
    .route('/create')
    .post(CategoryController.create)



module.exports = router;