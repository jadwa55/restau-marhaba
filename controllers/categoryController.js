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