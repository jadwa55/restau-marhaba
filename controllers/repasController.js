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

exports.updateRepas = async (req,res)=>{
    try {
        const id = req.params.id
        const data = req.body

        const repas = await Repas.update(data,{where: {id: id}})

        res.status(200).json({
            message: 'repas updated successfully',
            repas: repas
        })
    } catch (error) {
        res.send(error)
        
    }
}

exports.deleteRepas = async (req,res)=>{
    try {
        const id = req.params.id

        const repas = await Repas.destroy({where: {id: id}})

        res.status(200).json({
            message: 'repas deleted successfully'
        })
    } catch (error) {
        res.send(error)
        
    }
}


exports.getAllRepas = async (req,res)=>{
    try {
        const repas = await Repas.findAll()

        if(!repas){
            res.status(204).json({
                message: 'no repas found'
            })
        }

        res.status(200).json({
            message: 'success',
            repas: repas
        })

        
    } catch (error) {
        res.send(error)
        
    }
}