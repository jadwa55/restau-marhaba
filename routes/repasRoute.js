const Repas = require('../models/repasModel')
const express = require('express')
const router = express.Router()
const repasController = require('../controllers/repasController')
const { upload } = require('../controllers/repasController')
router
    .route('/create')
    .post(upload.single("image"), repasController.addRepas)

router
    .route('/update/:id')
    .post(repasController.updateRepas)

router
    .route('/delete/:id')
    .delete(repasController.deleteRepas)

router
    .route('/repas')
    .get(repasController.getAllRepas)

module.exports = router;