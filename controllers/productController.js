const productModel = require('../models/productModels');



//get products API - /api/v1/products
exports.getProducts= async (req , res, next)=>{

 const products =  await productModel.find({})

    res.json({
        success:true,
        products
    })
}

//get single products API - /api/v1/product/:id
exports.getSingleProduct= async (req , res, next)=>{
    try{

        const product =  await productModel.findById(req.params.id);
        res.json({
            success:true,
            product
        })
    }catch(error){
        res.status(404).json({
            success:false,
            message:'Unable to get product with that ID'
        })  
    }
    
   
 
    


  
}