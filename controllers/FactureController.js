const {Order,Repas,Facture,RepasOrder} = require('../config/migration')
const nodemailer = require("nodemailer");


exports.createFacture = async (req,res)=>{
    const orderId = req.params.id
    const totalPrice = req.body.totalPrice
    // const order = await Order.findOne({raw: true},{where:{id: orderId}})
    // const repasOrder = await RepasOrder.findAll({raw: true},{where: {OrderId: orderId}})
    // console.log(repasOrder)
    // const repas = await Repas.findAll({raw: true}, {where: {id: repasOrder.RepaId}})

    try {
        const facture = await Facture.create({
            total_price: totalPrice,
            OrderId: orderId
        })
    
    
        let transporter = nodemailer.createTransport({
            host: "smtpout.secureserver.net",
            secure: false,
            secureConnection: false, // TLS requires secureConnection to be false
            tls: {
            ciphers: "SSLv3",
            },
            requireTLS: true,
            port: 465,
            service: 'outlook',
            debug: true, 
            auth: {
            user: `daioufsali@outlook.fr`, 
            pass: `Sali55@@`, 
            },
        });
    
        let info = await transporter.sendMail({
            from: '"salma 👻" daioufsali@outlook.fr', 
            to: "daioufsali@gmail.com", 
            subject: "facture de l'ordre",
            text: "test", 
            html: `<b>Facture de l'order</b>
                    ${totalPrice} ${orderId}`, 
        });
    
    
        res.status(200).json({
            message: 'facture created successfully'
        })
        
    } catch (error) {
        res.send(error)
        
    }

}