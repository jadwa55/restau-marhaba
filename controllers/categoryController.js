const Category = require('../models/repasCategory')

exports.addCategory = async (req,res)=>{
    const {type} = req.body

    if(!type){
        res.status(400).json({
            message: 'please insert a category type',
        })
    }

    const category = await Category.create({
        type: type
    })

    res.status(200).json({
        message: 'category added successfully',
        category: category
    })


}

exports.updateCategory = async (req,res)=>{

    try {
        const id = req.params.id

        const type = req.body.type

        if(!type){
            res.status(400).json({
                message: 'please insert a category type',
            })
        }

        const category = await Category.update({type: type}, {where: {id: id}})

        res.status(200).json({
            message: 'category updated successfully',
            category: category
        })
    } catch (error) {
        res.send(error)
    }
}

exports.deleteCategory = async (req,res)=>{

    try {
        const id = req.params.id

        const category = await Category.destroy({where: {id: id}})

        res.status(200).json({
            message : 'category deleted successfully',
        })
        
    } catch (error) {
        res.send(error)
    }
}

exports.getAllCategory = async (req,res)=>{
    try {
        const category = await Category.findAll()

        if(!category){
            res.status(204).json({
                message: 'no category found'
            })
        }

        res.status(200).json({
            message: 'success',
            category: category
        })
    } catch (error) {
        res.send(error)
    }
}