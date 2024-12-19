import React, { useState } from 'react';
import './FoodItem.css'
import { assets } from '../../assets/assets';
import { useContext } from 'react';
import { StoreContext } from '../../context/storeContext';

const FoodItem = ({id,name,price,description,image}) => {

  const {cartItems,addToCart,removeFromCart,url}=useContext(StoreContext);
  return (
    <div  className='fooditems'>
      <div className='fooditemimgcontainer'>
            <img className="itemimg" src={url+"/images/"+image}/>
            {
                !cartItems[id]?<img className="add"  onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=""/>:
                <div className='fooditemcounter'>
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=""/>
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=""/>
                </div>
            }
      </div>
      <div className='iteminfo'>
        <div className='itemrating'>
        <p>{name}</p>
        <img src={assets.rating_starts}/>
        </div>
        <p className='itemdesc'>{description}</p>
        <p className='itemprice'>${price}</p>     
      </div>
    </div>
  )
}

export default FoodItem
