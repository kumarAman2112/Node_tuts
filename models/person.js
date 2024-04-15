const mongoose=require('mongoose');
//create a person schema
const PersonSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        age:{
            type:Number
        },
        work:{
            type:String,
            enum:["chef","manager","waiter"],
            required:true
        },
        mobile:{
            type:Number,
            unique:true,
            required:true
        },
        email: {
        type:String,
        unique:true,
        required:true
        },
        address:{
            type:String,
            required:true
        },
        salary:{
            type:Number,
            required:true
        }
    }
);
//Create a person model
const Person=mongoose.model("Person",PersonSchema);
//export the Person model
module.exports=Person;
