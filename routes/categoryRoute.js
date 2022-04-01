const Category = require('../models/repasCategory')
const express = require('express')
const router = express.Router()
const CategoryController = require('../controllers/CategoryController');

router
    .route('/create')
    .post(CategoryController.addCategory)



module.exports = router;