const express = require("express")
const Router = express.Router()
const {createFacture} = require('../controllers/FactureController')

Router.route('/facture/:id')
        .post(createFacture)


module.exports = Router