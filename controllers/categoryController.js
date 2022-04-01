const Categorie = require('../models/repasCategory')

exports.addCategory = async (req,res)=>{
    const {type} = req.body.type

    if(!type){
        res.status(400).json({
            message: 'please insert a category type',
        })
    }

    res.status(200).json({
        message: 'category added successfully',
        categorie: categorie
    })

    const categorie = await Category.create({
        type: type
    })
}