const mongoose = require('mongoose');
//collection schema
const orderSchema= new mongoose.Schema({
    cardItems:Array,
    amount:String,
    status:String,
    createdAt:Date
});

const orderModel = mongoose.model('Order',orderSchema);

module.exports=orderModel;
