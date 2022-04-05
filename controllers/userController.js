const User = require("../models/userModel")

exports.updateUser = async (req,res)=>{
    try {
        const id = req.params.id
        const data = req.body

        const user = await User.update(data,{where: {id: id}})

        res.status(200).json({
            message: 'user updated successfully',
            user: user
        })
    } catch (error) {
        res.send(error)
        
    }
}

exports.deleteUser = async (req,res)=>{
    try {
        const id = req.params.id

        const user = await User.destroy({where: {id: id}})

        res.status(200).json({
            message: 'user deleted successfully'
        })
    } catch (error) {
        res.send(error)
        
    }
}




















// exports.allAccess = (req, res) => {
//     res.status(200).send("Public Content.");
//   };
//   exports.userBoard = (req, res) => {
//     res.status(200).send("User Content.");
//   };
//   exports.adminBoard = (req, res) => {
//     res.status(200).send("Admin Content.");
//   };
//   exports.moderatorBoard = (req, res) => {
//     res.status(200).send("Moderator Content.");
//   };

