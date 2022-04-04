const Repas = require('../models/repasModel')
const express = require('express')
const router = express.Router()
const RepasCategory = require('../controllers/repasController')

router
    .route('/create')
    .post(repasController.addRepas)

router
    .route('/update/:id')
    .post(repasController.updateRepas)