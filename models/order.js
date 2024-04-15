const mongoose=require('mongoose');
const orderSchema=new mongoose.Schema(
    {
        name:{
            type:[String],
            required:true
        },
        price:{
            type:[Number],
            required:true
        },
        quantity:{
            type:[Number],
            required:true
        },
        total:{
            type:Number,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        isCash:{
            type:Boolean,
            required:true
        },
        isOnline:{
            type:Boolean,
            required:true
        },
        isDelivered:{
            type:Boolean,
            required:true
        
        }
        }
        
);
const Order=mongoose.model("Order",orderSchema);
module.exports=Order;