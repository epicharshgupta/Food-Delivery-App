import mongoose from "mongoose";


export const connectdb = async (req,res) => {
    await mongoose.connect("YOUR MONGODB URL").then(()=>
        console.log("db connected "));
    // try{
    //     res.json({
    //         success:true,
    //         message:"connection successfull"
        
    //     })
    // }
    // catch(error){
    //     console.log("not connected");
        
    //     res.json({
    //         success:false,
    //         message:"connection error"
        
    //     })
    // }
}
