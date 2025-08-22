import mongoose from "mongoose";


export const connectdb=async()=>
    await mongoose.connect("mongodb+srv://harshitguptapranjul:gjpc34vRqfkqARys@cluster2.3fjge.mongodb.net/foodel").then(()=>
        console.log("db connected ")
    )


// export const connectdb = async (req,res) => {
//     await mongoose.connect("YOUR MONGODB URL").then(()=>
//         console.log("db connected "));
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

