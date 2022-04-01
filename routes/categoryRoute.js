const Category = require('../models/repasCategory')
const express = require('express')
const router = express.Router()
const CategoryController = require('../controllers/CategoryController');

router
    .route('/create')
    .post(CategoryController.addCategory)

router
    .route('/update/:id')
    .post(CategoryController.updateCategory)

module.exports = router;