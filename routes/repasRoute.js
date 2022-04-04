const Repas = require('../models/repasModel')
const express = require('express')
const router = express.Router()
const RepasCategory = require('../controllers/repasController')

router
    .route('/create')
    .post(CategoryController.addRepas)