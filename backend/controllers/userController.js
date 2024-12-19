import userModel from "../model/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt";
import validator from "validator";

//login user
const loginUser=async (req,res) =>{
    const {email,password}=req.body;
    try{
        const user=await userModel.findOne({email})
        if(!user){
            return res.json({
                success:"false",
                message:"user does not exist"
            })
        }
        const ismatch=await bcrypt.compare(password,user.password)
        if(!ismatch){
            return res.json({
                success:"false",
                message:"Enter valid details/Invalid credentials"
            })
        }
        const token=createToken(user._id)
        res.json({
            success:"true",
            token    
            })
    }catch(error){
        res.json({
            success:"false",
            message:"Something went wrong"
        })
    }
}

const createToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET);
}
//register user
const registerUser = async (req,res) =>{

    const {name,password,email}=req.body;
    try{
        const exist=await userModel.findOne({email});
        //checking if user already exist
        if(exist){
            return res.json({
                success:false,
                message:"User already exist"
            })
        }
        //validating email and strong password
        if(!validator.isEmail(email)){
            return res.json({
                success:false,
                message:"Please enter valid email"
            })
        }

        if(password.length<8){
            return res.json({
                success:false,
                message:"Enter strong password"
            })
        }
        //hashing user passowrd
        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt);

        const newUser=new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })

        const user=await newUser.save()
        const token = createToken(user._id);
        return res.json({
            success:true,
            token
        });
    }catch(error){
        console.log(error);
        return res.json({
            success:false,
            message:"Error"
        })
        
    }
}

export {loginUser, registerUser}