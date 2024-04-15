const express=require('express');
const router=express.Router();
const Order=require('../models/order');
router.post('/',async(req,res)=>{
    try{
       const orderData=req.body;
       const newOrder=new Order(orderData);
       const response=await newOrder.save();
       res.status(200).json(response);
    }catch(err){
        res.status(500).json({err:"Internal server error"});
    }
});
router.get('/',async(req,res)=>{
    try{
    const response=await Order.find();
    res.status(200).json(response);
    }catch(err){
        res.status(500).json({err:"Internal server error"});
    }
});
router.put('/:id',async(req,res)=>{
    try{
const OrderId=req.params.id;
const updatedOrderData=req.body;
const response=await Order.findByIdAndUpdate(OrderId,updatedOrderData);
res.status(200).json(response);
    }catch(err){
        res.status(500).json({err:"Internal server error"});
    }

})
router.delete('/:id',async(req,res)=>{
try{
const OrderId=req.params.id;
const response=await Order.findByIdAndDelete(OrderId);
}catch(err){
    res.status(500).json({err:"Internal server error"});
}
})
    
module.exports=router;