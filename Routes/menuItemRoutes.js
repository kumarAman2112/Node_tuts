const express=require('express');
const router=express.Router();
const Menu=require('../models/menuItem');
router.post('/', async (req,res)=>{
    try{
      const menuData=req.body;
      const newMenuItem=new Menu(menuData);
      const response=await newMenuItem.save();
      console.log("successfully saved the data of a new menu item in the database");
      res.status(200).json(response);
    }catch(err){
      console.log("error",err);
      res.status(500).json({err:"internal server error"});
    }
  });
  router.get('/',async(req,res)=>{
    try{
      const menuData=await Menu.find();
      console.log("successfully fetched the data of all menu items from the database");
      res.status(200).json(menuData);
    }catch(err){
      console.log("error",err);
      res.status(500).json({error:"internal server error"});
    }
    });

    router.get('/:categoryType',async(req,res)=>{
        try{
const categoryType=req.params.categoryType;
if(categoryType==='starter'||categoryType==='main-course'||categoryType==='dessert')
{
    const response=await Menu.find({category:categoryType});
    res.status(200).json(response);
}
else{
    res.status(404).json({error:"Invalid categoryType"});
}
        }catch(err){
          res.status(500).json({error:"internal server error"});
        }
    })
router.put('/:id',async(req,res)=>{
try{
  const menuId=req.params.id;
  const updatedMenuData=req.body;
  const response=await Menu.findByIdAndUpdate(menuId,updatedMenuData);
  res.status(200).json(response);
}catch(err){
res.status(500).json({err:"internal server error"});
}
})
router.delete('/:id',async(req,res)=>{
  try{
    const menuId=req.params.id;
  const response=await Menu.findByIdAndDelete(menuId);
  res.status(200).json(response);
  }catch(err){
    res.status(500).json({err:"internal server error"})
  }
})

    module.exports=router;
