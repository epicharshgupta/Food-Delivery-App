import { log } from "console";
import foodModel from "../model/foodModel.js";
import fs from 'fs';

//add food item
const addFood = async (req,res)=>{
    let image_filename=`${req.file.filename}`;
    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try{
        await food.save();
        console.log("food saved")
        res.json({
            success:true,
            message:"food added"
        })
    } 
    catch(error){
        console.log(error);
        res.json({
            success:false,
            message:"error in food adding"   
        })
    }
}

//all food list
const listFood = async (req,res) =>{
    try{
        const foods=await foodModel.find({});
        console.log("foods are added")
        res.json({
            success:true,
            data:foods
        })
    }catch(error){
        console.log(error);
        res.json({
            success:false,
            message:"Error"
        })
        
    }
}

//remove food

const removeFood = async(req,res) =>{
        try{
            console.log("starts");
            
            const food = await foodModel.findById(req.body._id);
            console.log("food fetched");
            
            fs.unlink(`uploads/${food.image}`,()=>{});//delete image from upload folder
            await foodModel.findByIdAndDelete(req.body._id);//delete image from db
            console.log("foods removed");
            
            res.json({
                success:true,
                message:"food deleted succesfully"
            })
        }catch(error){
            console.log("food deletion error");
            console.log(error);
            
            res.json({
                success:false,
                message:"food is not deleted succesfully"
            })
        }
}
export {addFood,listFood,removeFood}