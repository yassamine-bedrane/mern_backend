const express = require('express');
const router = express.Router();
const Specialite = require('../models/Specialite');


router.get('/',async (req,res)=>{
    try{

        const data=await Specialite.find();
        res.json(data);
    }catch(err){
        res.status(500).json("Server Error")
    }
})

module.exports=router;