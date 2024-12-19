import React, { useContext } from 'react'
import { food_list } from '../../assets/assets'
import { StoreContext } from '../../context/storeContext'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'

const foodDisplay = ({category}) => {
    const{food_list} = useContext(StoreContext);
  return (
    <div className='fooddisplay' id='foodisplay'>
        <h2>Top dishes near you</h2>
        <div className='fooddisplaylist'>
            {
                food_list.map((item,index)=>{
                    if(category==="All"||category===item.category){
                    return <FoodItem key={index} id={item._id} name={item.name} description={item.description}
                        price={item.price} image={item.image}/>
                    }
                })
            }
        </div>
    </div>
  )
}

export default foodDisplay
