const express = require("express")
const Router = express.Router()
const {createFacture} = require('../controllers/facture.controller')

Router.route('/facture/:id')
        .post(createFacture)


module.exports = Router