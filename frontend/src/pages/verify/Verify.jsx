import React, { useContext, useEffect } from 'react'
import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/storeContext';
import axios from "axios"
const Verify = () => {
    const [searchParams,setSearchParams]=useSearchParams();
    const success=searchParams.get("success");
    const orderId=searchParams.get("orderId");
    const navigate = useNavigate();
    const {url}=useContext(StoreContext); 

    // console.log(success,orderId);
    const verifyPayment = async () =>  {
        
        const response = await axios.post(url+"/api/order/verify",{success,orderId});
        // console.log("heloo");
        
        // console.log(response);
        
        if(response.data.success){
            navigate("/myorders")
        }
        else
        {
            navigate("/")
        }
        // console.log("dgfg")
    }

    useEffect(()=>{
        verifyPayment();
    },[])   

   return (
    <div className='verify'>
        <div className='spinner'>

        </div>
      
    </div>
  )
}

export default Verify
