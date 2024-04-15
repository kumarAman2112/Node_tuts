const mongoose=require('mongoose');
//create a menuItem schema
const menuSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        category:{
            type:String,
            enum:["starter","main-course","dessert"],
            required:true
        },
        size:{
            type:String,
            enum:["small","medium","large"],
            required:true
        },
        isAvailable:{
            type:Boolean,
            default:true
        },
        isVeg:{
            type:Boolean,
            default:true
        },
        ingredients:{
            type:[String],
            required:true
        },

    }
);
//Create a menuItem model
const Menu=mongoose.model("Menu",menuSchema);
//export the menuItem model
module.exports=Menu;