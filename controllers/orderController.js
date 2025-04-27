const orderModel = require('../models/orderModel');
const productModel = require('../models/productModels')


//create order - /api/v1/order
exports.createOrder= async (req, res, next)=>{

    const cardItems = req.body;
    const amount = Number( cardItems.reduce((acc, item)=>(acc + item.product.price*item.qty), 0)).toFixed(2);
    const status = 'pending';
    //console.log(amount, 'AMOUNT');
     const order =  await orderModel.create({cardItems, amount, status})
     
     //updating product stock
    //  cardItems.forEach(async (item) => {
    //     const product = await  productModel.findById(item.product._id);
    //     product.stock = product.stock - item.qty;
    //     await product.save();
    //  });

    res.json({
        success:true,
        order
    })
}