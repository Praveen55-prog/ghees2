const Product=require('../models/product')


exports.allproducts=async(req,res,next)=>{
    const ghee=await Product.find()
    res.status(200).json({
        status:true,
        count:ghee.length,
        message:'connected',
        ghee
    })
}

exports.addproducts=async(req,res,next)=>{
    const ghee=await Product.create(req.body)

    res.status(200).json({
        status:true,
        message:"Products added successfully",
        ghee
    })
}