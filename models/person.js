const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
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
            enum:["chef","manager","waiter","SoftwareEngineer"],
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
        },
        username:{
            type:String,
            required:true,
            unique:true,
        },
        password:{
            type:String,
            required:true,
            unique:true
        }
    }
);
PersonSchema.pre('save',async function(next){
    const person=this;
    if(!person.isModified('password')){
        return next();
    }
    try{
        const salt=await bcrypt.genSalt(10);
        const hashPassword=await bcrypt.hash(person.password,salt);
        person.password=hashPassword;
        next();
    }catch(err){
       return next(err);
    }
});
    PersonSchema.methods.comparePassword=async function(pwd){
        try{
            return await bcrypt.compare(pwd,this.password);
        }catch(err){
            throw err;
        }
    }

//Create a person model
const Person=mongoose.model("Person",PersonSchema);
//export the Person model
module.exports=Person;
