const express=require('express');
const router=express.Router();
const Person=require('../models/person');

//data is taken from the clients and saved in database;
router.post('/',async(req,res)=>{
    try{
      const personData=req.body;
      const newPerson=new Person(personData);
      const response=await newPerson.save();
      console.log("successfully saved the data of a new pesron in the database");
      res.status(200).json(response);
    }catch(error){
      console.log("error",error);
      res.status(500).json({error:"internal server error"});
    }
    })

//Now fetch the person data from the database and send it to the client;
router.get('/', async (req,res)=>{
    try{
      const personData= await Person.find();
      console.log("successfully fetched the data of all persons from the database");
      res.status(200).json(personData);
    }catch(error){
  
    }
    
  })
  router.get('/:workType',async(req,res)=>{
    try{
      const workType=req.params.workType;//extract the workType from the url parameter
      if(workType==='chef'||workType==='waiter'||workType==='manager'||workType==='SoftwareEngineer'){
        const response=await Person.find({work:workType});
        res.status(200).json(response);
      }
      else{
        res.status(404).json({error:"Invalid workType"});
      }
    }catch(err){
        res.status(500).json({error:"internal server error"});
    }
  });
  router.put('/:id',async(req,res)=>{
           try{
               const PersonId=req.params.id;
               const PersonData=req.body;
               const response=await Person.findByIdAndUpdate(PersonId,PersonData);
               res.status(200).json(response);
           }catch(err)
           {
            res.status(500).json({err:"internal server error"})
           }
  }
);
  
  module.exports=router;