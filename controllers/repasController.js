const Repas = require('../models/repasModel')
const multer = require('multer')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/images')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
    })
exports.upload = multer({ storage: storage })

exports.addRepas = async (req,res)=>{
    try {

        const {name,description,prix} = req.body
        const image = req.file.path
    
        const repas = await Repas.create({
            name: name,
            image: image,
            description: description,
            prix: prix
        })

        res.status(200).json({
            message: 'repas created successfully',
            repas: repas
        })
        
    } catch (error) {
        res.send(error)
    }

}